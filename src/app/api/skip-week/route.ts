import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getWeekOf } from "@/lib/utils";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const limited = rateLimit(req, "skip-week", 5, 60_000);
  if (limited) return limited;

  const admin = createAdminClient();
  const { data: dbUser } = await admin.from("users").select("subscription_status").eq("id", user.id).single();
  if (dbUser?.subscription_status !== "active") {
    return NextResponse.json({ error: "Subscription required" }, { status: 403 });
  }

  const weekOf = getWeekOf();

  // Check no real plan exists already
  const { data: existing } = await admin
    .from("meal_plans")
    .select("id, status")
    .eq("user_id", user.id)
    .eq("week_of", weekOf)
    .single();

  if (existing && existing.status !== "skipped") {
    return NextResponse.json({ error: "Plan already generated for this week" }, { status: 409 });
  }

  if (existing?.status === "skipped") {
    return NextResponse.json({ weekOf, status: "skipped" });
  }

  const { data: plan, error } = await admin
    .from("meal_plans")
    .insert({ user_id: user.id, week_of: weekOf, status: "skipped", regeneration_count: 0 })
    .select()
    .single();

  if (error) return NextResponse.json({ error: "Failed to skip" }, { status: 500 });
  return NextResponse.json({ weekOf, status: "skipped", id: plan.id });
}

export async function DELETE(req: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const limited = rateLimit(req, "skip-week", 5, 60_000);
  if (limited) return limited;

  const admin = createAdminClient();
  const weekOf = getWeekOf();

  await admin
    .from("meal_plans")
    .delete()
    .eq("user_id", user.id)
    .eq("week_of", weekOf)
    .eq("status", "skipped");

  return NextResponse.json({ weekOf, status: "active" });
}
