import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getWeekOf } from "@/lib/utils";
import type { MealPlanData } from "@/types/meal-plan";

/**
 * Returns the user's next meal based on current time of day.
 * Light endpoint for the landing page hero suggestion.
 */
export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ meal: null });
    }

    const weekOf = getWeekOf();
    const { data: plan } = await supabase
      .from("meal_plans")
      .select("plan_data")
      .eq("user_id", user.id)
      .eq("week_of", weekOf)
      .eq("status", "ready")
      .single();

    if (!plan?.plan_data) {
      return NextResponse.json({ meal: null });
    }

    const planData = plan.plan_data as unknown as MealPlanData;
    const now = new Date();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const todayName = dayNames[now.getDay()];
    const hour = now.getHours();

    // Find today's plan
    const today = planData.days.find((d) => d.day === todayName);
    if (!today || !today.meals.length) {
      return NextResponse.json({ meal: null });
    }

    // Pick meal based on time
    const mealType = hour < 11 ? "breakfast" : hour < 16 ? "lunch" : "dinner";
    const meal = today.meals.find((m) => m.type === mealType)
      ?? today.meals[today.meals.length - 1]; // fallback to last meal

    return NextResponse.json({
      meal: {
        name: meal.name,
        type: meal.type,
        cookTime: meal.cookTime,
        calories: meal.calories,
      },
    });
  } catch {
    return NextResponse.json({ meal: null });
  }
}
