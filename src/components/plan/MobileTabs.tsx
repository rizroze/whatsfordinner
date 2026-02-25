"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { DayCard } from "./DayCard";
import { GroceryList } from "./GroceryList";
import type { DayPlan, GroceryCategory } from "@/types/meal-plan";

interface MobileTabsProps {
  days: DayPlan[];
  groceryCategories: GroceryCategory[];
  estimatedCost?: string;
}

type Tab = "meals" | "grocery";

export function MobileTabs({ days, groceryCategories, estimatedCost }: MobileTabsProps) {
  const [active, setActive] = useState<Tab>("meals");

  return (
    <div>
      {/* Sticky tab bar */}
      <div className="sticky top-[73px] z-10 bg-[#FFFBF5] pb-4 pt-1 -mx-6 px-6">
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
            Meals
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
            Grocery List
          </button>
        </div>
      </div>

      {/* Tab content */}
      {active === "meals" ? (
        <div className="space-y-4">
          {days.map((day, i) => (
            <DayCard key={day.day} day={day} defaultOpen={i === 0} />
          ))}
        </div>
      ) : (
        <GroceryList categories={groceryCategories} estimatedCost={estimatedCost} />
      )}
    </div>
  );
}
