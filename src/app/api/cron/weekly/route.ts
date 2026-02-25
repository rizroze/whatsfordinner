import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { generateMealPlan } from "@/lib/anthropic";
import { sendMealPlanEmail } from "@/lib/resend";
import { getWeekOf } from "@/lib/utils";
import type { UserProfile, MealPlanData } from "@/types/meal-plan";

const CRON_SECRET = process.env.CRON_SECRET;

export async function GET(req: NextRequest) {
  // Verify cron secret
  const authHeader = req.headers.get("authorization");

  if (!CRON_SECRET || authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createAdminClient();
  const weekOf = getWeekOf();

  let total = 0;
  let success = 0;
  let failed = 0;

  try {
    // Get all active users with completed onboarding
    const { data: users, error: usersError } = await admin
      .from("users")
      .select("id, email, subscription_status")
      .eq("subscription_status", "active");

    if (usersError) {
      console.error("Failed to fetch users:", usersError);
      return NextResponse.json(
        { error: "Failed to fetch users" },
        { status: 500 }
      );
    }

    if (!users || users.length === 0) {
      return NextResponse.json({ total: 0, success: 0, failed: 0 });
    }

    // Filter to users with completed onboarding
    const { data: profiles, error: profilesError } = await admin
      .from("profiles")
      .select("*")
      .eq("onboarding_completed", true)
      .in(
        "user_id",
        users.map((u) => u.id)
      );

    if (profilesError) {
      console.error("Failed to fetch profiles:", profilesError);
      return NextResponse.json(
        { error: "Failed to fetch profiles" },
        { status: 500 }
      );
    }

    if (!profiles || profiles.length === 0) {
      return NextResponse.json({ total: 0, success: 0, failed: 0 });
    }

    // Build lookup maps
    const userMap = new Map(users.map((u) => [u.id, u]));

    total = profiles.length;

    for (const profile of profiles) {
      const user = userMap.get(profile.user_id);
      if (!user) continue;

      try {
        // Skip if plan already exists for this week
        const { data: existingPlan } = await admin
          .from("meal_plans")
          .select("id")
          .eq("user_id", profile.user_id)
          .eq("week_of", weekOf)
          .single();

        if (existingPlan) {
          // Already has a plan for this week, count as success
          success++;
          continue;
        }

        // Create plan record
        const { data: planRecord, error: insertError } = await admin
          .from("meal_plans")
          .insert({
            user_id: profile.user_id,
            week_of: weekOf,
            status: "generating",
            regeneration_count: 0,
          })
          .select()
          .single();

        if (insertError || !planRecord) {
          console.error(
            `Failed to create plan record for user ${profile.user_id}:`,
            insertError
          );
          failed++;
          continue;
        }

        // Generate the meal plan
        const planData = await generateMealPlan(
          profile as unknown as UserProfile,
          weekOf
        );

        // Save the plan
        await admin
          .from("meal_plans")
          .update({
            plan_data: planData as unknown as Record<string, unknown>,
            status: "ready",
            updated_at: new Date().toISOString(),
          })
          .eq("id", planRecord.id);

        // Send the email
        const deliveryEmail = profile.delivery_email || user.email;

        await sendMealPlanEmail(
          deliveryEmail,
          weekOf,
          planData as MealPlanData
        );

        // Mark as sent
        await admin
          .from("meal_plans")
          .update({
            status: "sent",
            sent_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          })
          .eq("id", planRecord.id);

        success++;
      } catch (error) {
        console.error(
          `Failed to process user ${profile.user_id}:`,
          error
        );

        // Try to mark the plan as failed
        await admin
          .from("meal_plans")
          .update({
            status: "failed",
            updated_at: new Date().toISOString(),
          })
          .eq("user_id", profile.user_id)
          .eq("week_of", weekOf)
          .eq("status", "generating");

        failed++;
      }
    }

    return NextResponse.json({ total, success, failed });
  } catch (error) {
    console.error("Weekly cron error:", error);
    return NextResponse.json(
      { error: "Cron job failed" },
      { status: 500 }
    );
  }
}
