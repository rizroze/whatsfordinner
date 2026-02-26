import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { generateReferralCodes } from "@/lib/promo";

// GET /api/referral/codes — get or generate referral codes for yearly subscribers
export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Check if user is a yearly subscriber
    const db = createAdminClient();
    const { data: dbUser } = await db
      .from("users")
      .select("subscription_status, plan_interval")
      .eq("id", user.id)
      .single();

    if (!dbUser || dbUser.subscription_status !== "active") {
      return NextResponse.json({ error: "Active subscription required" }, { status: 403 });
    }

    if (dbUser.plan_interval !== "yearly") {
      return NextResponse.json({ error: "Referral codes are available for yearly subscribers" }, { status: 403 });
    }

    const codes = await generateReferralCodes(user.id, 3);
    return NextResponse.json({ codes });
  } catch (error) {
    console.error("Referral codes error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
