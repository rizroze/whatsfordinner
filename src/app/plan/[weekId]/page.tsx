import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { formatWeekOf } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/Card";
import { DayCard } from "@/components/plan/DayCard";
import { GroceryList } from "@/components/plan/GroceryList";
import { MobileTabs } from "@/components/plan/MobileTabs";
import type { MealPlanData, MealPlanRecord } from "@/types/meal-plan";

interface PlanPageProps {
  params: Promise<{ weekId: string }>;
}

export default async function PlanPage({ params }: PlanPageProps) {
  const { weekId } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: planRow } = await supabase
    .from("meal_plans")
    .select("*")
    .eq("user_id", user.id)
    .eq("week_of", weekId)
    .single();

  const plan = planRow as unknown as MealPlanRecord | null;

  // Not found
  if (!plan) {
    return (
      <div className="min-h-screen bg-[#FFFBF5]">
        <header className="border-b border-stone-100 bg-white/60 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <Link
              href="/dashboard"
              className="text-sm text-stone-400 hover:text-orange-500 transition-colors duration-200"
            >
              &larr; Back to Dashboard
            </Link>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-xl font-semibold text-stone-700 mb-2">
            Plan not found
          </h2>
          <p className="text-sm text-stone-500">
            We couldn&apos;t find a meal plan for this week.
          </p>
        </main>
      </div>
    );
  }

  // Plan not ready
  if (plan.status !== "ready" && plan.status !== "sent") {
    return (
      <div className="min-h-screen bg-[#FFFBF5]">
        <header className="border-b border-stone-100 bg-white/60 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <Link
              href="/dashboard"
              className="text-sm text-stone-400 hover:text-orange-500 transition-colors duration-200"
            >
              &larr; Back to Dashboard
            </Link>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-xl font-semibold text-stone-700 mb-2">
            {plan.status === "generating"
              ? "Plan is still generating..."
              : "Plan generation failed"}
          </h2>
          <p className="text-sm text-stone-500">
            {plan.status === "generating"
              ? "Check back in a moment. Your plan is being created."
              : "Please return to your dashboard and try regenerating."}
          </p>
        </main>
      </div>
    );
  }

  const planData = plan.plan_data as MealPlanData;

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* Header */}
      <header className="border-b border-stone-100 bg-white/60 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <Link
              href="/dashboard"
              className="text-sm text-stone-400 hover:text-orange-500 transition-colors duration-200"
            >
              &larr; Back to Dashboard
            </Link>
            <h1 className="text-xl font-semibold text-stone-800 tracking-tight mt-1">
              Week of {formatWeekOf(weekId)}
            </h1>
          </div>
          {planData.estimatedWeeklyCost && (
            <span className="text-sm text-stone-500 hidden sm:block">
              Est. {planData.estimatedWeeklyCost}
            </span>
          )}
        </div>
      </header>

      {/* Desktop layout */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Notes */}
        {planData.notes && (
          <Card className="mb-8 bg-orange-50/50 border-orange-100">
            <CardContent className="py-4">
              <p className="text-sm text-stone-600">{planData.notes}</p>
            </CardContent>
          </Card>
        )}

        {/* Mobile: tab view */}
        <div className="lg:hidden">
          <MobileTabs
            days={planData.days}
            groceryCategories={planData.groceryList}
          />
        </div>

        {/* Desktop: two-column */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:gap-8">
          {/* Day plans — wider column */}
          <div className="lg:col-span-3 space-y-4">
            {planData.days.map((day, i) => (
              <DayCard key={day.day} day={day} defaultOpen={i === 0} />
            ))}
          </div>

          {/* Grocery list — sticky sidebar */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <GroceryList categories={planData.groceryList} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
