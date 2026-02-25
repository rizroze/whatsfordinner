"use client";

import { cn } from "@/lib/utils";
import type { StepProps } from "./StepHousehold";

const BUDGET_OPTIONS = [
  {
    value: "budget" as const,
    label: "Kitchen Basics",
    price: "$50-80",
    description: "Pantry staples, simple recipes",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15c0 3.5 3.6 6 8 6s8-2.5 8-6" />
        <path d="M4 15h16" />
        <path d="M9 12c0-1 1-1.5 1-2.5S9 8 9 7" />
        <path d="M12 12c0-1 1-1.5 1-2.5S12 8 12 7" />
        <path d="M15 12c0-1 1-1.5 1-2.5S15 8 15 7" />
      </svg>
    ),
  },
  {
    value: "moderate" as const,
    label: "Home Cook",
    price: "$80-130",
    description: "Fresh ingredients, good variety",
    popular: true,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="13" r="7" />
        <circle cx="12" cy="13" r="4.5" />
        <path d="M8 3v3M8 3l-1 0M8 3l1 0" />
        <path d="M16 3v3M16 5h1M16 5a1 1 0 01-1-1v-1" />
      </svg>
    ),
  },
  {
    value: "premium" as const,
    label: "Foodie",
    price: "$130-200",
    description: "Specialty items, global flavors",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 14v4h-4v-4" />
        <path d="M16 14v4h-4" />
        <path d="M8 14c0-1-2.5-2-2.5-4.5a4.5 4.5 0 014-4.47 4.5 4.5 0 015 0 4.5 4.5 0 014 4.47c0 2.5-2.5 3.5-2.5 4.5" />
        <path d="M8 18h8" />
      </svg>
    ),
  },
];

export function StepBudget({ data, onChange }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-stone-800">
          How much do you spend on groceries?
        </h2>
        <p className="text-stone-500 text-sm">
          Weekly grocery budget — we&apos;ll match recipes to your range.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {BUDGET_OPTIONS.map((option) => {
          const selected = data.weekly_budget === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange({ weekly_budget: option.value })}
              className={cn(
                "relative flex flex-col items-center text-center px-4 py-7 rounded-2xl border transition-all duration-200",
                "hover:border-orange-300",
                selected
                  ? "border-orange-400 bg-orange-50/80 shadow-sm"
                  : "border-stone-200 bg-white",
              )}
            >
              {"popular" in option && option.popular && (
                <span className="absolute -top-2.5 px-3 py-0.5 bg-orange-500 text-white text-xs font-semibold rounded-full">
                  Most picked
                </span>
              )}
              <div
                className={cn(
                  "mb-3",
                  selected ? "text-orange-500" : "text-stone-400",
                )}
              >
                {option.icon}
              </div>
              <h3
                className={cn(
                  "text-base font-semibold",
                  selected ? "text-orange-700" : "text-stone-800",
                )}
              >
                {option.label}
              </h3>
              <p className="text-sm font-medium text-orange-500 mt-2">
                {option.price}/wk
              </p>
              <p className="text-xs text-stone-400 mt-1.5 leading-relaxed">{option.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
