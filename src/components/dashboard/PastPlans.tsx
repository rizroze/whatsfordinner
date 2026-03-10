"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatWeekOf } from "@/lib/utils";
import { useT } from "@/lib/i18n/context";
import type { MealPlanRecord } from "@/types/meal-plan";

interface PastPlansProps {
  plans: MealPlanRecord[];
}

const statusBadge: Record<
  MealPlanRecord["status"],
  { variant: "default" | "success" | "muted" }
> = {
  generating: { variant: "default" },
  ready: { variant: "default" },
  sent: { variant: "success" },
  failed: { variant: "muted" },
  skipped: { variant: "muted" },
};

export function PastPlans({ plans }: PastPlansProps) {
  const { t } = useT();

  const statusLabels: Record<string, string> = {
    generating: t("dashboard.statusGenerating"),
    ready: t("dashboard.statusReady"),
    sent: t("dashboard.statusSent"),
    failed: t("dashboard.statusFailed"),
  };
  if (plans.length === 0) {
    return (
      <Card className="border-dashed border-2 border-stone-200 bg-[#FFFBF5]">
        <CardContent className="py-10 text-center">
          <p className="text-sm text-stone-400">
            {t("dashboard.pastPlansEmpty")}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {plans.map((plan) => {
        const config = statusBadge[plan.status];
        const mealCount =
          plan.plan_data?.days?.reduce(
            (sum, day) => sum + day.meals.length,
            0,
          ) ?? 0;

        return (
          <Link key={plan.id} href={`/plan/${plan.week_of}`}>
            <Card className="group cursor-pointer hover:border-orange-200 transition-all duration-200">
              <CardContent className="py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-orange-400"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-700 group-hover:text-orange-600 transition-colors duration-200">
                      {t("dashboard.weekOf", { date: formatWeekOf(plan.week_of) })}
                    </p>
                    {mealCount > 0 && (
                      <p className="text-xs text-stone-400">
                        {t("dashboard.mealsCount", { count: String(mealCount) })}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Badge variant={config.variant}>{statusLabels[plan.status]}</Badge>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-stone-300 group-hover:text-orange-400 transition-colors duration-200"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
