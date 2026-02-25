import { lemonSqueezySetup } from "@lemonsqueezy/lemonsqueezy.js";

lemonSqueezySetup({
  apiKey: process.env.LEMONSQUEEZY_API_KEY!,
});

export const STORE_ID = process.env.LEMONSQUEEZY_STORE_ID!;

export const VARIANTS = {
  monthly: parseInt(process.env.LEMONSQUEEZY_VARIANT_MONTHLY!),
  yearly: parseInt(process.env.LEMONSQUEEZY_VARIANT_YEARLY!),
} as const;

export type PlanInterval = keyof typeof VARIANTS;
