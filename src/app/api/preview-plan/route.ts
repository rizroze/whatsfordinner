import { NextRequest, NextResponse } from "next/server";
import { buildPreviewPlan, type PreviewPrefs } from "@/lib/preview-plan";

// Assembles a personalized preview from the built-in recipe library.
// Pure CPU — no LLM calls, no DB writes, safe for anonymous visitors.
export async function POST(req: NextRequest) {
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    // No/invalid body → generic preview from defaults
  }

  const prefs: PreviewPrefs = {
    household_size: typeof body.household_size === "number" ? body.household_size : undefined,
    has_kids: typeof body.has_kids === "boolean" ? body.has_kids : undefined,
    weekly_budget: typeof body.weekly_budget === "string" ? body.weekly_budget : undefined,
    nutrition_goal: typeof body.nutrition_goal === "string" ? body.nutrition_goal : undefined,
    dietary_restrictions: Array.isArray(body.dietary_restrictions)
      ? body.dietary_restrictions.filter((v): v is string => typeof v === "string").slice(0, 10)
      : undefined,
    allergies: Array.isArray(body.allergies)
      ? body.allergies.filter((v): v is string => typeof v === "string").slice(0, 10)
      : undefined,
    cuisine_preferences: Array.isArray(body.cuisine_preferences)
      ? body.cuisine_preferences.filter((v): v is string => typeof v === "string").slice(0, 12)
      : undefined,
    max_cook_time: typeof body.max_cook_time === "number" ? body.max_cook_time : undefined,
    meals_per_day: typeof body.meals_per_day === "number" ? body.meals_per_day : undefined,
    include_snacks: typeof body.include_snacks === "boolean" ? body.include_snacks : undefined,
  };

  return NextResponse.json(buildPreviewPlan(prefs));
}
