"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MealCard } from "./MealCard";
import { useT } from "@/lib/i18n/context";
import type { DayPlan } from "@/types/meal-plan";

interface DayCardProps {
  day: DayPlan;
  defaultOpen?: boolean;
}

export function DayCard({ day, defaultOpen = false }: DayCardProps) {
  const { t } = useT();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Card className={open ? "ring-1 ring-orange-100" : ""}>
      <CardHeader className="p-0">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="w-full flex items-center justify-between py-5 px-6 group"
        >
          <div className="flex items-center gap-3">
            <h3 className="text-base font-semibold text-stone-800 group-hover:text-orange-600 transition-colors duration-200">
              {day.day}
            </h3>
            <Badge variant="muted">{day.totalCalories} {t("plan.cal")}</Badge>
          </div>

          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-stone-400 transition-transform duration-200 ${open ? "rotate-180" : ""
              }`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </CardHeader>

      {open && (
        <CardContent className="pb-6 pt-0 space-y-3">

          {day.meals.map((meal, i) => (
            <MealCard key={`${meal.name}-${i}`} meal={meal} />
          ))}
        </CardContent>
      )}
    </Card>
  );
}
