"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useT } from "@/lib/i18n/context";

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

  // Fetch the user's actual next meal if signed in
  useEffect(() => {
    if (!isSignedIn) return;
    fetch("/api/next-meal")
      .then((r) => r.json())
      .then((data) => { if (data.meal) setUserMeal(data.meal); })
      .catch(() => {});
  }, [isSignedIn]);

  // Use the user's real meal or fall back to sample
  const showMeal = userMeal ?? null;
  const mealType = showMeal?.type ?? period;
  const mealName = showMeal
    ? showMeal.name
    : t(`landing.suggestion.meal${period.charAt(0).toUpperCase() + period.slice(1)}`);
  const cookTime = showMeal
    ? String(showMeal.cookTime)
    : period === "breakfast" ? "5" : period === "lunch" ? "15" : "25";
  const label = showMeal
    ? t(`mealTypes.${mealType}`)
    : t(`landing.suggestion.${period}`);

  return (
    <section className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-24 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-6 py-24 sm:py-40 text-center">
        {/* Floating meal suggestion — top right, desktop only */}
        <Link
          href={isSignedIn ? "/dashboard" : "/onboarding"}
          className="hidden lg:flex absolute top-10 right-0 xl:-right-16 items-center gap-2 px-3.5 py-2 bg-white rounded-xl border border-stone-100 shadow-sm rotate-3 hover:rotate-1 hover:shadow-md transition-all duration-300 group"
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

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-stone-900 tracking-tight leading-[1.1]">
          {t("landing.hero.title")}
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-2xl font-semibold text-orange-500">
          {t("landing.hero.subtitle")}
        </p>

        <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-stone-600 max-w-md mx-auto leading-relaxed">
          {t("landing.hero.description")}
          <br />
          <span className="text-orange-500 font-medium">{t("landing.hero.noCreditCard")}</span>
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col items-center gap-3 sm:gap-4">
          <Link
            href={isSignedIn ? "/dashboard" : "/onboarding"}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 text-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
          >
            {isSignedIn ? t("landing.hero.ctaLoggedIn") : t("landing.hero.cta")}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          {!isSignedIn && (
            <p className="text-xs sm:text-sm text-stone-500">
              {t("landing.hero.subtext")}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
