import { lemonSqueezySetup } from "@lemonsqueezy/lemonsqueezy.js";

let initialized = false;

export function ensureLemonSqueezySetup() {
  if (initialized) return;
  const apiKey = process.env.LEMONSQUEEZY_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("LEMONSQUEEZY_API_KEY is not set");
  }
  lemonSqueezySetup({ apiKey });
  initialized = true;
}

export const STORE_ID = process.env.LEMONSQUEEZY_STORE_ID?.trim() ?? "";

export const VARIANTS = {
  monthly: parseInt(process.env.LEMONSQUEEZY_VARIANT_MONTHLY?.trim() ?? "0"),
  yearly: parseInt(process.env.LEMONSQUEEZY_VARIANT_YEARLY?.trim() ?? "0"),
} as const;

export type PlanInterval = keyof typeof VARIANTS;
