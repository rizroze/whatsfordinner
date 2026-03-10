import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { rateLimit } from "@/lib/rate-limit";
import Anthropic from "@anthropic-ai/sdk";
import type { Meal } from "@/types/meal-plan";

function sanitizeUserText(text: string, maxLen = 500): string {
  return text.slice(0, maxLen).replace(/[<>{}]/g, "").replace(/\n/g, " ").trim();
}

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! });

const SwapBody = z.object({
  weekId: z.string().min(1).max(20),
  dayIndex: z.number().int().min(0).max(6),
  mealIndex: z.number().int().min(0).max(10),
});

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const limited = rateLimit(req, "swap-meal", 10, 60_000);
    if (limited) return limited;

    const body = await req.json();
    const parsed = SwapBody.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
    const { weekId, dayIndex, mealIndex } = parsed.data;

    const admin = createAdminClient();

    // Verify active subscription
    const { data: dbUser } = await admin
      .from("users")
      .select("subscription_status")
      .eq("id", user.id)
      .single();

    if (dbUser?.subscription_status !== "active") {
      return NextResponse.json({ error: "Subscription required" }, { status: 403 });
    }

    // Fetch profile
    const { data: profile } = await admin
      .from("profiles")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    // Fetch the plan
    const { data: plan } = await admin
      .from("meal_plans")
      .select("id, plan_data")
      .eq("user_id", user.id)
      .eq("week_of", weekId)
      .single();

    if (!plan?.plan_data) {
      return NextResponse.json({ error: "Plan not found" }, { status: 404 });
    }

    const planData = plan.plan_data;
    const day = planData.days[dayIndex];
    if (!day) {
      return NextResponse.json({ error: "Day not found" }, { status: 400 });
    }
    const currentMeal = day.meals[mealIndex];
    if (!currentMeal) {
      return NextResponse.json({ error: "Meal not found" }, { status: 400 });
    }

    // Build swap prompt
    const restrictions = profile.dietary_restrictions?.length
      ? `Restrictions: ${profile.dietary_restrictions.map((r: string) => sanitizeUserText(r, 50)).join(", ")}`
      : "";
    const allergies = profile.allergies?.length
      ? `Allergies (MUST AVOID): ${profile.allergies.map((a: string) => sanitizeUserText(a, 50)).join(", ")}`
      : "";
    const cuisines = profile.cuisine_preferences?.length
      ? `Cuisines: ${profile.cuisine_preferences.slice(0, 3).join(", ")}`
      : "";
    const personalNote = profile.personal_note
      ? `Notes: "${sanitizeUserText(profile.personal_note, 200)}"`
      : "";

    const prompt = [
      `Generate ONE replacement ${currentMeal.type} meal. Requirements:`,
      `Type: ${currentMeal.type} (keep exactly this type)`,
      `Household: ${profile.household_size} people`,
      `Servings: ${profile.servings_per_meal}`,
      `Max cook time: ${profile.max_cook_time} min`,
      `Skill: ${profile.cooking_skill}`,
      restrictions,
      allergies,
      cuisines,
      personalNote,
      `Must be DIFFERENT from: "${sanitizeUserText(currentMeal.name, 100)}"`,
      ``,
      `RULES: Balanced nutrition. Skip pantry staples in ingredients. 2-4 instruction steps max.`,
      ``,
      `Respond with ONLY valid JSON (no markdown):`,
      `{"name":"...","type":"${currentMeal.type}","prepTime":10,"cookTime":15,"calories":450,"servings":2,"ingredients":[{"name":"item","amount":"1","unit":"cup"}],"instructions":["Step 1","Step 2"],"tags":["quick"]}`,
    ].filter(Boolean).join("\n");

    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1500,
      system: "You are a meal planner. Respond with valid JSON only — no markdown, no explanation.",
      messages: [{ role: "user", content: prompt }],
    });

    const content = message.content[0];
    if (content.type !== "text") throw new Error("Unexpected response");

    let jsonText = content.text.trim();
    if (jsonText.startsWith("```")) {
      jsonText = jsonText.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    }

    const newMeal: Meal = JSON.parse(jsonText);

    // Validate required fields
    if (!newMeal.name || !newMeal.type || !Array.isArray(newMeal.ingredients) || !Array.isArray(newMeal.instructions)) {
      throw new Error("Invalid meal structure");
    }

    // Patch the plan_data
    const updatedDays = planData.days.map((d: typeof day, di: number) => {
      if (di !== dayIndex) return d;
      const updatedMeals = d.meals.map((m: Meal, mi: number) => (mi === mealIndex ? newMeal : m));
      const totalCalories = updatedMeals.reduce((sum: number, m: Meal) => sum + (m.calories ?? 0), 0);
      return { ...d, meals: updatedMeals, totalCalories };
    });

    const updatedPlanData = { ...planData, days: updatedDays };

    const { error: updateError } = await admin
      .from("meal_plans")
      .update({ plan_data: updatedPlanData })
      .eq("id", plan.id);

    if (updateError) throw updateError;

    return NextResponse.json({ meal: newMeal, dayIndex, mealIndex });
  } catch (err) {
    console.error("[swap-meal]", err);
    return NextResponse.json({ error: "Failed to swap meal" }, { status: 500 });
  }
}
