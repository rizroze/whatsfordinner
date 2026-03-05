import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const admin = createAdminClient();

    // Count total meal plans generated (any status except failed)
    const { count: planCount } = await admin
      .from("meal_plans")
      .select("*", { count: "exact", head: true })
      .neq("status", "failed");

    // Count active subscribers
    const { count: activeUsers } = await admin
      .from("users")
      .select("*", { count: "exact", head: true })
      .eq("subscription_status", "active");

    // Count total users who completed onboarding (including free users)
    const { count: totalUsers } = await admin
      .from("profiles")
      .select("*", { count: "exact", head: true })
      .eq("onboarding_completed", true);

    const plans = planCount ?? 0;
    const users = (totalUsers ?? 0) + (activeUsers ?? 0);

    // Seed: modest starting point (beta testing / internal plans)
    const SEED_MEALS = 100;
    const SEED_HOURS = 12;

    // Real data: 7-day plans have 21 meals, 3-day free plans have 9
    // Use conservative avg of 12 meals per plan
    const mealsPlanned = SEED_MEALS + plans * 12;

    // Each plan saves ~2.5h of weekly planning/deciding/shopping
    const hoursSaved = SEED_HOURS + Math.round(plans * 2.5);

    return NextResponse.json({
      mealsPlanned,
      hoursSaved,
      plansGenerated: plans,
      users: Math.max(users, totalUsers ?? 0),
    });
  } catch {
    return NextResponse.json(
      { mealsPlanned: 0, hoursSaved: 0, plansGenerated: 0, users: 0 },
      { status: 500 }
    );
  }
}
