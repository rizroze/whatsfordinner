import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { redeemPromoCode } from "@/lib/promo";

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { code } = await req.json();

    if (!code || typeof code !== "string" || code.trim().length < 4) {
      return NextResponse.json({ error: "Invalid code" }, { status: 400 });
    }

    const result = await redeemPromoCode(code.trim(), user.id);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      expiresAt: result.expiresAt,
      message: result.expiresAt
        ? `Subscription activated! Expires ${new Date(result.expiresAt).toLocaleDateString()}`
        : "Subscription activated!",
    });
  } catch (error) {
    console.error("Promo redeem error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
