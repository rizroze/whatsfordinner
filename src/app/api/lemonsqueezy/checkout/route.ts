import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createCheckout } from "@lemonsqueezy/lemonsqueezy.js";
import { STORE_ID, VARIANTS, type PlanInterval } from "@/lib/lemonsqueezy";
import { getAppUrl } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { plan } = (await req.json()) as { plan: PlanInterval };

    if (!plan || !(plan in VARIANTS)) {
      return NextResponse.json(
        { error: "Invalid plan. Must be 'monthly' or 'yearly'" },
        { status: 400 },
      );
    }

    const appUrl = getAppUrl();

    const { data, error } = await createCheckout(STORE_ID, VARIANTS[plan], {
      checkoutData: {
        email: user.email ?? undefined,
        custom: {
          supabase_user_id: user.id,
        },
      },
      productOptions: {
        redirectUrl: `${appUrl}/dashboard`,
      },
    });

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
