"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useT } from "@/lib/i18n/context";

type MealPeriod = "breakfast" | "lunch" | "dinner";

const MEALS: Record<MealPeriod, { nameKey: string; time: string; cal: string }> = {
  breakfast: { nameKey: "landing.suggestion.mealBreakfast", time: "5", cal: "320" },
  lunch:     { nameKey: "landing.suggestion.mealLunch",     time: "15", cal: "480" },
  dinner:    { nameKey: "landing.suggestion.mealDinner",    time: "25", cal: "520" },
};

function getMealPeriod(): MealPeriod {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 11) return "breakfast";
  if (hour >= 11 && hour < 16) return "lunch";
  return "dinner";
}

export function MealSuggestion({ isSignedIn }: { isSignedIn?: boolean }) {
  const { t } = useT();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem("wfd_suggestion_dismissed")) {
      setDismissed(true);
      return;
    }
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  function handleDismiss() {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem("wfd_suggestion_dismissed", "1");
  }

  if (dismissed) return null;

  const period = getMealPeriod();
  const meal = MEALS[period];

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 max-w-[300px] w-full transition-all duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-2xl border border-stone-200 shadow-lg p-4 relative">
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-stone-300 hover:text-stone-500 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Period label */}
        <p className="text-[11px] font-semibold text-orange-500 uppercase tracking-wide mb-1.5">
          {t(`landing.suggestion.${period}`)}
        </p>

        {/* Meal name */}
        <p className="text-sm font-semibold text-stone-900 leading-snug pr-5">
          {t(meal.nameKey)}
        </p>

        {/* Stats */}
        <p className="text-xs text-stone-400 mt-1">
          {meal.time} {t("plan.min")} · {meal.cal} {t("plan.cal")}
        </p>

        {/* CTA */}
        <Link
          href={isSignedIn ? "/dashboard" : "/onboarding"}
          onClick={handleDismiss}
          className="mt-3 flex items-center justify-center gap-1.5 w-full py-2 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 rounded-full transition-colors"
        >
          {t("landing.suggestion.cta")}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
