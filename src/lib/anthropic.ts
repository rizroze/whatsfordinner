import Anthropic from "@anthropic-ai/sdk";
import type { UserProfile } from "@/types/meal-plan";
import type { MealPlanData } from "@/types/meal-plan";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

function buildPrompt(profile: UserProfile, days: number): string {
  const dayLabel = days === 7 ? "7-day" : `${days}-day`;
  const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].slice(0, days);

  const lines = [
    `Generate a ${dayLabel} meal plan (${dayNames.join(", ")}) with these requirements:`,
    ``,
    `Household: ${profile.household_size} people${profile.has_kids ? ` (kids aged: ${profile.kids_ages.join(", ")})` : ""}`,
  ];

  if (profile.age_range) {
    lines.push(`Age: ${profile.age_range}`);
  }

  lines.push(
    `Budget: ${profile.weekly_budget} ($${profile.weekly_budget === "budget" ? "50-80" : profile.weekly_budget === "moderate" ? "80-130" : "130-200"}/week)`,
    `Servings: ${profile.servings_per_meal}`,
    `Meals/day: ${profile.meals_per_day} (${profile.meals_per_day >= 3 ? "breakfast, lunch, dinner" : "breakfast, dinner"})${profile.include_snacks ? " + snack" : ""}`,
    `Max cook time: ${profile.max_cook_time} min`,
    `Skill: ${profile.cooking_skill}`,
  );

  if (profile.nutrition_goal) {
    const goalMap = {
      lose: "Weight loss — lean proteins, high fiber",
      maintain: "Maintenance — balanced macros",
      bulk: "Muscle gain — higher calorie, extra protein",
    };
    lines.push(`Goal: ${goalMap[profile.nutrition_goal]}`);
  }

  if (profile.personal_note) {
    const [pillPart, ...rest] = profile.personal_note.split("|");
    const pills = pillPart.split(",").map((p) => p.trim()).filter(Boolean);
    const freetext = rest.join("|").trim();
    if (pills.length > 0) lines.push(`Taste: ${pills.join(", ")}`);
    if (freetext) lines.push(`Notes: "${freetext}"`);
  }
  if (profile.dietary_restrictions.length > 0) {
    lines.push(`Restrictions: ${profile.dietary_restrictions.join(", ")}`);
  }
  if (profile.allergies.length > 0) {
    lines.push(`Allergies (MUST AVOID): ${profile.allergies.join(", ")}`);
  }
  if (profile.cuisine_preferences.length > 0) {
    lines.push(`Cuisines: ${profile.cuisine_preferences.join(", ")}`);
  }

  lines.push(
    ``,
    `RULES: Balanced nutrition daily (veggies, protein, grains). Respect all restrictions/allergies. Variety in proteins. Concise instructions (3-4 steps max). Skip pantry staples in ingredients.`,
    ``,
    `Respond with ONLY valid JSON (no markdown):`,
    `{"weekOf":"YYYY-MM-DD","days":[{"day":"Monday","meals":[{"name":"Name","type":"breakfast|lunch|dinner|snack","prepTime":10,"cookTime":20,"calories":450,"servings":2,"ingredients":[{"name":"item","amount":"1","unit":"cup"}],"instructions":["Step 1"],"tags":["quick"]}],"totalCalories":1800}],"groceryList":[{"category":"Produce","items":[{"name":"Tomatoes","amount":"4","unit":"whole"}]}],"estimatedWeeklyCost":"$85-95","notes":"Brief tips"}`
  );

  return lines.join("\n");
}

export async function generateMealPlan(
  profile: UserProfile,
  weekOf: string,
  options?: { days?: number }
): Promise<MealPlanData> {
  const days = options?.days ?? 7;
  const systemPrompt = `You are a meal planner. Respond with valid JSON only — no markdown, no explanation. Just the JSON object.`;
  const userPrompt = buildPrompt(profile, days);

  // Haiku 4.5 — cheapest model, handles structured JSON well
  const message = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: days <= 1 ? 2000 : days <= 3 ? 6000 : 16000,
    system: systemPrompt,
    messages: [{ role: "user", content: userPrompt }],
  });

  if (message.stop_reason === "max_tokens") {
    throw new Error("Response truncated — plan too large");
  }

  const content = message.content[0];
  if (content.type !== "text") {
    throw new Error("Unexpected response type");
  }

  let jsonText = content.text.trim();
  if (jsonText.startsWith("```")) {
    jsonText = jsonText.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
  }

  let plan: MealPlanData;
  try {
    plan = JSON.parse(jsonText);
  } catch {
    console.error("JSON parse failed. First 200:", jsonText.slice(0, 200));
    console.error("Last 200:", jsonText.slice(-200));
    throw new Error("Failed to parse meal plan JSON");
  }

  plan.weekOf = weekOf;

  if (!plan.days || plan.days.length !== days) {
    throw new Error(`Expected ${days} days, got ${plan.days?.length ?? 0}`);
  }
  if (!plan.groceryList || plan.groceryList.length === 0) {
    throw new Error("Missing grocery list");
  }

  return plan;
}
