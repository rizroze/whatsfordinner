"use client";

import { useState } from "react";
import Link from "next/link";
import { useT } from "@/lib/i18n/context";
import { track } from "@vercel/analytics";

// ETM-style instant generator: a real 1-day plan in one click, no signup.
// Rule-based from the recipe library (zero AI tokens) — the paid product
// (personalized 7-day AI plan) is what the upsell below the result sells.

type InstantSlot = "breakfast" | "lunch" | "dinner" | "snack";

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

const DIETS = [
  { value: "anything", emoji: "🍳", key: "instant.diet.anything" },
  { value: "vegetarian", emoji: "🥗", key: "instant.diet.vegetarian" },
  { value: "vegan", emoji: "🌱", key: "instant.diet.vegan" },
  { value: "keto", emoji: "🥑", key: "instant.diet.keto" },
  { value: "gluten-free", emoji: "🌾", key: "instant.diet.glutenFree" },
  { value: "mediterranean", emoji: "🫒", key: "instant.diet.mediterranean" },
] as const;

const SLOT_COLORS: Record<InstantSlot, string> = {
  breakfast: "bg-amber-50 text-amber-700",
  lunch: "bg-sky-50 text-sky-700",
  dinner: "bg-violet-50 text-violet-700",
  snack: "bg-emerald-50 text-emerald-700",
};

export function InstantPlanner({ isSignedIn }: { isSignedIn?: boolean }) {
  const { t, locale } = useT();

  const [diet, setDiet] = useState<(typeof DIETS)[number]["value"]>("anything");
  const [calories, setCalories] = useState("1800");
  const [meals, setMeals] = useState<2 | 3 | 4>(3);
  const [plan, setPlan] = useState<InstantPlan | null>(null);
  const [loading, setLoading] = useState(false);
  const [swappingSlot, setSwappingSlot] = useState<InstantSlot | null>(null);
  const [error, setError] = useState(false);
  const [nonce, setNonce] = useState(0);
  const [variants, setVariants] = useState<Partial<Record<InstantSlot, number>>>({});

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
          calories: Number(calories) || 1800,
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

  function handleGenerate() {
    const freshNonce = Math.floor(Math.random() * 0xffffffff);
    setNonce(freshNonce);
    setVariants({});
    track("instant_plan_generated", { diet, calories: Number(calories) || 1800, meals });
    void fetchPlan(freshNonce, {});
  }

  function handleSwap(slot: InstantSlot) {
    const next = { ...variants, [slot]: (variants[slot] ?? 0) + 1 };
    setVariants(next);
    track("instant_plan_swap", { slot });
    void fetchPlan(nonce, next, slot);
  }

  const busy = loading || swappingSlot !== null;

  return (
    <div id="instant-planner" className="mt-10 sm:mt-12 max-w-3xl mx-auto text-left scroll-mt-24">
      <div className="bg-white rounded-3xl border border-stone-100 shadow-lg p-6 sm:p-9">
        {/* Diet tiles */}
        <p className="text-sm sm:text-base font-medium text-stone-600 mb-3">{t("instant.dietLabel")}</p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
          {DIETS.map((d) => (
            <button
              key={d.value}
              type="button"
              onClick={() => setDiet(d.value)}
              className={`flex flex-col items-center gap-1.5 rounded-2xl border px-2 py-4 transition-all duration-200 ${
                diet === d.value
                  ? "border-orange-400 bg-orange-50 shadow-sm"
                  : "border-stone-200 bg-white hover:border-orange-200 hover:bg-orange-50/40"
              }`}
            >
              <span className="text-3xl leading-none">{d.emoji}</span>
              <span
                className={`text-xs sm:text-sm font-medium leading-tight text-center ${
                  diet === d.value ? "text-orange-700" : "text-stone-500"
                }`}
              >
                {t(d.key)}
              </span>
            </button>
          ))}
        </div>

        {/* Calories + meals */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-7">
          <div className="flex items-center gap-2.5">
            <span className="text-base text-stone-600">{t("instant.caloriesLabel")}</span>
            <input
              type="number"
              inputMode="numeric"
              min={1000}
              max={4500}
              step={50}
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              className="w-24 rounded-xl border border-stone-200 px-2 py-2 text-center text-lg font-semibold text-stone-800 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all duration-200"
            />
            <span className="text-base text-stone-600">{t("instant.caloriesUnit")}</span>
          </div>

          <div className="flex items-center gap-2">
            {([2, 3, 4] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMeals(m)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  meals === m
                    ? "bg-orange-500 text-white shadow-sm"
                    : "bg-stone-100 text-stone-500 hover:bg-orange-100 hover:text-orange-700"
                }`}
              >
                {t(`instant.meals${m}`)}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-3 text-sm text-stone-400">
          {t("instant.caloriesHelp")}{" "}
          <Link
            href="/tools/calorie-calculator"
            className="text-orange-500 hover:text-orange-600 underline underline-offset-2 transition-colors"
          >
            {t("instant.caloriesHelpLink")}
          </Link>
        </p>

        {/* Generate */}
        <button
          type="button"
          onClick={handleGenerate}
          disabled={busy}
          className="mt-6 w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:bg-orange-700 disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {loading ? (
            <>
              <span className="h-5 w-5 rounded-full border-2 border-white/40 border-t-white animate-spin" />
              {t("instant.generating")}
            </>
          ) : (
            <>
              {plan ? t("instant.regenerate") : t("instant.generate")}
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </>
          )}
        </button>
        {!plan && !loading && (
          <p className="mt-3 text-center text-sm text-stone-400">{t("instant.free")}</p>
        )}
        {error && (
          <p className="mt-3 text-center text-sm text-red-500">{t("instant.error")}</p>
        )}

        {/* Result */}
        {plan && (
          <div className="mt-7 space-y-2.5">
            {plan.meals.map((m) => (
              <div
                key={m.slot}
                className={`flex items-center gap-3.5 rounded-2xl border border-stone-100 bg-[#FFFBF5] px-4 py-3.5 transition-opacity duration-200 ${
                  swappingSlot === m.slot ? "opacity-40" : "opacity-100"
                }`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border border-stone-100 text-2xl">
                  {m.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${SLOT_COLORS[m.slot]}`}>
                      {t(`mealTypes.${m.slot}`)}
                    </span>
                    {m.servings > 1 && (
                      <span className="shrink-0 rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-orange-700">
                        ×{m.servings}
                      </span>
                    )}
                  </div>
                  <Link
                    href={m.url}
                    className="mt-1 block truncate text-base sm:text-lg font-semibold text-stone-800 transition-colors hover:text-orange-600"
                    onClick={() => track("instant_plan_recipe_click", { slug: m.slug })}
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

            {/* Total vs target */}
            <div className="flex items-center justify-between rounded-2xl bg-stone-50 px-4 py-3">
              <span className="text-sm font-medium text-stone-500">{t("instant.totalLabel")}</span>
              <span className="text-base font-semibold text-stone-800 tabular-nums">
                {plan.totalCalories.toLocaleString()}{" "}
                <span className="text-sm font-normal text-stone-400">
                  / {plan.targetCalories.toLocaleString()} {t("instant.cal")}
                </span>
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Upsell — only after they've tasted the value */}
      {plan && (
        <div className="mt-5 rounded-3xl border border-orange-200 bg-orange-50 p-6 sm:p-8 text-center">
          <p className="text-xl sm:text-2xl font-bold text-stone-900">{t("instant.upsellTitle")}</p>
          <p className="mx-auto mt-2 max-w-lg text-sm sm:text-base leading-relaxed text-stone-600">
            {t("instant.upsellBody")}
          </p>
          <a
            href={isSignedIn ? "/dashboard" : "#pricing"}
            onClick={() => track("instant_plan_upsell_click", { signedIn: !!isSignedIn })}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-9 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            {isSignedIn ? t("instant.upsellCtaSignedIn") : t("instant.upsellCta")}
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          {!isSignedIn && (
            <p className="mt-2.5 text-sm text-stone-400">{t("instant.upsellNote")}</p>
          )}
        </div>
      )}
    </div>
  );
}
