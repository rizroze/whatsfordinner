import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createCheckout } from "@lemonsqueezy/lemonsqueezy.js";
import { ensureLemonSqueezySetup, STORE_ID, VARIANTS, type PlanInterval } from "@/lib/lemonsqueezy";
import { getAppUrl } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    ensureLemonSqueezySetup();

    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { plan } = (await req.json()) as { plan: PlanInterval };

    if (!plan || !(plan in VARIANTS)) {
      return NextResponse.json(
        { error: "Invalid plan. Must be 'monthly' or 'yearly'" },
        { status: 400 },
      );
    }

    const appUrl = getAppUrl();

    const checkoutOptions: Parameters<typeof createCheckout>[2] = {
      productOptions: {
        redirectUrl: user ? `${appUrl}/dashboard` : `${appUrl}/signup?from=checkout`,
      },
    };

    // If signed in, link to Supabase user + pre-fill email
    if (user) {
      checkoutOptions.checkoutData = {
        email: user.email ?? undefined,
        custom: {
          supabase_user_id: user.id,
        },
      };
    }

    const { data, error } = await createCheckout(
      STORE_ID,
      VARIANTS[plan],
      checkoutOptions,
    );

    if (error || !data) {
      console.error("Checkout creation error:", error);
      return NextResponse.json(
        { error: "Failed to create checkout" },
        { status: 500 },
      );
    }

    const url = data.data.attributes.url;
    return NextResponse.json({ url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 },
    );
  }
}
