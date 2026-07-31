"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useT } from "@/lib/i18n/context";
import { track } from "@vercel/analytics";
import { FoodCharacter } from "@/components/ui/FoodCharacter";

// ETM-style instant generator: a real 1-day plan in one click, no signup.
// Rule-based from the recipe library (zero AI tokens) — the paid product
// (personalized 7-day AI plan) is what the upsell rail beside the result
// sells. CTA goes to account creation; the paywall comes after onboarding.

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

// 6 broad eating habits — cuisines live in the sub-row below, so
// Mediterranean isn't duplicated here. The engine still supports the
// long tail (halal, kosher, dairy-free…) via onboarding later.
const DIETS = [
  { value: "anything", emoji: "🍳", key: "instant.diet.anything" },
  { value: "vegetarian", emoji: "🥗", key: "instant.diet.vegetarian" },
  { value: "vegan", emoji: "🌱", key: "instant.diet.vegan" },
  { value: "keto", emoji: "🥑", key: "instant.diet.keto" },
  { value: "gluten-free", emoji: "🌾", key: "instant.diet.glutenFree" },
  { value: "high-protein", emoji: "🍗", key: "instant.diet.highProtein" },
] as const;

// Small sub-option row between the diet tiles and the calorie line
const CUISINES = [
  { value: "any", key: "instant.cuisine.any" },
  { value: "American", key: "instant.cuisine.american" },
  { value: "Italian", key: "instant.cuisine.italian" },
  { value: "Mexican", key: "instant.cuisine.mexican" },
  { value: "Asian", key: "instant.cuisine.asian" },
  { value: "Mediterranean", key: "instant.cuisine.mediterranean" },
  { value: "Indian", key: "instant.cuisine.indian" },
] as const;

const SLOT_COLORS: Record<InstantSlot, string> = {
  breakfast: "bg-amber-50 text-amber-700",
  lunch: "bg-sky-50 text-sky-700",
  dinner: "bg-violet-50 text-violet-700",
  snack: "bg-emerald-50 text-emerald-700",
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// The rule-based API answers in ~100ms, which reads as fake. A minimum
// "cooking" duration makes the result feel earned.
const GENERATE_MIN_MS = 1100;
const SWAP_MIN_MS = 650;

function SkeletonRow() {
  return (
    <div className="flex items-center gap-3.5 rounded-2xl border border-stone-100 bg-[#FFFBF5] px-4 py-3.5 animate-pulse">
      <span className="h-12 w-12 shrink-0 rounded-full bg-stone-100" />
      <div className="min-w-0 flex-1 space-y-2">
        <div className="h-3 w-16 rounded-full bg-stone-100" />
        <div className="h-4 w-2/3 rounded-full bg-stone-100" />
        <div className="h-3 w-24 rounded-full bg-stone-100" />
      </div>
      <span className="h-9 w-9 shrink-0 rounded-full bg-stone-100" />
    </div>
  );
}

export function InstantPlanner({ isSignedIn }: { isSignedIn?: boolean }) {
  const { t, locale } = useT();

  const [diet, setDiet] = useState<(typeof DIETS)[number]["value"]>("anything");
  const [cuisine, setCuisine] = useState<(typeof CUISINES)[number]["value"]>("any");
  const [calories, setCalories] = useState("1800");
  const [meals, setMeals] = useState<2 | 3 | 4>(3);
  const [plan, setPlan] = useState<InstantPlan | null>(null);
  const [loading, setLoading] = useState(false);
  const [swappingSlot, setSwappingSlot] = useState<InstantSlot | null>(null);
  const [error, setError] = useState(false);
  const [nonce, setNonce] = useState(0);
  const [variants, setVariants] = useState<Partial<Record<InstantSlot, number>>>({});
  const resultsRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  async function fetchPlan(
    nextNonce: number,
    nextVariants: Partial<Record<InstantSlot, number>>,
    slot?: InstantSlot,
  ) {
    setError(false);
    if (slot) setSwappingSlot(slot);
    else setLoading(true);
    try {
      const request = fetch("/api/instant-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          diet,
          cuisine,
          calories: Number(calories) || 1800,
          meals,
          nonce: nextNonce,
          variants: nextVariants,
          locale,
        }),
      });
      // Hold the loading state long enough to feel like real work
      const [res] = await Promise.all([request, sleep(slot ? SWAP_MIN_MS : GENERATE_MIN_MS)]);
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
    // Ease the results into view while they "cook": on desktop pin the whole
    // card to the top so form + meals share the screen; on mobile the form is
    // too tall for that, so lead with the (skeleton) results instead.
    setTimeout(() => {
      const target = window.matchMedia("(min-width: 1024px)").matches
        ? cardRef.current
        : resultsRef.current;
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  }

  function handleSwap(slot: InstantSlot) {
    const next = { ...variants, [slot]: (variants[slot] ?? 0) + 1 };
    setVariants(next);
    track("instant_plan_swap", { slot });
    void fetchPlan(nonce, next, slot);
  }

  const busy = loading || swappingSlot !== null;

  return (
    <div ref={cardRef} id="instant-planner" className="mt-6 sm:mt-12 max-w-4xl mx-auto text-left scroll-mt-24">
      <div className="bg-white rounded-3xl border border-stone-100 shadow-lg p-4 sm:p-9">
        {/* Diet tiles. On phones this is one horizontally swipeable row —
            two stacked grid rows pushed the Generate button below the
            effective fold once browser chrome is subtracted. -mx/px let the
            row bleed to the card edge so a cut-off tile signals swipeability. */}
        <p className="text-sm sm:text-base font-medium text-stone-600 mb-3">{t("instant.dietLabel")}</p>
        {/* Bleed lives on this wrapper, not the scrolling row, so the fade
            overlay below can sit flush at the card edge instead of scrolling
            away with the tiles — a hard clip with no fade read as broken. */}
        <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex overflow-x-auto no-scrollbar snap-x gap-2 sm:grid sm:grid-cols-6 sm:overflow-visible sm:gap-2.5">
          {DIETS.map((d) => (
            <button
              key={d.value}
              type="button"
              onClick={() => setDiet(d.value)}
              className={`flex flex-col items-center justify-center gap-1.5 rounded-2xl border px-1 py-3 sm:px-2 sm:py-4 w-[5.6rem] shrink-0 snap-start sm:w-auto sm:shrink transition-all duration-200 ${
                diet === d.value
                  ? "border-orange-400 bg-orange-50 shadow-sm"
                  : "border-stone-200 bg-white hover:border-orange-200 hover:bg-orange-50/40"
              }`}
            >
              <span className="text-2xl sm:text-3xl leading-none">{d.emoji}</span>
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
        {/* Static fade, not scroll-linked — simplest version that still
            fixes the "looks broken" read. Only ever the trailing edge since
            the row starts fully scrolled-left with nothing hidden there. */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent sm:hidden" />
        </div>

        {/* Cuisine — small sub-option row */}
        {/* Cuisine pills: same swipeable-row treatment — wrapping spilled
            them onto three rows at 390px. On phones the label sits above the
            row (mirroring "What do you eat?") — inline, it scrolled away with
            the pills on the first swipe. */}
        <p className="mt-4 mb-2 text-sm font-medium text-stone-600 sm:hidden">{t("instant.cuisineLabel")}</p>
        <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="sm:mt-5 flex items-center overflow-x-auto no-scrollbar snap-x gap-2 sm:flex-wrap sm:overflow-visible sm:gap-x-2 sm:gap-y-2">
          <span className="hidden sm:inline text-sm text-stone-500 mr-1 shrink-0">{t("instant.cuisineLabel")}</span>
          {CUISINES.map((c) => (
            <button
              key={c.value}
              type="button"
              onClick={() => setCuisine(c.value)}
              className={`rounded-full px-3 py-1.5 sm:py-1.5 text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 snap-start sm:shrink transition-all duration-200 ${
                cuisine === c.value
                  ? "bg-orange-500 text-white shadow-sm"
                  : "bg-stone-100 text-stone-500 hover:bg-orange-100 hover:text-orange-700"
              }`}
            >
              {t(c.key)}
            </button>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent sm:hidden" />
        </div>

        {/* Calories + meals */}
        {/* The label + input + unit did not fit on one 390px line and broke
            across three, so both bits of text shrink and the row is allowed
            to wrap as a unit rather than mid-phrase. */}
        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-7">
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <span className="text-sm sm:text-base text-stone-600 whitespace-nowrap">{t("instant.caloriesLabel")}</span>
            <input
              type="number"
              inputMode="numeric"
              min={1000}
              max={4500}
              step={50}
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              className="w-20 sm:w-24 rounded-xl border border-stone-200 px-2 py-1.5 sm:py-2 text-center text-base sm:text-lg font-semibold text-stone-800 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all duration-200"
            />
            <span className="text-sm sm:text-base text-stone-600 whitespace-nowrap">{t("instant.caloriesUnit")}</span>
          </div>

          <div className="flex items-center gap-2">
            {([2, 3, 4] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMeals(m)}
                className={`rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
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

        {/* Generate */}
        <button
          type="button"
          onClick={handleGenerate}
          disabled={busy}
          className="mt-5 sm:mt-6 w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-orange-500 px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-md transition-all duration-200 hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:bg-orange-700 disabled:opacity-60 disabled:hover:translate-y-0"
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

        {/* Result: meals on the left, upsell rail on the right.
            Skeletons cook while loading; meals reveal with a stagger. */}
        {(plan || loading) && (
          <div ref={resultsRef} className="mt-7 grid gap-5 lg:grid-cols-[1fr_290px] items-start scroll-mt-28">
            <div key={loading ? "cooking" : `plan-${nonce}`} className="space-y-2.5">
              {loading &&
                Array.from({ length: meals === 4 ? 4 : meals }).map((_, i) => (
                  <SkeletonRow key={i} />
                ))}
              {!loading && plan && plan.meals.map((m, i) => (
                <div
                  key={`${m.slot}-${m.slug}`}
                  style={{ animationDelay: `${i * 90}ms` }}
                  className={`fade-up flex items-center gap-3.5 rounded-2xl border border-stone-100 bg-[#FFFBF5] px-4 py-3.5 transition-opacity duration-200 ${
                    swappingSlot === m.slot ? "opacity-40 animate-pulse" : "opacity-100"
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
              {!loading && plan && (
                <div
                  style={{ animationDelay: `${plan.meals.length * 90}ms` }}
                  className="fade-up flex items-center justify-between rounded-2xl bg-stone-50 px-4 py-3"
                >
                  <span className="text-sm font-medium text-stone-500">{t("instant.totalLabel")}</span>
                  <span className="text-base font-semibold text-stone-800 tabular-nums">
                    {plan.totalCalories.toLocaleString()}{" "}
                    <span className="text-sm font-normal text-stone-400">
                      / {plan.targetCalories.toLocaleString()} {t("instant.cal")}
                    </span>
                  </span>
                </div>
              )}
            </div>

            {/* Upsell rail — the "Ready for more?" moment, right beside the result */}
            {loading && !plan ? (
              <aside className="hidden lg:block rounded-2xl border border-orange-100 bg-orange-50/60 h-72 animate-pulse" />
            ) : plan && (
            <aside
              style={{ animationDelay: `${(plan.meals.length + 1) * 90}ms` }}
              className="fade-up rounded-2xl border border-orange-200 bg-orange-50 p-5 sm:p-6 text-center lg:sticky lg:top-4"
            >
              <FoodCharacter name="pasta" className="mx-auto w-20 sm:w-24" />
              <p className="mt-2 text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                {t("instant.upsellTitle")}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {t("instant.upsellBody")}
              </p>
              <Link
                href={isSignedIn ? "/dashboard" : "/onboarding"}
                onClick={() => track("instant_plan_upsell_click", { signedIn: !!isSignedIn })}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                {isSignedIn ? t("instant.upsellCtaSignedIn") : t("instant.upsellCta")}
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              {!isSignedIn && (
                <p className="mt-2.5 text-xs text-stone-400">{t("instant.upsellNote")}</p>
              )}
            </aside>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
