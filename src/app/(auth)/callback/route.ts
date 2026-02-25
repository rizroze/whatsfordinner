import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getAppUrl } from "@/lib/utils";

function safeRedirect(path: string | null, fallback: string): string {
  if (!path || !path.startsWith("/") || path.startsWith("//")) {
    return fallback;
  }
  return path;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const plan = searchParams.get("plan");
  const redirect = searchParams.get("redirect");
  const appUrl = getAppUrl();

  if (!code) {
    console.error("Auth callback: no code param received", {
      params: Object.fromEntries(searchParams.entries()),
    });
    return NextResponse.redirect(`${appUrl}/login?error=missing_code`);
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("Auth callback: code exchange failed:", error.message);
      return NextResponse.redirect(`${appUrl}/login?error=auth_failed`);
    }

    if (plan) {
      return NextResponse.redirect(`${appUrl}/checkout?plan=${plan}`);
    }

    if (redirect) {
      return NextResponse.redirect(`${appUrl}${safeRedirect(redirect, "/dashboard")}`);
    }

    return NextResponse.redirect(`${appUrl}/dashboard`);
  } catch (err) {
    console.error("Auth callback: unexpected error:", err);
    return NextResponse.redirect(`${appUrl}/login?error=auth_failed`);
  }
}
