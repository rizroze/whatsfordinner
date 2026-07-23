"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FoodCharacter } from "@/components/ui/FoodCharacter";
import { useT } from "@/lib/i18n/context";
import { track } from "@vercel/analytics";
import { cn } from "@/lib/utils";
import type { InstantDiet, InstantCuisine, InstantSlot } from "@/lib/instant-plan";

// ETM-style free dashboard: a real, usable "Today" from the zero-token
// instant-plan API (personalized via onboarding profile), with the rest of
// the week locked behind the subscription upsell. Free users get genuine
// daily value; the paid product (7-day AI plan + grocery list) sells itself
// right below it.

interface FreeTodayProps {
  diet: InstantDiet;
  cuisine: InstantCuisine;
  calories: number;
  meals: 2 | 3 | 4;
}

interface InstantMeal {
  slot: InstantSlot;
  slug: string;
  name: string;
  emoji: string;
  calories: number;
  servings: number;
  totalTime: number;
  url: string;
}

interface InstantPlan {
  meals: InstantMeal[];
  totalCalories: number;
  targetCalories: number;
}

const slotStyles: Record<string, string> = {
  breakfast: "bg-orange-50 text-orange-600",
  lunch: "bg-blue-50 text-blue-600",
  dinner: "bg-purple-50 text-purple-600",
  snack: "bg-lime-50 text-lime-600",
};

const UPSELL_FEATURES = [
  "landing.pricing.features.sevenDayPlans",
  "landing.pricing.features.groceryLists",
  "landing.pricing.features.emailDelivery",
];

export function FreeToday({ diet, cuisine, calories, meals }: FreeTodayProps) {
  const { t, locale } = useT();
  const [plan, setPlan] = useState<InstantPlan | null>(null);
  const [loading, setLoading] = useState(true);
  const [swappingSlot, setSwappingSlot] = useState<InstantSlot | null>(null);
  const [error, setError] = useState(false);
  const [nonce, setNonce] = useState(0);
  const [variants, setVariants] = useState<Partial<Record<InstantSlot, number>>>({});
  const fetchedOnce = useRef(false);

  async function fetchPlan(
    nextNonce: number,
    nextVariants: Partial<Record<InstantSlot, number>>,
    slot?: InstantSlot,
  ) {
    setError(false);
    if (slot) setSwappingSlot(slot);
    else setLoading(true);
    try {
      const res = await fetch("/api/instant-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          diet,
          cuisine,
          calories,
          meals,
          nonce: nextNonce,
          variants: nextVariants,
          locale,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setPlan(await res.json());
    } catch {
      setError(true);
    } finally {
      setLoading(false);
      setSwappingSlot(null);
    }
  }

  // A day is seeded per calendar date so refreshing the dashboard doesn't
  // reshuffle meals mid-day, but tomorrow brings a fresh plate.
  useEffect(() => {
    if (fetchedOnce.current) return;
    fetchedOnce.current = true;
    const daySeed = Number(new Date().toISOString().slice(0, 10).replace(/-/g, ""));
    setNonce(daySeed);
    void fetchPlan(daySeed, {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleShuffle() {
    const freshNonce = Math.floor(Math.random() * 0xffffffff);
    setNonce(freshNonce);
    setVariants({});
    track("free_dashboard_day_shuffle");
    void fetchPlan(freshNonce, {});
  }

  function handleSwap(slot: InstantSlot) {
    const next = { ...variants, [slot]: (variants[slot] ?? 0) + 1 };
    setVariants(next);
    track("free_dashboard_meal_swap", { slot });
    void fetchPlan(nonce, next, slot);
  }

  const busy = loading || swappingSlot !== null;
  const todayLabel = new Date().toLocaleDateString(locale === "en" ? "en-US" : locale, {
    month: "long",
    day: "numeric",
  });

  return (
    <div className="space-y-6">
      {/* Today — real meals, free every day */}
      <Card>
        <CardContent>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <Badge>{t("dashboard.today")}</Badge>
              <span className="text-xs text-stone-400">{todayLabel}</span>
            </div>
            <button
              type="button"
              onClick={handleShuffle}
              disabled={busy}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-500 hover:text-orange-600 disabled:opacity-50 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={loading ? "animate-spin" : ""}
              >
                <polyline points="23 4 23 10 17 10" />
                <polyline points="1 20 1 14 7 14" />
                <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
              </svg>
              {t("instant.regenerate")}
            </button>
          </div>

          {error && (
            <p className="text-sm text-red-500 mb-4">{t("instant.error")}</p>
          )}

          <div className="space-y-2.5">
            {loading &&
              Array.from({ length: meals === 4 ? 4 : meals }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3.5 rounded-2xl border border-stone-100 bg-[#FFFBF5] px-4 py-3.5 animate-pulse"
                >
                  <div className="h-12 w-12 shrink-0 rounded-full bg-stone-100" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-16 rounded bg-stone-100" />
                    <div className="h-4 w-40 rounded bg-stone-100" />
                  </div>
                </div>
              ))}
            {!loading &&
              plan &&
              plan.meals.map((m) => (
                <div
                  key={`${m.slot}-${m.slug}`}
                  className={cn(
                    "flex items-center gap-3.5 rounded-2xl border border-stone-100 bg-[#FFFBF5] px-4 py-3.5 transition-opacity duration-200",
                    swappingSlot === m.slot ? "opacity-40 animate-pulse" : "opacity-100",
                  )}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border border-stone-100 text-2xl">
                    {m.emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span
                      className={cn(
                        "inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold",
                        slotStyles[m.slot] ?? "bg-stone-100 text-stone-500",
                      )}
                    >
                      {t(`mealTypes.${m.slot}`)}
                    </span>
                    <Link
                      href={m.url}
                      className="mt-1 block truncate text-base font-semibold text-stone-800 transition-colors hover:text-orange-600"
                    >
                      {m.name}
                    </Link>
                    <p className="text-sm text-stone-400">
                      {m.calories} {t("instant.cal")} · {m.totalTime} {t("plan.min")}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleSwap(m.slot)}
                    disabled={busy}
                    aria-label={t("instant.swap")}
                    title={t("instant.swap")}
                    className="shrink-0 rounded-full border border-stone-200 bg-white p-2.5 text-stone-400 transition-all duration-200 hover:border-orange-300 hover:text-orange-500 hover:shadow-sm active:scale-95 disabled:opacity-50"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={swappingSlot === m.slot ? "animate-spin" : ""}
                    >
                      <polyline points="23 4 23 10 17 10" />
                      <polyline points="1 20 1 14 7 14" />
                      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
                    </svg>
                  </button>
                </div>
              ))}
            {!loading && plan && (
              <div className="flex items-center justify-between rounded-2xl bg-stone-50 px-4 py-3">
                <span className="text-sm font-medium text-stone-500">
                  {t("instant.totalLabel")}
                </span>
                <span className="text-base font-semibold text-stone-800 tabular-nums">
                  {plan.totalCalories.toLocaleString()}{" "}
                  <span className="text-sm font-normal text-stone-400">
                    / {plan.targetCalories.toLocaleString()} {t("instant.cal")}
                  </span>
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Rest of the week — locked upsell, ETM-style */}
      <Card className="border-orange-200 bg-orange-50/50 overflow-hidden">
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-stone-400"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
              {t("preview.lockedLabel", { n: 6 })}
            </span>
            <div className="flex-1 h-px bg-orange-100" />
          </div>

          <div className="grid gap-5 sm:grid-cols-[1fr_auto] items-center">
            <div>
              <p className="text-lg font-bold text-stone-900 leading-snug">
                {t("instant.upsellTitle")}
              </p>
              <ul className="mt-3 space-y-2">
                {UPSELL_FEATURES.map((key) => (
                  <li key={key} className="flex items-start gap-2 text-sm text-stone-600">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 text-orange-500 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {t(key)}
                  </li>
                ))}
              </ul>
              <Link
                href="/checkout?plan=monthly"
                onClick={() => track("free_dashboard_upsell_click")}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                {t("dashboard.subscribeCta")}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <p className="mt-2.5 text-xs text-stone-400">{t("instant.upsellNote")}</p>
            </div>
            <FoodCharacter name="bag" className="hidden sm:block w-24 shrink-0" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
