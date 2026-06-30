"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { DayCard } from "@/components/plan/DayCard";
import { MOCK_PLAN } from "@/lib/mock-plan";

const BLURRED_DAYS = [
  {
    day: "Tuesday",
    meals: ["Avocado Toast with Poached Eggs", "Quinoa Buddha Bowl", "Baked Salmon with Asparagus"],
  },
  {
    day: "Wednesday",
    meals: ["Overnight Oats with Banana", "Turkey & Veggie Wrap", "One-Pan Lemon Chicken Thighs"],
  },
  {
    day: "Thursday",
    meals: ["Smoothie Bowl with Chia Seeds", "Lentil Soup with Crusty Bread", "Shrimp Stir-Fry with Rice"],
  },
  {
    day: "Friday",
    meals: ["Scrambled Eggs with Whole Grain Toast", "Caprese Salad with Grilled Chicken", "Homemade Beef Tacos"],
  },
  {
    day: "Saturday",
    meals: ["Banana Pancakes", "Tomato Basil Pasta", "Herb-Crusted Pork Tenderloin"],
  },
  {
    day: "Sunday",
    meals: ["French Toast with Maple Syrup", "Chicken Caesar Salad", "Slow-Cooked Beef Stew"],
  },
];

const MEAL_TYPE_LABELS: Record<string, string> = {
  breakfast: "Breakfast",
  lunch: "Lunch",
  dinner: "Dinner",
  snack: "Snack",
};

export default function PreviewPage() {
  const router = useRouter();
  const [prefs, setPrefs] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("wfd_preferences");
    if (raw) {
      try {
        setPrefs(JSON.parse(raw));
      } catch {
        // ignore
      }
    }
  }, []);

  function handleCTA() {
    router.push("/signup?redirect=/setup");
  }

  // Build a short personalization label from stored prefs
  const personalizationBits: string[] = [];
  if (prefs) {
    const restrictions = prefs.dietary_restrictions as string[] | undefined;
    if (restrictions?.length) {
      personalizationBits.push(restrictions.slice(0, 2).join(", "));
    }
    const size = prefs.household_size as number | undefined;
    if (size && size > 1) personalizationBits.push(`for ${size}`);
    const budget = prefs.weekly_budget as string | undefined;
    if (budget === "budget") personalizationBits.push("budget-friendly");
    else if (budget === "generous") personalizationBits.push("generous budget");
  }
  const personalizationLabel = personalizationBits.length
    ? personalizationBits.join(" · ")
    : null;

  const monday = MOCK_PLAN.days[0];

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* Header */}
      <header className="border-b border-stone-100 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-stone-700 hover:text-orange-500 transition-colors">
            What&apos;s For Dinner
          </Link>
          <Link
            href="/login"
            className="text-sm text-stone-400 hover:text-orange-500 transition-colors"
          >
            Sign in
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-xs font-medium text-orange-600 mb-4">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Your personalized plan is ready
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight mb-2">
            Here&apos;s a taste of your week
          </h1>
          <p className="text-stone-500 text-sm sm:text-base">
            Monday is unlocked. Subscribe to get all 7 days + recipes + grocery list.
          </p>
          {personalizationLabel && (
            <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-stone-100 text-xs text-stone-500 font-medium">
              {personalizationLabel}
            </div>
          )}
        </div>

        {/* Monday — fully visible */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">Unlocked</span>
            <div className="flex-1 h-px bg-stone-100" />
          </div>
          <DayCard day={monday} defaultOpen={true} />
        </div>

        {/* Days 2-7 — blurred */}
        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-stone-400"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Locked — 6 more days</span>
            <div className="flex-1 h-px bg-stone-100" />
          </div>

          {/* Blurred day cards */}
          <div className="space-y-3 select-none pointer-events-none" aria-hidden="true">
            {BLURRED_DAYS.map((day) => (
              <div
                key={day.day}
                className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4 sm:p-5 blur-[3px] opacity-70"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-semibold text-stone-800">{day.day}</span>
                  <span className="text-xs text-stone-400">{day.meals.length} meals</span>
                </div>
                <div className="space-y-2">
                  {day.meals.map((meal, i) => (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-stone-50 last:border-0">
                      <span className="text-xs font-medium text-stone-400 w-16 shrink-0">
                        {i === 0 ? "Breakfast" : i === 1 ? "Lunch" : "Dinner"}
                      </span>
                      <span className="text-sm text-stone-700 font-medium">{meal}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Blurred grocery list preview */}
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4 sm:p-5 blur-[3px] opacity-70">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-base font-semibold text-stone-800">Grocery List</span>
                <span className="text-xs bg-orange-100 text-orange-600 font-medium px-2 py-0.5 rounded-full">
                  ~{Math.floor(Math.random() * 10) + 25} items
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {["Chicken thighs", "Salmon fillet", "Quinoa", "Avocado", "Baby spinach", "Greek yogurt", "Cherry tomatoes", "Lemon"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-stone-500">
                    <div className="w-3 h-3 rounded border border-stone-200 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Overlay CTA — pinned near top of locked section, follows viewport */}
          <div className="absolute inset-0 flex justify-center pointer-events-none">
            <div className="sticky top-24 self-start mt-6 pointer-events-auto bg-white/95 backdrop-blur-md rounded-2xl border border-orange-100 shadow-xl p-6 sm:p-8 mx-4 text-center max-w-sm w-full">
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h2 className="text-lg font-bold text-stone-900 mb-1">
                6 more days waiting for you
              </h2>
              <p className="text-sm text-stone-500 mb-5">
                Full recipes, grocery list, and a new plan every week.
              </p>
              <div className="space-y-2.5">
                <button
                  onClick={handleCTA}
                  className="w-full py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 rounded-full shadow-md shadow-orange-500/20 transition-all duration-200"
                >
                  Unlock my full plan — $7.99/mo
                </button>
                <button
                  onClick={handleCTA}
                  className="w-full py-2 text-xs text-stone-400 hover:text-orange-500 transition-colors"
                >
                  Or $5/mo billed yearly (save 37%)
                </button>
              </div>
              <p className="mt-3 text-[10px] text-stone-400">
                Create your free account first — takes 30 seconds
              </p>
            </div>
          </div>
        </div>

        {/* Bottom trust signals */}
        <div className="mt-10 pt-8 border-t border-stone-100 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-stone-400">
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Cancel anytime
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              New plan every Sunday
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Grocery list included
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Personalized to your preferences
            </span>
          </div>
        </div>
      </main>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#FFFBF5]/95 backdrop-blur-xl border-t border-stone-100 sm:hidden">
        <button
          onClick={handleCTA}
          className="w-full py-3.5 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg transition-colors"
        >
          Unlock my full 7-day plan
        </button>
      </div>
    </div>
  );
}
