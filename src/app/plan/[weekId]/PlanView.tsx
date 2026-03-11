"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n/context";
import { DayCard } from "@/components/plan/DayCard";
import { GroceryList } from "@/components/plan/GroceryList";
import { MobileTabs } from "@/components/plan/MobileTabs";
import { PlanTable } from "@/components/plan/PlanTable";
import type { MealPlanData } from "@/types/meal-plan";

interface PlanViewProps {
  planData: MealPlanData;
  weekOf: string;
  formattedWeek: string;
  initialFeedback?: { meal_name: string; rating: "liked" | "disliked" }[];
}

type ViewMode = "cards" | "table";

export function PlanView({ planData, weekOf, formattedWeek, initialFeedback }: PlanViewProps) {
  const { t } = useT();
  const [viewMode, setViewMode] = useState<ViewMode>("cards");
  const [planDays, setPlanDays] = useState(planData.days);
  const [swappingKey, setSwappingKey] = useState<string | null>(null);

  const handleSwap = useCallback(async (dayIndex: number, mealIndex: number) => {
    const key = `${dayIndex}-${mealIndex}`;
    if (swappingKey) return; // one swap at a time
    setSwappingKey(key);
    try {
      const res = await fetch("/api/swap-meal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ weekId: weekOf, dayIndex, mealIndex }),
      });
      if (!res.ok) throw new Error("Swap failed");
      const { meal } = await res.json();
      setPlanDays((prev) =>
        prev.map((day, di) => {
          if (di !== dayIndex) return day;
          const updatedMeals = day.meals.map((m, mi) => (mi === mealIndex ? meal : m));
          return {
            ...day,
            meals: updatedMeals,
            totalCalories: updatedMeals.reduce((sum, m) => sum + (m.calories ?? 0), 0),
          };
        }),
      );
    } catch {
      // silently fail — meal stays the same
    } finally {
      setSwappingKey(null);
    }
  }, [swappingKey, weekOf]);

  // Build feedback map from initial data
  const [feedbackMap, setFeedbackMap] = useState<Record<string, "liked" | "disliked">>(() => {
    const map: Record<string, "liked" | "disliked"> = {};
    for (const f of initialFeedback ?? []) {
      map[f.meal_name] = f.rating;
    }
    return map;
  });

  const handleFeedback = useCallback((mealName: string, rating: "liked" | "disliked") => {
    // Optimistic update
    setFeedbackMap((prev) => {
      const next = { ...prev };
      if (prev[mealName] === rating) {
        delete next[mealName]; // un-toggle
      } else {
        next[mealName] = rating;
      }
      return next;
    });

    // Fire API call (no need to await)
    fetch("/api/meal-feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ meal_name: mealName, rating }),
    }).catch(() => {});
  }, []);

  const totalMeals = planDays.reduce((sum, d) => sum + d.meals.length, 0);
  const totalGroceryItems = planData.groceryList.reduce((sum, c) => sum + c.items.length, 0);
  const totalCalories = planDays.reduce((sum, d) => sum + d.totalCalories, 0);
  const totalCookTime = planDays.reduce(
    (sum, d) => sum + d.meals.reduce((ms, m) => ms + m.prepTime + m.cookTime, 0),
    0,
  );

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* Header */}
      <header className="border-b border-stone-100 bg-white/60 backdrop-blur-sm sticky top-0 z-20 print:static print:bg-transparent print:backdrop-blur-none print:border-b-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-xl flex items-center justify-center transition-colors shrink-0 print:hidden"
            >
              <span className="text-2xl leading-none" style={{ filter: "brightness(0) invert(1)" }}>🍴</span>
            </Link>
            <div>
              <h1 className="text-lg sm:text-xl font-semibold text-stone-800 tracking-tight">
                {t("plan.weekOf", { date: formattedWeek })}
              </h1>
              <p className="text-xs text-stone-400 print:hidden">
                <Link href="/dashboard" className="hover:text-orange-500 transition-colors">
                  {t("dashboard.title")}
                </Link>
                {" "}&rarr; {t("plan.mealPlan")}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero stat */}
      <div className="border-b border-orange-100 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 print:hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-8 sm:pb-14">
          <p className="text-xs sm:text-sm text-stone-500 mb-1">
            {t("plan.planned", { meals: String(totalMeals) })} &middot; {t("dashboard.heroGroceryItems", { items: String(totalGroceryItems) })} &middot; {totalCalories.toLocaleString()} {t("plan.cal")}
          </p>
          <p className="text-xs sm:text-sm text-orange-600/80 mb-4">
            {t("plan.totalCookTime", { time: String(totalCookTime) })} &middot; {t("plan.estCost", { cost: planData.estimatedWeeklyCost })}
          </p>
          <h2 className="text-3xl sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] font-extrabold text-stone-900 tracking-tighter leading-[1.08]">
            {t("plan.heroSavedYearlyPrefix")} <span className="text-orange-500">{t("plan.heroSavedYearlyHighlight")}</span>
            <br />
            {t("dashboard.heroNotThinking")}
          </h2>
        </div>
      </div>

      {/* Plan content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* View toggle — hidden on mobile and print */}
        <div className="hidden sm:flex print:!hidden items-center justify-end mb-6">
          <div className="flex bg-white rounded-full border border-stone-100 shadow-sm p-1">
            <button
              type="button"
              onClick={() => setViewMode("cards")}
              className={cn(
                "px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200",
                viewMode === "cards"
                  ? "bg-orange-500 text-white shadow-sm"
                  : "text-stone-500 hover:text-stone-700",
              )}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block mr-1.5 -mt-0.5"
              >
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              {t("plan.cards")}
            </button>
            <button
              type="button"
              onClick={() => setViewMode("table")}
              className={cn(
                "px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200",
                viewMode === "table"
                  ? "bg-orange-500 text-white shadow-sm"
                  : "text-stone-500 hover:text-stone-700",
              )}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block mr-1.5 -mt-0.5"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
                <line x1="9" y1="3" x2="9" y2="21" />
              </svg>
              {t("plan.table")}
            </button>
          </div>
        </div>

        {/* Mobile: always cards + tabs */}
        <div className="sm:hidden">
          <MobileTabs
            days={planDays}
            groceryCategories={planData.groceryList}
            estimatedCost={planData.estimatedWeeklyCost}
            feedbackMap={feedbackMap}
            onFeedback={handleFeedback}
            onSwap={handleSwap}
            swappingKey={swappingKey}
          />
        </div>

        {/* Desktop: respect view toggle */}
        <div className="hidden sm:block">
          {viewMode === "table" ? (
            <div className="space-y-8">
              <PlanTable days={planData.days} />
              <GroceryList
                categories={planData.groceryList}
                estimatedCost={planData.estimatedWeeklyCost}
                columns
              />
            </div>
          ) : (
            <div className="lg:grid lg:grid-cols-5 lg:gap-8">
              <div className="lg:col-span-3 space-y-4">
                {planDays.map((day, i) => (
                  <DayCard
                    key={day.day}
                    day={day}
                    defaultOpen={i === 0}
                    feedbackMap={feedbackMap}
                    onFeedback={handleFeedback}
                    onSwap={(mi) => handleSwap(i, mi)}
                    swappingIndex={swappingKey?.startsWith(`${i}-`) ? Number(swappingKey.split("-")[1]) : null}
                  />
                ))}
              </div>

              <div className="hidden lg:block lg:col-span-2">
                <div className="sticky top-24">
                  <GroceryList
                    categories={planData.groceryList}
                    estimatedCost={planData.estimatedWeeklyCost}
                  />
                </div>
              </div>

              {/* Tablet: grocery below cards */}
              <div className="lg:hidden mt-8">
                <GroceryList
                  categories={planData.groceryList}
                  estimatedCost={planData.estimatedWeeklyCost}
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
