"use client";

import { cn } from "@/lib/utils";
import { Select } from "@/components/ui/Select";
import type { StepProps } from "./StepHousehold";

const CUISINE_OPTIONS = [
  "American",
  "Italian",
  "Mexican",
  "Asian",
  "Mediterranean",
  "Indian",
  "Thai",
  "Japanese",
  "French",
  "Middle Eastern",
  "Korean",
  "Southern/Soul Food",
];

const SKILL_OPTIONS = [
  { value: "beginner" as const, label: "Beginner" },
  { value: "intermediate" as const, label: "Intermediate" },
  { value: "advanced" as const, label: "Advanced" },
];

const COOK_TIME_OPTIONS = [
  { value: 15, label: "15 min" },
  { value: 30, label: "30 min" },
  { value: 45, label: "45 min" },
  { value: 60, label: "60 min" },
  { value: 90, label: "90 min" },
];

export function StepPreferences({ data, onChange }: StepProps) {
  function toggleCuisine(cuisine: string) {
    const current = data.cuisine_preferences;
    if (current.includes(cuisine)) {
      onChange({
        cuisine_preferences: current.filter((c) => c !== cuisine),
      });
    } else {
      onChange({ cuisine_preferences: [...current, cuisine] });
    }
  }

  return (
    <div className="space-y-5">
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-semibold text-stone-800">
          Your cooking style
        </h2>
        <p className="text-stone-500 text-sm">
          Help us pick recipes you&apos;ll actually enjoy making.
        </p>
      </div>

      {/* Cuisine preferences */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-stone-700">
          Favorite cuisines
        </label>
        <div className="flex flex-wrap gap-2">
          {CUISINE_OPTIONS.map((cuisine) => {
            const selected = data.cuisine_preferences.includes(cuisine);
            return (
              <button
                key={cuisine}
                type="button"
                onClick={() => toggleCuisine(cuisine)}
                className={cn(
                  "px-3 py-1.5 rounded-full border text-xs font-medium transition-all duration-200",
                  "hover:border-orange-300 hover:bg-orange-50/50",
                  selected
                    ? "border-orange-400 bg-orange-50 text-orange-700"
                    : "border-stone-200 bg-white text-stone-600",
                )}
              >
                {selected && (
                  <svg
                    className="inline w-3 h-3 mr-1 -mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
                {cuisine}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cooking skill */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-stone-700">
          Skill level
        </label>
        <div className="grid grid-cols-3 gap-2">
          {SKILL_OPTIONS.map((option) => {
            const selected = data.cooking_skill === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => onChange({ cooking_skill: option.value })}
                className={cn(
                  "py-2.5 rounded-xl border text-sm font-medium transition-all duration-200",
                  "hover:border-orange-300",
                  selected
                    ? "border-orange-400 bg-orange-50 text-orange-700"
                    : "border-stone-200 bg-white text-stone-700",
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cook time + Meals per day */}
      <div className="grid grid-cols-2 gap-4">
        <Select
          label="Max cook time"
          value={data.max_cook_time}
          onChange={(e) =>
            onChange({ max_cook_time: parseInt(e.target.value, 10) })
          }
        >
          {COOK_TIME_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>

        <Select
          label="Meals per day"
          value={data.meals_per_day}
          onChange={(e) =>
            onChange({ meals_per_day: parseInt(e.target.value, 10) })
          }
        >
          <option value={2}>2 — lunch & dinner</option>
          <option value={3}>3 — all meals</option>
        </Select>
      </div>

      {/* Snacks toggle */}
      <button
        type="button"
        onClick={() => onChange({ include_snacks: !data.include_snacks })}
        className={cn(
          "w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200",
          "hover:border-orange-300",
          data.include_snacks
            ? "border-orange-400 bg-orange-50"
            : "border-stone-200 bg-white",
        )}
      >
        <div
          className={cn(
            "w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all duration-200",
            data.include_snacks
              ? "bg-orange-500 border-orange-500"
              : "border-stone-300",
          )}
        >
          {data.include_snacks && (
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
          Include daily snacks
        </span>
      </button>
    </div>
  );
}
