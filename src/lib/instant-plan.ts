import { getAllRecipes } from "@/data/recipes";
import type { FullRecipe } from "@/data/recipes/types";
import {
  passesRestriction,
  CUISINE_MAP,
  seedFromString,
  mulberry32,
  seededShuffle,
} from "@/lib/preview-plan";

/**
 * Instant homepage plan: a calorie-targeted single day assembled from the
 * recipe library. Zero API cost — this is the free "toy" that demos the
 * product before signup. The paid product (7-day AI plan) is untouched.
 *
 * Selection is deterministic per (inputs, nonce): the client sends a fresh
 * nonce on every "Generate" click for a whole new day, and bumps a per-slot
 * variant counter to swap a single meal while the rest stay fixed.
 */

export const INSTANT_DIETS = [
  "anything",
  "vegetarian",
  "vegan",
  "pescatarian",
  "keto",
  "low-carb",
  "gluten-free",
  "dairy-free",
  "mediterranean",
  "halal",
  "kosher",
  "high-protein",
] as const;
export type InstantDiet = (typeof INSTANT_DIETS)[number];

export type InstantSlot = "breakfast" | "lunch" | "dinner" | "snack";

export interface InstantPlanRequest {
  diet: InstantDiet;
  calories: number;
  /** 2 = lunch + dinner, 3 = breakfast/lunch/dinner, 4 = three meals + snack */
  meals: 2 | 3 | 4;
  /** Client-generated per-"Generate" seed so each press reshuffles the day */
  nonce: number;
  /** Per-slot swap counters; bumping one swaps only that meal */
  variants?: Partial<Record<InstantSlot, number>>;
}

export interface InstantMeal {
  slot: InstantSlot;
  slug: string;
  name: string;
  emoji: string;
  /** Calories for the servings shown (per-serving × servings) */
  calories: number;
  servings: number;
  totalTime: number;
  variant: number;
}

export interface InstantPlanResult {
  meals: InstantMeal[];
  totalCalories: number;
  targetCalories: number;
}

export const INSTANT_CALORIES_MIN = 1000;
export const INSTANT_CALORIES_MAX = 4500;

const SLOT_BUDGETS: Record<InstantPlanRequest["meals"], [InstantSlot, number][]> = {
  2: [
    ["lunch", 0.45],
    ["dinner", 0.55],
  ],
  3: [
    ["breakfast", 0.28],
    ["lunch", 0.34],
    ["dinner", 0.38],
  ],
  4: [
    ["breakfast", 0.25],
    ["lunch", 0.31],
    ["dinner", 0.34],
    ["snack", 0.1],
  ],
};

function passesDiet(recipe: FullRecipe, diet: InstantDiet): boolean {
  switch (diet) {
    case "anything":
      return true;
    case "vegetarian":
      return passesRestriction(recipe, "Vegetarian");
    case "vegan":
      return passesRestriction(recipe, "Vegan");
    case "pescatarian":
      return passesRestriction(recipe, "Pescatarian");
    case "keto":
      return passesRestriction(recipe, "Keto");
    case "low-carb":
      return passesRestriction(recipe, "Low-Carb");
    case "gluten-free":
      return passesRestriction(recipe, "Gluten-Free");
    case "dairy-free":
      return passesRestriction(recipe, "Dairy-Free");
    case "mediterranean":
      return (
        recipe.tags.includes("mediterranean") ||
        (CUISINE_MAP.Mediterranean ?? []).includes(recipe.cuisine)
      );
    case "halal":
      return passesRestriction(recipe, "Halal");
    case "kosher":
      return passesRestriction(recipe, "Kosher");
    case "high-protein":
      return recipe.tags.includes("high-protein");
  }
}

// Diet is a hard filter; when a slot runs dry we borrow diet-safe recipes
// from other main-meal slots rather than violate it (same ladder as preview).
function buildSlotPool(all: FullRecipe[], slot: InstantSlot, diet: InstantDiet): FullRecipe[] {
  let pool = all.filter((r) => r.mealType === slot && passesDiet(r, diet));
  if (pool.length < 3 && slot !== "snack") {
    pool = all.filter((r) => r.mealType !== "snack" && passesDiet(r, diet));
  }
  if (pool.length === 0) pool = all.filter((r) => r.mealType === slot);
  return pool;
}

interface Candidate {
  recipe: FullRecipe;
  servings: number;
  calories: number;
  fit: number;
}

// One candidate per recipe: whichever serving count (1–3 for meals, 1 for
// snacks) lands closest to the slot budget without overshooting it badly
// (ETM-style "2 servings" to reach higher targets).
function bestCandidate(recipe: FullRecipe, budget: number, allowScaling: boolean): Candidate {
  const per = recipe.nutrition.calories;
  let best: Candidate = { recipe, servings: 1, calories: per, fit: Math.abs(per - budget) };
  if (!allowScaling) return best;
  for (const servings of [2, 3]) {
    const calories = per * servings;
    if (calories > budget * 1.3) break;
    const fit = Math.abs(calories - budget);
    if (fit < best.fit) best = { recipe, servings, calories, fit };
  }
  return best;
}

export function buildInstantPlan(req: InstantPlanRequest): InstantPlanResult {
  const all = getAllRecipes();
  const target = Math.min(
    INSTANT_CALORIES_MAX,
    Math.max(INSTANT_CALORIES_MIN, Math.round(req.calories)),
  );
  const slots = SLOT_BUDGETS[req.meals] ?? SLOT_BUDGETS[3];
  const rand = mulberry32(
    seedFromString(JSON.stringify([req.diet, target, req.meals, req.nonce >>> 0])),
  );

  const used = new Set<string>();
  const meals: InstantMeal[] = [];

  for (const [slot, share] of slots) {
    const budget = target * share;
    const pool = buildSlotPool(all, slot, req.diet);
    const ranked = pool
      .map((r) => bestCandidate(r, budget, slot !== "snack"))
      .sort((a, b) => a.fit - b.fit)
      .filter((c) => !used.has(c.recipe.slug));

    if (ranked.length === 0) continue;

    // Variety window: only candidates that genuinely fit the slot budget
    // (within ~12%), minimum 3 so swaps always have somewhere to go. Shuffle
    // it so equal inputs + fresh nonce still vary, then let the variant
    // counter walk through it for single-slot swaps.
    const tolerance = Math.max(60, budget * 0.12);
    let windowSize = ranked.filter((c) => c.fit <= tolerance).length;
    windowSize = Math.min(Math.max(windowSize, 3), ranked.length, 10);
    const window = seededShuffle(ranked.slice(0, windowSize), rand);
    const variant = Math.max(0, Math.floor(req.variants?.[slot] ?? 0));
    const picked = window[variant % window.length];

    used.add(picked.recipe.slug);
    meals.push({
      slot,
      slug: picked.recipe.slug,
      name: picked.recipe.name,
      emoji: picked.recipe.emoji,
      calories: picked.calories,
      servings: picked.servings,
      totalTime: picked.recipe.totalTime,
      variant,
    });
  }

  return {
    meals,
    totalCalories: meals.reduce((sum, m) => sum + m.calories, 0),
    targetCalories: target,
  };
}
