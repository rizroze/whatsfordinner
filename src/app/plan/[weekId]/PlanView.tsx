"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DayCard } from "@/components/plan/DayCard";
import { GroceryList } from "@/components/plan/GroceryList";
import { MobileTabs } from "@/components/plan/MobileTabs";
import { PlanTable } from "@/components/plan/PlanTable";
import type { MealPlanData } from "@/types/meal-plan";

interface PlanViewProps {
  planData: MealPlanData;
  weekOf: string;
  formattedWeek: string;
}

type ViewMode = "cards" | "table";

export function PlanView({ planData, weekOf, formattedWeek }: PlanViewProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("cards");

  const totalMeals = planData.days.reduce((sum, d) => sum + d.meals.length, 0);
  const totalGroceryItems = planData.groceryList.reduce((sum, c) => sum + c.items.length, 0);
  const totalCalories = planData.days.reduce((sum, d) => sum + d.totalCalories, 0);
  const totalCookTime = planData.days.reduce(
    (sum, d) => sum + d.meals.reduce((ms, m) => ms + m.prepTime + m.cookTime, 0),
    0,
  );
  const hoursSavedYearly = Math.round((25 * 365) / 60 / 10) * 10;

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* Header */}
      <header className="border-b border-stone-100 bg-white/60 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-xl flex items-center justify-center transition-colors shrink-0"
            >
              <span className="text-2xl leading-none" style={{ filter: "brightness(0) invert(1)" }}>🍴</span>
            </Link>
            <div>
              <h1 className="text-lg sm:text-xl font-semibold text-stone-800 tracking-tight">
                Week of {formattedWeek}
              </h1>
              <p className="text-xs text-stone-400">
                <Link href="/dashboard" className="hover:text-orange-500 transition-colors">
                  Dashboard
                </Link>
                {" "}&rarr; Meal Plan
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero stat */}
      <div className="border-b border-orange-100 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-8 sm:pb-14">
          <p className="text-xs sm:text-sm text-stone-500 mb-1">
            planned {totalMeals} meals &middot; {totalGroceryItems} grocery items &middot; {totalCalories.toLocaleString()} cal
          </p>
          <p className="text-xs sm:text-sm text-orange-600/80 mb-4">
            {totalCookTime} min total cook time &middot; Est. {planData.estimatedWeeklyCost}
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.1]">
            just saved <span className="text-orange-500">{hoursSavedYearly}+ hours/yr</span>
            <br />
            not thinking about what to eat
          </h2>
        </div>
      </div>

      {/* Plan content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* View toggle — hidden on mobile */}
        <div className="hidden sm:flex items-center justify-end mb-6">
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
              Cards
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
              Table
            </button>
          </div>
        </div>

        {/* Mobile: always cards + tabs */}
        <div className="sm:hidden">
          <MobileTabs
            days={planData.days}
            groceryCategories={planData.groceryList}
            estimatedCost={planData.estimatedWeeklyCost}
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
              />
            </div>
          ) : (
            <div className="lg:grid lg:grid-cols-5 lg:gap-8">
              <div className="lg:col-span-3 space-y-4">
                {planData.days.map((day, i) => (
                  <DayCard key={day.day} day={day} defaultOpen={i === 0} />
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
