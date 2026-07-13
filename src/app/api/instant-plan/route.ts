import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import {
  buildInstantPlan,
  INSTANT_DIETS,
  INSTANT_CUISINES,
  type InstantDiet,
  type InstantCuisine,
  type InstantSlot,
  type InstantPlanRequest,
} from "@/lib/instant-plan";
import {
  getTranslatedRecipe,
  getRecipeSlugForLocale,
} from "@/data/recipes/translations";
import { isValidLocale } from "@/lib/i18n/locales";

// Rule-based assembly from the recipe library — zero AI tokens, no auth.
// This powers the homepage instant generator, so it must stay cheap and fast.

const SLOT_KEYS: InstantSlot[] = ["breakfast", "lunch", "dinner", "snack"];

export async function POST(req: NextRequest) {
  const limited = rateLimit(req, "instant-plan", 30, 60_000);
  if (limited) return limited;

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const diet: InstantDiet = INSTANT_DIETS.includes(body.diet as InstantDiet)
    ? (body.diet as InstantDiet)
    : "anything";
  const cuisine: InstantCuisine = INSTANT_CUISINES.includes(body.cuisine as InstantCuisine)
    ? (body.cuisine as InstantCuisine)
    : "any";
  const calories = Number.isFinite(Number(body.calories)) ? Number(body.calories) : 1800;
  const meals: InstantPlanRequest["meals"] =
    body.meals === 2 || body.meals === 4 ? body.meals : 3;
  const nonce = Number.isFinite(Number(body.nonce)) ? Math.floor(Number(body.nonce)) : 0;
  const locale =
    typeof body.locale === "string" && isValidLocale(body.locale) ? body.locale : "en";

  const variants: Partial<Record<InstantSlot, number>> = {};
  if (body.variants && typeof body.variants === "object") {
    for (const slot of SLOT_KEYS) {
      const v = (body.variants as Record<string, unknown>)[slot];
      if (Number.isFinite(Number(v))) variants[slot] = Math.max(0, Math.floor(Number(v)));
    }
  }

  const plan = buildInstantPlan({ diet, cuisine, calories, meals, nonce, variants });

  // Localize names + link each meal to its recipe page (locale page when the
  // translation exists, English page otherwise — never a guessed URL).
  const localizedMeals = plan.meals.map((m) => {
    const translated = getTranslatedRecipe(m.slug, locale);
    const localizedSlug = getRecipeSlugForLocale(m.slug, locale);
    const url =
      locale === "en"
        ? `/recipes/${m.slug}`
        : `/${locale}/recipes/${localizedSlug}`;
    return { ...m, name: translated?.name ?? m.name, url };
  });

  return NextResponse.json({ ...plan, meals: localizedMeals });
}
