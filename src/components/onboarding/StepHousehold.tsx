"use client";

import { cn } from "@/lib/utils";

const HOUSEHOLD_SIZES = [1, 2, 3, 4, 5, 6] as const;
const KIDS_AGE_OPTIONS = [
  { value: "toddler", label: "Toddler (1-3)" },
  { value: "preschool", label: "Preschool (4-5)" },
  { value: "school-age", label: "School age (6-12)" },
  { value: "teen", label: "Teen (13+)" },
] as const;

export interface OnboardingFormData {
  household_size: number;
  has_kids: boolean;
  kids_ages: string[];
  weekly_budget: "budget" | "moderate" | "premium";
  age_range: "18-25" | "26-35" | "36-45" | "46-55" | "56+" | "";
  nutrition_goal: "lose" | "maintain" | "bulk" | "";
  dietary_restrictions: string[];
  allergies: string[];
  personal_note: string;
  cuisine_preferences: string[];
  cooking_skill: "beginner" | "intermediate" | "advanced";
  max_cook_time: number;
  meals_per_day: number;
  include_snacks: boolean;
  servings_per_meal: number;
  delivery_email: string;
  delivery_day: string;
  timezone: string;
}

export interface StepProps {
  data: OnboardingFormData;
  onChange: (updates: Partial<OnboardingFormData>) => void;
}

export function StepHousehold({ data, onChange }: StepProps) {
  function toggleKidAge(age: string) {
    const current = data.kids_ages;
    if (current.includes(age)) {
      onChange({ kids_ages: current.filter((a) => a !== age) });
    } else {
      onChange({ kids_ages: [...current, age] });
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-stone-800">
          Who&apos;s eating?
        </h2>
        <p className="text-stone-500">
          Tell us about your household so we can plan the right portions.
        </p>
      </div>

      {/* Household size */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-stone-700">
          Household size
        </label>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {HOUSEHOLD_SIZES.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => onChange({ household_size: size })}
              className={cn(
                "flex flex-col items-center justify-center py-4 px-3 rounded-xl border-2 transition-all duration-200",
                "hover:border-orange-300 hover:bg-orange-50/50",
                data.household_size === size
                  ? "border-orange-400 bg-orange-50 shadow-sm"
                  : "border-stone-150 bg-white",
              )}
            >
              <span className="text-2xl mb-1">
                {size === 1
                  ? "\u{1F9D1}\u200D\u{1F373}"
                  : size === 2
                    ? "\u{1F46B}"
                    : size === 3
                      ? "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}"
                      : size === 4
                        ? "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}"
                        : size === 5
                          ? "\u{1F46A}"
                          : "\u{1F3E0}"}
              </span>
              <span
                className={cn(
                  "text-sm font-medium",
                  data.household_size === size
                    ? "text-orange-700"
                    : "text-stone-600",
                )}
              >
                {size === 6 ? "6+" : size}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Has kids */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={() =>
            onChange({ has_kids: !data.has_kids, kids_ages: [] })
          }
          className={cn(
            "w-full flex items-center gap-3 px-5 py-4 rounded-xl border-2 transition-all duration-200",
            "hover:border-orange-300",
            data.has_kids
              ? "border-orange-400 bg-orange-50"
              : "border-stone-150 bg-white",
          )}
        >
          <div
            className={cn(
              "w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200",
              data.has_kids
                ? "bg-orange-500 border-orange-500"
                : "border-stone-300",
            )}
          >
            {data.has_kids && (
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          <span className="text-sm font-medium text-stone-700">
            Do you have kids?
          </span>
        </button>
      </div>

      {/* Kids ages */}
      {data.has_kids && (
        <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <label className="text-sm font-medium text-stone-700">
            Kids&apos; ages
          </label>
          <div className="grid grid-cols-2 gap-3">
            {KIDS_AGE_OPTIONS.map((option) => {
              const selected = data.kids_ages.includes(option.value);
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => toggleKidAge(option.value)}
                  className={cn(
                    "px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-200",
                    "hover:border-orange-300 hover:bg-orange-50/50",
                    selected
                      ? "border-orange-400 bg-orange-50 text-orange-700"
                      : "border-stone-150 bg-white text-stone-600",
                  )}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
