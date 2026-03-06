"use client";

import { useT } from "@/lib/i18n/context";
import { SubscribeButton } from "./SubscribeButton";
import type { MealPlanData } from "@/types/meal-plan";

interface DashboardHeroProps {
  planData: MealPlanData;
  isSubscribed: boolean;
  planCount: number;
}

export function DashboardHero({ planData, isSubscribed, planCount }: DashboardHeroProps) {
  const { t } = useT();

  const totalMeals = planData.days.reduce((sum, d) => sum + d.meals.length, 0);
  const totalGroceryItems = planData.groceryList.reduce((sum, c) => sum + c.items.length, 0);
  const totalCalories = planData.days.reduce((sum, d) => sum + d.totalCalories, 0);
  const hoursSavedWeekly = 2.5;
  const hoursSavedTotal = Math.round(planCount * hoursSavedWeekly * 10) / 10;

  return (
    <div className="border-b border-orange-100 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-8 sm:pb-12">
        <p className="text-xs sm:text-sm text-stone-500 mb-1">
          {t("dashboard.heroMeals", { meals: String(totalMeals) })} &middot; {t("dashboard.heroGroceryItems", { items: String(totalGroceryItems) })} &middot; {totalCalories.toLocaleString()} {t("plan.cal")} &middot; {t("plan.estCost", { cost: planData.estimatedWeeklyCost })}
        </p>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.1]">
          {planCount <= 1 ? (
            <>
              {t("dashboard.heroSavedPrefix")} <span className="text-orange-500">{t("dashboard.heroSavedHighlight", { hours: "2.5" })}</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>{t("dashboard.heroNotThinking")}
            </>
          ) : (
            <>
              {t("dashboard.heroSavedTotalPrefix")} <span className="text-orange-500">{t("dashboard.heroSavedTotalHighlight", { hours: String(hoursSavedTotal), weeks: String(planCount) })}</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>{t("dashboard.heroNotThinking")}
            </>
          )}
        </h2>
        {!isSubscribed && (
          <div className="mt-4 flex items-center gap-3">
            <SubscribeButton />
          </div>
        )}
      </div>
    </div>
  );
}
