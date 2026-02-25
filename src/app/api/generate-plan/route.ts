import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { generateMealPlan } from "@/lib/anthropic";
import { getWeekOf } from "@/lib/utils";
import type { UserProfile } from "@/types/meal-plan";

export async function POST() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const admin = createAdminClient();

    // Check subscription or free plan eligibility
    const { data: dbUser } = await admin
      .from("users")
      .select("subscription_status, free_plan_used")
      .eq("id", user.id)
      .single();

    if (!dbUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isSubscribed = dbUser.subscription_status === "active";
    const canUseFree = !dbUser.free_plan_used;

    if (!isSubscribed && !canUseFree) {
      return NextResponse.json(
        { error: "Subscribe to generate more meal plans" },
        { status: 403 }
      );
    }

    // Fetch profile
    const { data: profile, error: profileError } = await admin
      .from("profiles")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (profileError || !profile) {
      return NextResponse.json(
        { error: "Profile not found. Please complete onboarding." },
        { status: 404 }
      );
    }

    const weekOf = getWeekOf();

    // Check for existing plan this week
    const { data: existingPlan } = await admin
      .from("meal_plans")
      .select("*")
      .eq("user_id", user.id)
      .eq("week_of", weekOf)
      .single();

    let planId: string;

    if (existingPlan) {
      // Free users can't regenerate
      const regenLimit = isSubscribed ? 2 : 0;
      if (existingPlan.regeneration_count >= regenLimit) {
        return NextResponse.json(
          {
            error: isSubscribed
              ? "Maximum regenerations reached for this week (2)"
              : "Subscribe to regenerate meal plans",
          },
          { status: isSubscribed ? 429 : 403 }
        );
      }

      // Increment regeneration count and reset status
      const { error: updateError } = await admin
        .from("meal_plans")
        .update({
          regeneration_count: existingPlan.regeneration_count + 1,
          status: "generating",
          updated_at: new Date().toISOString(),
        })
        .eq("id", existingPlan.id);

      if (updateError) {
        console.error("Failed to update plan for regeneration:", updateError);
        return NextResponse.json(
          { error: "Failed to start regeneration" },
          { status: 500 }
        );
      }

      planId = existingPlan.id;
    } else {
      // Create new plan record
      const { data: newPlan, error: insertError } = await admin
        .from("meal_plans")
        .insert({
          user_id: user.id,
          week_of: weekOf,
          status: "generating",
          regeneration_count: 0,
        })
        .select()
        .single();

      if (insertError || !newPlan) {
        console.error("Failed to create plan record:", insertError);
        return NextResponse.json(
          { error: "Failed to create plan" },
          { status: 500 }
        );
      }

      planId = newPlan.id;
    }

    // Generate the meal plan with one retry on failure
    let planData;
    try {
      planData = await generateMealPlan(profile as UserProfile, weekOf);
    } catch (firstError) {
      console.error("First generation attempt failed:", firstError);

      try {
        planData = await generateMealPlan(profile as UserProfile, weekOf);
      } catch (retryError) {
        console.error("Retry generation failed:", retryError);

        await admin
          .from("meal_plans")
          .update({
            status: "failed",
            updated_at: new Date().toISOString(),
          })
          .eq("id", planId);

        return NextResponse.json(
          { error: "Meal plan generation failed after retry" },
          { status: 500 }
        );
      }
    }

    // Save the generated plan
    const { data: updatedPlan, error: saveError } = await admin
      .from("meal_plans")
      .update({
        plan_data: planData as unknown as Record<string, unknown>,
        status: "ready",
        updated_at: new Date().toISOString(),
      })
      .eq("id", planId)
      .select()
      .single();

    if (saveError) {
      console.error("Failed to save generated plan:", saveError);
      return NextResponse.json(
        { error: "Failed to save plan" },
        { status: 500 }
      );
    }

    // Mark free plan as used for non-subscribers
    if (!isSubscribed && canUseFree) {
      await admin
        .from("users")
        .update({ free_plan_used: true })
        .eq("id", user.id);
    }

    return NextResponse.json({ plan: updatedPlan });
  } catch (error) {
    console.error("Generate plan error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
