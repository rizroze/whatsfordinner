"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Spinner } from "@/components/ui/Spinner";
import { cn } from "@/lib/utils";
import type { MealPlanRecord } from "@/types/meal-plan";

interface CurrentPlanProps {
  plan: MealPlanRecord | null;
  isSubscribed?: boolean;
}

const typeLabels: Record<string, string> = {
  breakfast: "Breakfast",
  lunch: "Lunch",
  dinner: "Dinner",
  snack: "Snack",
};

const typeDots: Record<string, string> = {
  breakfast: "bg-orange-400",
  lunch: "bg-blue-400",
  dinner: "bg-purple-400",
  snack: "bg-lime-400",
};

function getTodayName(): string {
  return new Date().toLocaleDateString("en-US", { weekday: "long" });
}

export function CurrentPlan({ plan, isSubscribed = true }: CurrentPlanProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPlan, setCurrentPlan] = useState(plan);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  async function handleGenerate() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/generate-plan", { method: "POST" });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to generate plan");
      }
      const data = await res.json();
      setCurrentPlan(data.plan ?? { ...currentPlan, status: "generating" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  // No plan exists yet
  if (!currentPlan) {
    return (
      <Card className="border-dashed border-2 border-stone-200 bg-[#FFFBF5]">
        <CardContent className="py-12 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-50 flex items-center justify-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-orange-400"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-stone-700 mb-2">
            No plan yet
          </h3>
          <p className="text-sm text-stone-500 mb-6 max-w-xs mx-auto">
            Generate your first personalized meal plan based on your
            preferences.
          </p>
          {error && (
            <p className="text-sm text-red-500 mb-4">{error}</p>
          )}
          <Button size="lg" loading={loading} onClick={handleGenerate}>
            Generate My First Plan
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Generating
  if (currentPlan.status === "generating" || loading) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <Spinner size="lg" className="mx-auto mb-4 text-orange-400" />
          <h3 className="text-lg font-semibold text-stone-700 mb-1">
            Generating your plan...
          </h3>
          <p className="text-sm text-stone-500">
            This usually takes about 30 seconds. Hang tight.
          </p>
        </CardContent>
      </Card>
    );
  }

  // Failed
  if (currentPlan.status === "failed") {
    return (
      <Card className="border-red-100">
        <CardContent className="py-10 text-center">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-red-400"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M15 9l-6 6M9 9l6 6" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-stone-700 mb-2">
            Generation failed
          </h3>
          <p className="text-sm text-stone-500 mb-6">
            Something went wrong. Please try again.
          </p>
          {error && (
            <p className="text-sm text-red-500 mb-4">{error}</p>
          )}
          <Button loading={loading} onClick={handleGenerate}>
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Ready or sent
  const planData = currentPlan.plan_data;
  const todayName = getTodayName();
  const activeDayName = selectedDay ?? todayName;
  const activePlan = planData?.days?.find((d) => d.day === activeDayName);
  const regenLimit = isSubscribed ? 2 : 0;
  const regenLeft = regenLimit - currentPlan.regeneration_count;

  return (
    <Card>
      <CardContent>
        {/* Top bar */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Badge variant={currentPlan.status === "sent" ? "success" : "default"}>
              {currentPlan.status === "sent" ? "Sent" : "Ready"}
            </Badge>
            {planData?.estimatedWeeklyCost && (
              <span className="text-xs text-stone-400">
                Est. {planData.estimatedWeeklyCost}
              </span>
            )}
          </div>
          <Link
            href={`/plan/${currentPlan.week_of}`}
            className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
          >
            Recipes, grocery list &rarr;
          </Link>
        </div>

        {/* Day meals — the hero of this card */}
        {activePlan ? (
          <div>
            <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-3">
              {activeDayName === todayName ? "Today" : activeDayName} &mdash; {activeDayName}
            </p>
            <div className="space-y-2.5">
              {activePlan.meals.map((meal) => (
                <div key={`${meal.type}-${meal.name}`} className="flex items-center gap-3">
                  <span className={cn("w-2 h-2 rounded-full shrink-0", typeDots[meal.type] ?? "bg-stone-300")} />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-stone-800 truncate">
                      {meal.name}
                    </p>
                  </div>
                  <span className="text-xs text-stone-400 shrink-0">
                    {typeLabels[meal.type] ?? meal.type}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-stone-100 flex items-center gap-3 text-xs text-stone-400">
              <span>{activePlan.totalCalories} cal</span>
              <span>&middot;</span>
              <span>{activePlan.meals.reduce((s, m) => s + m.prepTime + m.cookTime, 0)} min cook time</span>
            </div>
          </div>
        ) : (
          <p className="text-sm text-stone-500 py-4">
            No meals planned for {activeDayName === todayName ? "today" : activeDayName}.{" "}
            <Link href={`/plan/${currentPlan.week_of}`} className="text-orange-500 hover:text-orange-600 font-medium">
              See full week
            </Link>
          </p>
        )}

        {/* Week dots — clickable day selector */}
        <div className="flex items-center gap-1 mt-4 pt-4 border-t border-stone-100">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => {
            const fullDay = planData?.days?.find((day) => day.day.startsWith(d));
            const hasDay = !!fullDay;
            const isToday = todayName.startsWith(d);
            const isSelected = activeDayName.startsWith(d);
            return (
              <button
                key={d}
                type="button"
                onClick={() => {
                  if (fullDay) setSelectedDay(fullDay.day);
                }}
                disabled={!hasDay}
                className={cn(
                  "flex-1 text-center py-1.5 rounded-lg text-[10px] font-medium transition-colors duration-200",
                  isSelected
                    ? "bg-orange-500 text-white"
                    : isToday
                      ? "bg-orange-100 text-orange-600"
                      : hasDay
                        ? "bg-stone-100 text-stone-500 hover:bg-stone-200 cursor-pointer"
                        : "text-stone-300 cursor-default",
                )}
              >
                {d}
              </button>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-4">
          <Button
            variant="secondary"
            size="sm"
            loading={loading}
            disabled={regenLeft <= 0}
            onClick={handleGenerate}
          >
            Regenerate
          </Button>
          <span className="text-xs text-stone-400">
            {!isSubscribed
              ? "Subscribe to regenerate"
              : regenLeft > 0
                ? `${currentPlan.regeneration_count}/2 used`
                : "2/2 used"}
          </span>
        </div>
        {error && (
          <p className="text-sm text-red-500 mt-2">{error}</p>
        )}
      </CardContent>
    </Card>
  );
}
