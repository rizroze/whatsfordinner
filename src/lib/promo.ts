import { createAdminClient } from "@/lib/supabase/admin";

// --- Code Generation ---

function randomCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no O/0/1/I confusion
  let code = "";
  for (let i = 0; i < 8; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return `DINNER-${code.slice(0, 4)}-${code.slice(4)}`;
}

// --- Admin: Create Promo Code ---

export async function createPromoCode(opts: {
  durationMonths: number; // 0 = lifetime
  maxUses?: number;
  code?: string;
  expiresAt?: string;
  createdBy?: string;
}): Promise<{ code: string; id: string }> {
  const db = createAdminClient();
  const code = opts.code?.toUpperCase().trim() || randomCode();

  const { data, error } = await db
    .from("promo_codes")
    .insert({
      code,
      type: "admin",
      duration_months: opts.durationMonths,
      max_uses: opts.maxUses ?? 1,
      created_by: opts.createdBy ?? null,
      expires_at: opts.expiresAt ?? null,
    })
    .select("id, code")
    .single();

  if (error) throw new Error(`Failed to create promo code: ${error.message}`);
  return data;
}

// --- Admin: List Promo Codes ---

export async function listPromoCodes() {
  const db = createAdminClient();
  const { data, error } = await db
    .from("promo_codes")
    .select("*, promo_redemptions(id, user_id, created_at)")
    .order("created_at", { ascending: false });

  if (error) throw new Error(`Failed to list promo codes: ${error.message}`);
  return data;
}

// --- Validate Promo Code ---

export async function validatePromoCode(code: string): Promise<{
  valid: boolean;
  error?: string;
  promoCode?: { id: string; type: string; duration_months: number };
}> {
  const db = createAdminClient();
  const { data, error } = await db
    .from("promo_codes")
    .select("id, type, duration_months, max_uses, current_uses, expires_at, is_active")
    .eq("code", code.toUpperCase().trim())
    .single();

  if (error || !data) {
    return { valid: false, error: "Invalid code" };
  }

  if (!data.is_active) {
    return { valid: false, error: "This code is no longer active" };
  }

  if (data.expires_at && new Date(data.expires_at) < new Date()) {
    return { valid: false, error: "This code has expired" };
  }

  if (data.current_uses >= data.max_uses) {
    return { valid: false, error: "This code has been fully redeemed" };
  }

  return {
    valid: true,
    promoCode: { id: data.id, type: data.type, duration_months: data.duration_months },
  };
}

// --- Redeem Promo Code ---

export async function redeemPromoCode(
  code: string,
  userId: string
): Promise<{ success: boolean; error?: string; expiresAt?: string }> {
  const db = createAdminClient();

  // 1. Validate
  const validation = await validatePromoCode(code);
  if (!validation.valid || !validation.promoCode) {
    return { success: false, error: validation.error };
  }

  const promo = validation.promoCode;

  // 2. Check user doesn't already have active paid subscription
  const { data: user } = await db
    .from("users")
    .select("subscription_status, subscription_source")
    .eq("id", userId)
    .single();

  if (
    user?.subscription_status === "active" &&
    user?.subscription_source === "lemonsqueezy"
  ) {
    return { success: false, error: "You already have an active subscription" };
  }

  // 3. Check not already redeemed by this user
  const { data: existing } = await db
    .from("promo_redemptions")
    .select("id")
    .eq("promo_code_id", promo.id)
    .eq("user_id", userId)
    .single();

  if (existing) {
    return { success: false, error: "You already redeemed this code" };
  }

  // 4. Atomically increment usage (fails if already maxed out)
  const { data: updated, error: updateErr } = await db.rpc("increment_promo_uses", {
    promo_id: promo.id,
  });

  // If the RPC doesn't exist yet, fall back to manual update
  if (updateErr) {
    const { data: codeRow } = await db
      .from("promo_codes")
      .select("current_uses, max_uses")
      .eq("id", promo.id)
      .single();

    if (!codeRow || codeRow.current_uses >= codeRow.max_uses) {
      return { success: false, error: "This code has been fully redeemed" };
    }

    await db
      .from("promo_codes")
      .update({ current_uses: codeRow.current_uses + 1 })
      .eq("id", promo.id);
  }

  // 5. Calculate expiry
  let expiresAt: string | null = null;
  if (promo.duration_months > 0) {
    const expiry = new Date();
    expiry.setMonth(expiry.getMonth() + promo.duration_months);
    expiresAt = expiry.toISOString();
  }

  // 6. Record redemption
  await db.from("promo_redemptions").insert({
    promo_code_id: promo.id,
    user_id: userId,
    subscription_end: expiresAt,
  });

  // 7. Activate user subscription
  const source = promo.type === "referral" ? "referral" : "promo";
  await db
    .from("users")
    .update({
      subscription_status: "active",
      subscription_source: source,
      subscription_expires_at: expiresAt,
    })
    .eq("id", userId);

  return { success: true, expiresAt: expiresAt ?? undefined };
}

// --- Referral: Generate Codes for Yearly Subscriber ---

export async function generateReferralCodes(
  userId: string,
  count = 3
): Promise<{ code: string; id: string; used: boolean }[]> {
  const db = createAdminClient();

  // Check existing referral codes
  const { data: existing } = await db
    .from("promo_codes")
    .select("id, code, current_uses, max_uses")
    .eq("referrer_user_id", userId)
    .eq("type", "referral");

  if (existing && existing.length >= count) {
    return existing.map((c) => ({
      code: c.code,
      id: c.id,
      used: c.current_uses >= c.max_uses,
    }));
  }

  // Generate missing codes
  const toCreate = count - (existing?.length ?? 0);
  const newCodes: { code: string; id: string; used: boolean }[] = [];

  for (let i = 0; i < toCreate; i++) {
    const code = randomCode();
    const { data, error } = await db
      .from("promo_codes")
      .insert({
        code,
        type: "referral",
        duration_months: 1,
        max_uses: 1,
        referrer_user_id: userId,
      })
      .select("id, code")
      .single();

    if (!error && data) {
      newCodes.push({ code: data.code, id: data.id, used: false });
    }
  }

  const allCodes = [
    ...(existing?.map((c) => ({
      code: c.code,
      id: c.id,
      used: c.current_uses >= c.max_uses,
    })) ?? []),
    ...newCodes,
  ];

  return allCodes;
}

// --- Cron: Expire Gifted Subscriptions ---

export async function expireGiftedSubscriptions(): Promise<number> {
  const db = createAdminClient();
  const now = new Date().toISOString();

  const { data, error } = await db
    .from("users")
    .update({
      subscription_status: "inactive",
      subscription_source: "none",
      subscription_expires_at: null,
    })
    .in("subscription_source", ["promo", "referral"])
    .eq("subscription_status", "active")
    .lt("subscription_expires_at", now)
    .select("id");

  if (error) {
    console.error("Failed to expire gifted subs:", error);
    return 0;
  }

  return data?.length ?? 0;
}
