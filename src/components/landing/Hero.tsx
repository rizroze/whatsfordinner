"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useT } from "@/lib/i18n/context";
import { InstantPlanner } from "@/components/landing/InstantPlanner";

// Slow count-up with ease-out deceleration (slot machine settling effect)
function useCountUp(target: number, duration = 4000): number {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (target <= 0 || startedRef.current) return;
    startedRef.current = true;

    const start = performance.now();
    function update(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic — fast start, slow finish
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }, [target, duration]);

  return count;
}

type MealPeriod = "breakfast" | "lunch" | "dinner";

const MEAL_COLORS: Record<MealPeriod, string> = {
  breakfast: "bg-amber-50 text-amber-700",
  lunch: "bg-sky-50 text-sky-700",
  dinner: "bg-violet-50 text-violet-700",
};

function getMealPeriod(): MealPeriod {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 11) return "breakfast";
  if (hour >= 11 && hour < 16) return "lunch";
  return "dinner";
}

interface NextMeal {
  name: string;
  type: MealPeriod;
  cookTime: number;
  calories: number;
}

export function Hero({ isSignedIn }: { isSignedIn?: boolean }) {
  const { t } = useT();
  const period = getMealPeriod();
  const [userMeal, setUserMeal] = useState<NextMeal | null>(null);
  const [mealsCount, setMealsCount] = useState<number | null>(null);
  const animatedCount = useCountUp(mealsCount ?? 0, 8000);

  // Fetch the user's actual next meal if signed in
  useEffect(() => {
    if (!isSignedIn) return;
    fetch("/api/next-meal")
      .then((r) => r.json())
      .then((data) => { if (data.meal) setUserMeal(data.meal); })
      .catch(() => {});
  }, [isSignedIn]);

  // Fetch live meals counter
  useEffect(() => {
    fetch("/api/stats", { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => { if (data.mealsPlanned) setMealsCount(data.mealsPlanned); })
      .catch(() => {});
  }, []);

  // Use the user's real meal or fall back to sample
  const mealType = userMeal?.type ?? period;
  const mealName = userMeal
    ? userMeal.name
    : t(`landing.suggestion.meal${period.charAt(0).toUpperCase() + period.slice(1)}`);
  const cookTime = userMeal
    ? String(userMeal.cookTime)
    : period === "breakfast" ? "5" : period === "lunch" ? "15" : "25";
  const label = userMeal
    ? t(`mealTypes.${mealType}`)
    : t(`landing.suggestion.${period}`);

  return (
    <section className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-24 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 py-16 sm:py-24 text-center">
        {/* Floating meal suggestion — desktop: top right, mobile: below hero text */}
        <Link
          href={isSignedIn ? "/dashboard" : "/onboarding"}
          className="hidden lg:flex absolute top-24 right-0 xl:-right-16 items-center gap-2 px-3.5 py-2 bg-white rounded-xl border border-stone-100 shadow-sm rotate-3 hover:rotate-1 hover:shadow-md transition-all duration-300 group"
        >
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold shrink-0 ${MEAL_COLORS[mealType]}`}>
            {label}
          </span>
          <span className="text-xs font-medium text-stone-700 max-w-[180px] truncate">
            {mealName}
          </span>
          <span className="text-[10px] text-stone-400 shrink-0">
            {cookTime} {t("plan.min")}
          </span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-300 group-hover:text-orange-400 transition-colors shrink-0">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-stone-900 tracking-tight leading-[1.1] whitespace-pre-line">
          {t("landing.hero.title")}
        </h1>
        <p className="mt-3 sm:mt-4 text-lg sm:text-2xl font-semibold text-orange-500 max-w-xl mx-auto">
          {t("landing.hero.subtitle")}
        </p>

        <p className="mt-5 sm:mt-7 text-sm sm:text-lg text-stone-600 max-w-lg mx-auto leading-relaxed whitespace-pre-line">
          {t("landing.hero.description")}
        </p>

        {/* Instant generator — the ETM-style "try it right here" hero */}
        <InstantPlanner isSignedIn={isSignedIn} />

        <div className="mt-6 flex flex-col items-center gap-2">
          {!isSignedIn && (
            <p className="text-xs sm:text-sm text-stone-500">
              {t("landing.hero.subtext")}
            </p>
          )}

          {mealsCount !== null && (
            <p className="text-[11px] sm:text-xs text-stone-400 tracking-wide tabular-nums">
              {t("landing.hero.liveCounter", { count: animatedCount.toLocaleString() })}
            </p>
          )}
        </div>

        {/* Mobile meal suggestion — very bottom of hero */}
        <Link
          href={isSignedIn ? "/dashboard" : "/onboarding"}
          className="flex lg:hidden mx-auto mt-6 w-fit items-center gap-2 px-3.5 py-2 bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 group"
        >
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold shrink-0 ${MEAL_COLORS[mealType]}`}>
            {label}
          </span>
          <span className="text-xs font-medium text-stone-700 max-w-[180px] truncate">
            {mealName}
          </span>
          <span className="text-[10px] text-stone-400 shrink-0">
            {cookTime} {t("plan.min")}
          </span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-300 group-hover:text-orange-400 transition-colors shrink-0">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
