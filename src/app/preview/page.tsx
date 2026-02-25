"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { DayCard } from "@/components/plan/DayCard";
import { GroceryList } from "@/components/plan/GroceryList";
import { MobileTabs } from "@/components/plan/MobileTabs";
import { PlanTable } from "@/components/plan/PlanTable";
import { formatWeekOf } from "@/lib/utils";
import { MOCK_PLAN } from "@/lib/mock-plan";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import type { MealPlanData } from "@/types/meal-plan";

interface StoredPlan {
  plan: MealPlanData;
  weekOf: string;
  generatedAt: number;
}

type ViewMode = "cards" | "table";

export default function PreviewPage() {
  const router = useRouter();
  const [plan, setPlan] = useState<MealPlanData | null>(null);
  const [weekOf, setWeekOf] = useState("");
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>("cards");

  async function handleSubscribe(plan: "monthly" | "yearly") {
    // Check if user is logged in
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      // Not logged in — go to signup with plan
      router.push(`/signup?plan=${plan}`);
      return;
    }

    // Already logged in — go straight to checkout
    try {
      const res = await fetch("/api/lemonsqueezy/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        // Checkout not configured — go to dashboard
        router.push("/dashboard");
      }
    } catch {
      router.push(`/signup?plan=${plan}`);
    }
  }

  useEffect(() => {
    // Try localStorage first, fall back to mock data for dev
    const raw = localStorage.getItem("wfd_free_plan");
    if (raw) {
      try {
        const stored: StoredPlan = JSON.parse(raw);
        setPlan(stored.plan);
        setWeekOf(stored.weekOf);
      } catch {
        // Corrupted — use mock
        setPlan(MOCK_PLAN);
        setWeekOf(MOCK_PLAN.weekOf);
      }
    } else {
      // No plan stored — use mock for dev
      setPlan(MOCK_PLAN);
      setWeekOf(MOCK_PLAN.weekOf);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFFBF5] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-orange-300 border-t-orange-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="min-h-screen bg-[#FFFBF5]">
        <div className="max-w-2xl mx-auto px-6 py-24 text-center">
          <h2 className="text-xl font-semibold text-stone-700 mb-2">
            No plan found
          </h2>
          <p className="text-sm text-stone-500 mb-6">
            Looks like you haven&apos;t generated a free plan yet.
          </p>
          <Link href="/onboarding">
            <Button>Get Your Free Plan</Button>
          </Link>
        </div>
      </div>
    );
  }

  const totalMeals = plan.days.reduce((sum, d) => sum + d.meals.length, 0);
  const totalGroceryItems = plan.groceryList.reduce((sum, c) => sum + c.items.length, 0);
  const totalCalories = plan.days.reduce((sum, d) => sum + d.totalCalories, 0);
  const totalCookTime = plan.days.reduce(
    (sum, d) => sum + d.meals.reduce((ms, m) => ms + m.prepTime + m.cookTime, 0),
    0,
  );
  // Headline stat — aspirational for free users, accurate for subscribers
  // Average person spends ~25min/day on meal decisions + planning + grocery listing
  // Yearly: 25min × 365 days = ~152h/yr, round to clean number
  // TODO: For subscribers on /plan/[weekId], show cumulative stats from all their plans
  const hoursSavedYearly = Math.round((25 * 365) / 60 / 10) * 10; // ~150

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* Header */}
      <header className="border-b border-stone-100 bg-white/60 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <Link
              href="/"
              className="text-sm text-stone-400 hover:text-orange-500 transition-colors duration-200"
            >
              &larr; Back to Home
            </Link>
            <h1 className="text-xl font-semibold text-stone-800 tracking-tight mt-1">
              Week of {formatWeekOf(weekOf)}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-stone-400 hidden sm:block">
              Free 1-day plan
            </span>
          </div>
        </div>
      </header>

      {/* Hero stat — Just Cancel style */}
      <div className="border-b border-orange-100 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-6 pt-8 sm:pt-10 pb-10 sm:pb-14">
          {/* Small stats — like "found 35 subscriptions · 847 transactions" */}
          <p className="text-sm text-stone-500 mb-1">
            planned {totalMeals} meals &middot; {totalGroceryItems} grocery items &middot; {totalCalories.toLocaleString()} cal
          </p>
          {/* Secondary line — like "Cancelled 18 · Keeping 13" */}
          <p className="text-sm text-orange-600/80 mb-4">
            {totalCookTime} min total cook time &middot; Est. {plan.estimatedWeeklyCost}
          </p>
          {/* Big heading — like "just saved $27,480/yr ($2,290/mo)" */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.1]">
            just saved <span className="text-orange-500">{hoursSavedYearly}+ hours/yr</span>
            <br />
            <span className="whitespace-nowrap">not thinking about what to eat</span>
          </h2>
        </div>
      </div>

      {/* Plan content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* View toggle */}
        <div className="flex items-center justify-end mb-6">
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
              {/* Cards icon */}
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
              {/* Table icon */}
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

        {viewMode === "table" ? (
          /* Table view */
          <div className="space-y-8">
            <PlanTable days={plan.days} />

            {/* Grocery list below table */}
            <GroceryList
              categories={plan.groceryList}
              estimatedCost={plan.estimatedWeeklyCost}
            />
          </div>
        ) : (
          <>
            {/* Mobile: tab view */}
            <div className="lg:hidden">
              <MobileTabs
                days={plan.days}
                groceryCategories={plan.groceryList}
                estimatedCost={plan.estimatedWeeklyCost}
              />
            </div>

            {/* Desktop: two-column */}
            <div className="hidden lg:grid lg:grid-cols-5 lg:gap-8">
              <div className="lg:col-span-3 space-y-4">
                {plan.days.map((day, i) => (
                  <DayCard key={day.day} day={day} defaultOpen={i === 0} />
                ))}
              </div>

              <div className="lg:col-span-2">
                <div className="sticky top-24">
                  <GroceryList
                    categories={plan.groceryList}
                    estimatedCost={plan.estimatedWeeklyCost}
                  />
                </div>
              </div>
            </div>
          </>
        )}

      </main>

      {/* CTA section — full width, outside main container */}
      <section className="border-t border-orange-100 bg-gradient-to-b from-[#FFFBF5] to-orange-50/60 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-orange-500 tracking-wide uppercase mb-3">
            Full week, every week
          </p>
          <h3 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
            7 days of meals + groceries,<br />
            delivered to your inbox
          </h3>
          <p className="text-stone-500 text-base sm:text-lg mb-3 max-w-md mx-auto">
            Personalized to your diet, budget, and household.
            Zero thinking required.
          </p>

          {/* Trust signals */}
          <div className="flex items-center justify-center gap-4 text-xs text-stone-400 mb-8">
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Cancel anytime
            </span>
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              New plan every Sunday
            </span>
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Grocery list included
            </span>
          </div>

          {/* Pricing buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => handleSubscribe("monthly")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 rounded-full shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-200"
            >
              Subscribe — $4.99/mo
            </button>
            <button
              type="button"
              onClick={() => handleSubscribe("yearly")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-stone-700 bg-white border border-stone-200 hover:border-orange-300 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            >
              $29.99/year
              <span className="ml-2 inline-flex items-center px-2 py-0.5 text-xs font-semibold text-orange-600 bg-orange-100 rounded-full">
                Save 50%
              </span>
            </button>
          </div>

          <p className="mt-4 text-xs text-stone-400">
            Less than a coffee. Way less stress than &ldquo;what&apos;s for dinner?&rdquo;
          </p>
        </div>
      </section>
    </div>
  );
}
