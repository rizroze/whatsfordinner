import { getAllRecipes } from "@/data/recipes";
import type { FullRecipe } from "@/data/recipes/types";
import type { DayPlan, Meal } from "@/types/meal-plan";

/**
 * Rule-based preview plan assembly from the recipe library.
 * Zero API cost: filters and ranks the 250 built-in recipes against
 * the visitor's onboarding answers, with deterministic seeded selection
 * so the same answers always produce the same preview.
 */

export interface PreviewPrefs {
  household_size?: number;
  has_kids?: boolean;
  weekly_budget?: string;
  nutrition_goal?: string;
  dietary_restrictions?: string[];
  allergies?: string[];
  cuisine_preferences?: string[];
  max_cook_time?: number;
  meals_per_day?: number;
  include_snacks?: boolean;
}

export interface LockedDayPreview {
  day: string;
  meals: { type: Meal["type"]; name: string }[];
}

export interface PreviewDaySummary {
  day: string;
  meals: { name: string; type: string; calories: number; cookTime: number }[];
}

export interface PreviewPlanResult {
  monday: DayPlan;
  lockedDays: LockedDayPreview[];
  groceryPreview: string[];
  groceryItemCount: number;
  /** Full week in nurture-email summary shape (names/calories only) */
  weekSummary: PreviewDaySummary[];
}

const LOCKED_DAY_NAMES = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// --- Ingredient term groups (word-boundary matched, lowercase) ---
const MEAT_TERMS = [
  "chicken", "beef", "pork", "lamb", "turkey", "bacon", "sausage", "ham",
  "prosciutto", "pancetta", "steak", "veal", "duck", "chorizo", "salami",
  "pepperoni", "meatball", "brisket", "ribs", "ground meat",
];
const FISH_TERMS = [
  "salmon", "shrimp", "tuna", "cod", "tilapia", "halibut", "anchovy", "anchovies",
  "sardine", "prawn", "crab", "lobster", "scallop", "mussel", "clam", "oyster", "fish",
];
const PORK_TERMS = [
  "pork", "bacon", "ham", "prosciutto", "pancetta", "chorizo", "salami",
  "pepperoni", "sausage", "lardon",
];
const SHELLFISH_TERMS = ["shrimp", "prawn", "crab", "lobster", "scallop", "mussel", "clam", "oyster"];
const ALCOHOL_TERMS = ["wine", "beer", "sake", "mirin", "rum", "brandy", "bourbon", "vodka", "sherry"];
const DAIRY_TERMS = [
  "milk", "cheese", "butter", "cream", "yogurt", "mozzarella", "parmesan",
  "cheddar", "feta", "ricotta", "halloumi", "mascarpone",
];
const GLUTEN_TERMS = [
  "flour", "bread", "pasta", "noodle", "noodles", "tortilla", "breadcrumb",
  "breadcrumbs", "wheat", "couscous", "orzo", "barley", "baguette", "pita",
];
const NUT_TERMS = [
  "peanut", "almond", "cashew", "walnut", "pecan", "pistachio", "hazelnut",
  "macadamia", "nut", "nuts",
];
const EGG_TERMS = ["egg", "eggs"];
const SOY_TERMS = ["soy", "tofu", "edamame", "tempeh"];
const SESAME_TERMS = ["sesame", "tahini"];

function termRegex(terms: string[]): RegExp {
  return new RegExp(`\\b(${terms.join("|")})`, "i");
}

function ingredientText(recipe: FullRecipe): string {
  return recipe.ingredients.map((i) => i.name).join(" • ").toLowerCase();
}

function hasAnyTerm(recipe: FullRecipe, terms: string[]): boolean {
  return termRegex(terms).test(ingredientText(recipe));
}

// --- Dietary restriction predicates (hard filters, never relaxed) ---
function passesRestriction(recipe: FullRecipe, restriction: string): boolean {
  switch (restriction) {
    case "Vegetarian":
      return (
        recipe.tags.includes("vegetarian") ||
        recipe.tags.includes("vegan") ||
        (!hasAnyTerm(recipe, MEAT_TERMS) && !hasAnyTerm(recipe, FISH_TERMS))
      );
    case "Vegan":
      return recipe.tags.includes("vegan");
    case "Pescatarian":
      return (
        recipe.tags.includes("vegetarian") ||
        recipe.tags.includes("vegan") ||
        !hasAnyTerm(recipe, MEAT_TERMS)
      );
    case "Gluten-Free":
      return recipe.tags.includes("gluten-free");
    case "Dairy-Free":
      return recipe.tags.includes("dairy-free");
    case "Keto":
    case "Low-Carb":
      return recipe.tags.includes("low-carb");
    case "Halal":
      return !hasAnyTerm(recipe, PORK_TERMS) && !hasAnyTerm(recipe, ALCOHOL_TERMS);
    case "Kosher":
      return !hasAnyTerm(recipe, PORK_TERMS) && !hasAnyTerm(recipe, SHELLFISH_TERMS);
    default:
      // "No Meat on Fridays" and unknown values don't constrain the preview
      return true;
  }
}

// --- Allergy handling (hard filters, never relaxed) ---
function allergyTerms(allergy: string): string[] {
  const a = allergy.trim().toLowerCase();
  if (!a) return [];
  if (/nut/.test(a)) return NUT_TERMS;
  if (/shellfish/.test(a)) return SHELLFISH_TERMS;
  if (/fish|seafood/.test(a)) return FISH_TERMS;
  if (/egg/.test(a)) return EGG_TERMS;
  if (/soy/.test(a)) return SOY_TERMS;
  if (/dairy|milk|lactose/.test(a)) return DAIRY_TERMS;
  if (/gluten|wheat/.test(a)) return GLUTEN_TERMS;
  if (/sesame/.test(a)) return SESAME_TERMS;
  return [a];
}

function passesAllergies(recipe: FullRecipe, allergies: string[]): boolean {
  for (const allergy of allergies) {
    const terms = allergyTerms(allergy);
    if (terms.length && hasAnyTerm(recipe, terms)) return false;
  }
  return true;
}

// --- Cuisine preference → recipe cuisine mapping ---
const CUISINE_MAP: Record<string, string[]> = {
  American: ["American", "Tex-Mex", "Italian-American", "Chinese-American", "Hawaiian"],
  Italian: ["Italian", "Italian-American"],
  Mexican: ["Mexican", "Tex-Mex"],
  Asian: [
    "Chinese", "Japanese", "Thai", "Korean", "Vietnamese", "Asian Fusion",
    "Indonesian", "Malaysian", "Filipino", "Japanese Fusion", "Chinese-American",
  ],
  Mediterranean: ["Mediterranean", "Greek", "Turkish", "Spanish", "Moroccan"],
  Indian: ["Indian"],
  Thai: ["Thai"],
  Japanese: ["Japanese", "Japanese Fusion"],
  French: ["French"],
  "Middle Eastern": ["Middle Eastern", "Turkish"],
  Korean: ["Korean"],
  "Southern/Soul Food": ["American", "Cajun"],
};

function matchesCuisinePrefs(recipe: FullRecipe, prefs: string[]): boolean {
  if (recipe.tags.includes("mediterranean") && prefs.includes("Mediterranean")) return true;
  return prefs.some((p) => (CUISINE_MAP[p] ?? [p]).includes(recipe.cuisine));
}

// --- Deterministic seeded PRNG (fnv1a hash + mulberry32) ---
function seedFromString(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function mulberry32(seed: number): () => number {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle<T>(items: T[], rand: () => number): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// --- Pool building ---
function scoreRecipe(recipe: FullRecipe, prefs: PreviewPrefs): number {
  let score = 0;
  if (prefs.cuisine_preferences?.length && matchesCuisinePrefs(recipe, prefs.cuisine_preferences)) {
    score += 4;
  }
  if (prefs.weekly_budget === "budget" && recipe.tags.includes("budget")) score += 2;
  if (prefs.has_kids && recipe.tags.includes("family-friendly")) score += 2;
  if (prefs.nutrition_goal === "bulk" && recipe.tags.includes("high-protein")) score += 1;
  if (prefs.nutrition_goal === "lose" && recipe.tags.includes("healthy")) score += 1;
  return score;
}

function buildPool(
  all: FullRecipe[],
  mealType: Meal["type"],
  prefs: PreviewPrefs,
  rand: () => number,
): FullRecipe[] {
  const restrictions = prefs.dietary_restrictions ?? [];
  const allergies = prefs.allergies ?? [];

  const dietSafe = (r: FullRecipe) =>
    restrictions.every((res) => passesRestriction(r, res)) && passesAllergies(r, allergies);

  const maxTime = prefs.max_cook_time ?? 60;

  // Relaxation ladder: cook time is soft, diet + allergies are hard.
  let pool = all.filter((r) => r.mealType === mealType && dietSafe(r) && r.totalTime <= maxTime);
  if (pool.length < 3) pool = all.filter((r) => r.mealType === mealType && dietSafe(r));
  if (pool.length === 0) {
    // Serve a diet-safe recipe from an adjacent slot rather than violate the diet
    pool = all.filter((r) => r.mealType !== "snack" && dietSafe(r));
  }
  if (pool.length === 0) pool = all.filter((r) => r.mealType === mealType);

  const shuffled = seededShuffle(pool, rand);
  // Stable sort: preference score decides, shuffle order breaks ties
  return shuffled.sort((a, b) => scoreRecipe(b, prefs) - scoreRecipe(a, prefs));
}

function toMeal(recipe: FullRecipe, slot: Meal["type"]): Meal {
  return {
    name: recipe.name,
    type: slot,
    prepTime: recipe.prepTime,
    cookTime: recipe.cookTime,
    calories: recipe.nutrition.calories,
    servings: recipe.servings,
    ingredients: recipe.ingredients.map(({ name, amount, unit }) => ({ name, amount, unit })),
    instructions: recipe.steps.map((s) => s.instruction),
    tags: recipe.tags,
  };
}

export function buildPreviewPlan(prefs: PreviewPrefs): PreviewPlanResult {
  const all = getAllRecipes();
  const seed = seedFromString(
    JSON.stringify([
      prefs.dietary_restrictions ?? [],
      prefs.allergies ?? [],
      prefs.cuisine_preferences ?? [],
      prefs.weekly_budget ?? "",
      prefs.max_cook_time ?? 0,
      prefs.household_size ?? 0,
    ]),
  );
  const rand = mulberry32(seed);

  const mealsPerDay = prefs.meals_per_day ?? 3;
  const slots: Meal["type"][] =
    mealsPerDay >= 3 ? ["breakfast", "lunch", "dinner"] : mealsPerDay === 2 ? ["lunch", "dinner"] : ["dinner"];
  if (prefs.include_snacks) slots.push("snack");

  // One ranked pool per slot type; walk down each pool across the week
  const pools = new Map<Meal["type"], FullRecipe[]>();
  const cursors = new Map<Meal["type"], number>();
  for (const slot of slots) {
    if (!pools.has(slot)) {
      pools.set(slot, buildPool(all, slot, prefs, rand));
      cursors.set(slot, 0);
    }
  }

  // Small pools (strict diets) can force weekly repeats, but never within one day
  const usedThisWeek = new Set<string>();
  function nextRecipe(slot: Meal["type"], usedToday: Set<string>): FullRecipe {
    const pool = pools.get(slot)!;
    const cursor = cursors.get(slot)!;
    let fallback: FullRecipe | null = null;
    for (let i = 0; i < pool.length; i++) {
      const candidate = pool[(cursor + i) % pool.length];
      if (usedToday.has(candidate.slug)) continue;
      if (!usedThisWeek.has(candidate.slug)) {
        cursors.set(slot, cursor + i + 1);
        usedThisWeek.add(candidate.slug);
        usedToday.add(candidate.slug);
        return candidate;
      }
      fallback = fallback ?? candidate;
    }
    const recipe = fallback ?? pool[cursor % pool.length];
    cursors.set(slot, cursor + 1);
    usedToday.add(recipe.slug);
    return recipe;
  }

  // Monday — fully visible
  const mondayUsed = new Set<string>();
  const mondayRecipes = slots.map((slot) => ({ slot, recipe: nextRecipe(slot, mondayUsed) }));
  const monday: DayPlan = {
    day: "Monday",
    meals: mondayRecipes.map(({ slot, recipe }) => toMeal(recipe, slot)),
    totalCalories: mondayRecipes.reduce((sum, { recipe }) => sum + recipe.nutrition.calories, 0),
  };

  // Days 2–7 — locked, titles only, still diet-safe
  const weekRecipes: FullRecipe[] = mondayRecipes.map(({ recipe }) => recipe);
  const weekSummary: PreviewDaySummary[] = [
    {
      day: "Monday",
      meals: mondayRecipes.map(({ slot, recipe }) => ({
        name: recipe.name,
        type: slot,
        calories: recipe.nutrition.calories,
        cookTime: recipe.cookTime,
      })),
    },
  ];
  const lockedDays: LockedDayPreview[] = LOCKED_DAY_NAMES.map((day) => {
    const usedToday = new Set<string>();
    const daySummary: PreviewDaySummary = { day, meals: [] };
    const meals = slots
      .filter((slot) => slot !== "snack")
      .map((slot) => {
        const recipe = nextRecipe(slot, usedToday);
        weekRecipes.push(recipe);
        daySummary.meals.push({
          name: recipe.name,
          type: slot,
          calories: recipe.nutrition.calories,
          cookTime: recipe.cookTime,
        });
        return { type: slot, name: recipe.name };
      });
    weekSummary.push(daySummary);
    return { day, meals };
  });

  // Grocery preview: real items from Monday, count from the whole week
  const mondayItems: string[] = [];
  const seen = new Set<string>();
  for (const { recipe } of mondayRecipes) {
    for (const ing of recipe.ingredients) {
      const key = ing.name.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        mondayItems.push(ing.name);
      }
    }
  }
  const weekSeen = new Set<string>();
  for (const recipe of weekRecipes) {
    for (const ing of recipe.ingredients) weekSeen.add(ing.name.toLowerCase());
  }

  return {
    monday,
    lockedDays,
    groceryPreview: mondayItems.slice(0, 8),
    groceryItemCount: weekSeen.size,
    weekSummary,
  };
}
