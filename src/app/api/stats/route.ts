import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const revalidate = 300; // Cache for 5 minutes

export async function GET() {
  try {
    const admin = createAdminClient();

    // Count only delivered plans (sent to real users)
    const { count: sentCount } = await admin
      .from("meal_plans")
      .select("*", { count: "exact", head: true })
      .eq("status", "sent");

    // Count total users who completed onboarding
    const { count: totalUsers } = await admin
      .from("profiles")
      .select("*", { count: "exact", head: true })
      .eq("onboarding_completed", true);

    const plans = sentCount ?? 0;

    // Seed: ~100 meals as a natural starting point
    // Each real delivered plan adds its contribution on top
    // 7-day plan = 21 meals, 3-day free = 9, avg ~15
    const mealsPlanned = 100 + plans * 15;

    // 2.5h saved per plan (planning + deciding + grocery listing)
    const hoursSaved = 12 + Math.round(plans * 2.5);

    return NextResponse.json({
      mealsPlanned,
      hoursSaved,
      plansGenerated: plans,
      users: totalUsers ?? 0,
    });
  } catch {
    return NextResponse.json(
      { mealsPlanned: 0, hoursSaved: 0, plansGenerated: 0, users: 0 },
      { status: 500 }
    );
  }
}
