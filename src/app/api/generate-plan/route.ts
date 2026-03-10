import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { generateMealPlan } from "@/lib/anthropic";
import { sendMealPlanEmail, sendWelcomeEmail } from "@/lib/resend";
import { getWeekOf } from "@/lib/utils";
import { rateLimit } from "@/lib/rate-limit";
import type { UserProfile, MealPlanData } from "@/types/meal-plan";

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const limited = rateLimit(req, "generate-plan", 5, 60_000);
    if (limited) return limited;

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

    // Fetch meal feedback for smarter generation
    const { data: feedback } = await admin
      .from("meal_feedback")
      .select("meal_name, rating")
      .eq("user_id", user.id);

    const weekOf = getWeekOf();

    // Check for existing plan this week
    const { data: existingPlan } = await admin
      .from("meal_plans")
      .select("*")
      .eq("user_id", user.id)
      .eq("week_of", weekOf)
      .single();

    let planId: string;
    let isNewPlan = false;

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
      isNewPlan = true;

      // Fire welcome email non-blocking — arrives while plan is generating
      if (isSubscribed && !profile.email_opted_out) {
        const deliveryEmail = profile.delivery_email || user.email!;
        const firstName = user.user_metadata?.full_name?.split(" ")[0] ?? user.user_metadata?.name?.split(" ")[0] ?? "";
        void sendWelcomeEmail(deliveryEmail, firstName).catch(() => {});
      }
    }

    // Generate the meal plan with one retry on failure
    // Subscribers get 7 days, free users get 1 day
    const days = isSubscribed ? 7 : 1;
    let planData;

    // Dev mode: use mock plan without burning tokens
    if (process.env.NODE_ENV === "development" && process.env.USE_MOCK_PLAN === "1") {
      const { MOCK_PLAN } = await import("@/lib/mock-plan");
      planData = { ...MOCK_PLAN, weekOf };
    } else try {
      planData = await generateMealPlan(profile as UserProfile, weekOf, { days, feedback: feedback ?? [] });
    } catch (firstError) {
      console.error("First generation attempt failed:", firstError);

      try {
        planData = await generateMealPlan(profile as UserProfile, weekOf, { days, feedback: feedback ?? [] });
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

    // Send email for subscribers on every generation (new plans + regenerations)
    if (isSubscribed && !profile.email_opted_out) {
      try {
        const deliveryEmail = profile.delivery_email || user.email!;

        // Count plans for week number
        const { count: planCount } = await admin
          .from("meal_plans")
          .select("id", { count: "exact", head: true })
          .eq("user_id", user.id)
          .in("status", ["sent", "ready"]);

        await sendMealPlanEmail(
          deliveryEmail,
          weekOf,
          planData as MealPlanData,
          planCount || 1,
          user.id
        );

        // Mark as sent
        await admin
          .from("meal_plans")
          .update({
            status: "sent",
            sent_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          })
          .eq("id", planId);

        // Update the returned plan object
        if (updatedPlan) {
          updatedPlan.status = "sent";
        }
      } catch (emailError) {
        // Don't fail the whole request if email fails — plan is still saved
        console.error("Failed to send meal plan email:", emailError);
      }
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
