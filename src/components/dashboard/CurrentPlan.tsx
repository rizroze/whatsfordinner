"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Spinner } from "@/components/ui/Spinner";
import type { MealPlanRecord } from "@/types/meal-plan";

interface CurrentPlanProps {
  plan: MealPlanRecord | null;
  isSubscribed?: boolean;
}

export function CurrentPlan({ plan, isSubscribed = true }: CurrentPlanProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPlan, setCurrentPlan] = useState(plan);

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

  // Plan is currently generating
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

  // Plan failed
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
            Something went wrong while creating your plan. Please try again.
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

  // Plan is ready or sent
  const planData = currentPlan.plan_data;
  const dayCount = planData?.days?.length ?? 0;
  const mealCount =
    planData?.days?.reduce((sum, day) => sum + day.meals.length, 0) ?? 0;
  const regenLimit = isSubscribed ? 2 : 0;
  const regenLeft = regenLimit - currentPlan.regeneration_count;

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-stone-800">Current Plan</h3>
              <Badge variant={currentPlan.status === "sent" ? "success" : "default"}>
                {currentPlan.status === "sent" ? "Sent" : "Ready"}
              </Badge>
            </div>
            {planData?.estimatedWeeklyCost && (
              <p className="text-sm text-stone-500">
                Est. cost: {planData.estimatedWeeklyCost}
              </p>
            )}
          </div>
        </div>

        {/* Day summary */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {planData?.days?.map((day) => (
            <div
              key={day.day}
              className="text-center p-2 rounded-xl bg-orange-50/60"
            >
              <p className="text-xs font-medium text-stone-500 mb-0.5">
                {day.day.slice(0, 3)}
              </p>
              <p className="text-sm font-semibold text-stone-700">
                {day.meals.length}
              </p>
              <p className="text-[10px] text-stone-400">meals</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-stone-500">
          {dayCount} days &middot; {mealCount} meals planned
        </p>
      </CardContent>

      <CardFooter className="gap-3 flex-wrap">
        <Link href={`/plan/${currentPlan.week_of}`}>
          <Button variant="primary" size="sm">
            View Full Plan
          </Button>
        </Link>
        <Button
          variant="secondary"
          size="sm"
          loading={loading}
          disabled={regenLeft <= 0}
          onClick={handleGenerate}
        >
          Regenerate
        </Button>
        <span className="text-xs text-stone-400 ml-auto">
          {!isSubscribed
            ? "Subscribe to regenerate"
            : regenLeft > 0
              ? `${currentPlan.regeneration_count}/2 regenerations used`
              : "2/2 regenerations used"}
        </span>
        {error && (
          <p className="text-sm text-red-500 w-full">{error}</p>
        )}
      </CardFooter>
    </Card>
  );
}
