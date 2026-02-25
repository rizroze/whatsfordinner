import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  const { searchParams, origin } = new URL(req.url);
  const code = searchParams.get("code");
  const plan = searchParams.get("plan");
  const redirect = searchParams.get("redirect");

  if (!code) {
    return NextResponse.redirect(`${origin}/?error=missing_code`);
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("Auth callback error:", error);
      return NextResponse.redirect(`${origin}/?error=auth_failed`);
    }

    // If signing up with a plan, go to checkout page which handles Stripe
    if (plan) {
      return NextResponse.redirect(`${origin}/checkout?plan=${plan}`);
    }

    if (redirect) {
      return NextResponse.redirect(`${origin}${redirect}`);
    }

    return NextResponse.redirect(`${origin}/dashboard`);
  } catch (error) {
    console.error("Auth callback error:", error);
    return NextResponse.redirect(`${origin}/?error=auth_failed`);
  }
}
