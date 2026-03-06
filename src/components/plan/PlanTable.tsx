"use client";

import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n/context";
import type { DayPlan, Meal } from "@/types/meal-plan";

interface PlanTableProps {
  days: DayPlan[];
}

const typeOrder: Meal["type"][] = ["breakfast", "lunch", "dinner", "snack"];

const typeColors: Record<Meal["type"], string> = {
  breakfast: "bg-orange-50 text-orange-700",
  lunch: "bg-blue-50 text-blue-700",
  dinner: "bg-purple-50 text-purple-700",
  snack: "bg-lime-50 text-lime-700",
};

export function PlanTable({ days }: PlanTableProps) {
  const { t } = useT();
  // Collect all meal types present across all days
  const mealTypes = typeOrder.filter((type) =>
    days.some((d) => d.meals.some((m) => m.type === type)),
  );

  return (
    <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-stone-100 bg-stone-50/50">
            <th className="text-left px-4 py-3 text-xs font-semibold text-stone-500 uppercase tracking-wide w-[100px]">
              {t("plan.day")}
            </th>
            {mealTypes.map((type) => (
              <th
                key={type}
                className="text-left px-4 py-3 text-xs font-semibold text-stone-500 uppercase tracking-wide"
              >
                {t(`mealTypes.${type}`)}
              </th>
            ))}
            <th className="text-right px-4 py-3 text-xs font-semibold text-stone-500 uppercase tracking-wide w-[80px]">
              {t("plan.cal")}
            </th>
          </tr>
        </thead>
        <tbody>
          {days.map((day, i) => (
            <tr
              key={day.day}
              className={cn(
                "border-b border-stone-50 last:border-b-0",
                i % 2 === 1 && "bg-stone-50/30",
              )}
            >
              <td className="px-4 py-3 font-semibold text-stone-800 align-top">
                {day.day.slice(0, 3)}
              </td>
              {mealTypes.map((type) => {
                const meal = day.meals.find((m) => m.type === type);
                return (
                  <td key={type} className="px-4 py-3 align-top">
                    {meal ? (
                      <div>
                        <span className="font-medium text-stone-700 leading-snug block">
                          {meal.name}
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className={cn(
                              "text-[10px] font-medium rounded-full px-2 py-0.5",
                              typeColors[type],
                            )}
                          >
                            {meal.prepTime + meal.cookTime} {t("plan.min")}
                          </span>
                          <span className="text-xs text-stone-400">
                            {meal.calories} {t("plan.cal")}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <span className="text-stone-300">—</span>
                    )}
                  </td>
                );
              })}
              <td className="px-4 py-3 text-right font-medium text-stone-600 align-top">
                {day.totalCalories}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
