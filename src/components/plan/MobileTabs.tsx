"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n/context";
import { DayCard } from "./DayCard";
import { GroceryList } from "./GroceryList";
import type { DayPlan, GroceryCategory } from "@/types/meal-plan";

interface MobileTabsProps {
  days: DayPlan[];
  groceryCategories: GroceryCategory[];
  estimatedCost?: string;
  feedbackMap?: Record<string, "liked" | "disliked">;
  onFeedback?: (mealName: string, rating: "liked" | "disliked") => void;
  onSwap?: (dayIndex: number, mealIndex: number) => void;
  swappingKey?: string | null;
}

type Tab = "meals" | "grocery";

export function MobileTabs({ days, groceryCategories, estimatedCost, feedbackMap, onFeedback, onSwap, swappingKey }: MobileTabsProps) {
  const { t } = useT();
  const [active, setActive] = useState<Tab>("meals");

  return (
    <div>
      {/* Sticky tab bar */}
      <div className="sticky top-[57px] sm:top-[73px] z-10 bg-[#FFFBF5] pb-3 sm:pb-4 pt-1 -mx-4 px-4 sm:-mx-6 sm:px-6">
        <div className="flex bg-white rounded-full border border-stone-100 shadow-sm p-1">
          <button
            type="button"
            onClick={() => setActive("meals")}
            className={cn(
              "flex-1 py-2.5 text-sm font-medium rounded-full transition-all duration-200",
              active === "meals"
                ? "bg-orange-500 text-white shadow-sm"
                : "text-stone-500 hover:text-stone-700",
            )}
          >
            {t("plan.mealPlan")}
          </button>
          <button
            type="button"
            onClick={() => setActive("grocery")}
            className={cn(
              "flex-1 py-2.5 text-sm font-medium rounded-full transition-all duration-200",
              active === "grocery"
                ? "bg-orange-500 text-white shadow-sm"
                : "text-stone-500 hover:text-stone-700",
            )}
          >
            {t("plan.groceryList")}
          </button>
        </div>
      </div>

      {/* Tab content */}
      {active === "meals" ? (
        <div className="space-y-4">
          {days.map((day, i) => (
            <DayCard
              key={day.day}
              day={day}
              defaultOpen={i === 0}
              feedbackMap={feedbackMap}
              onFeedback={onFeedback}
              onSwap={onSwap ? (mi) => onSwap(i, mi) : undefined}
              swappingIndex={swappingKey?.startsWith(`${i}-`) ? Number(swappingKey.split("-")[1]) : null}
            />
          ))}
        </div>
      ) : (
        <GroceryList categories={groceryCategories} estimatedCost={estimatedCost} />
      )}
    </div>
  );
}
