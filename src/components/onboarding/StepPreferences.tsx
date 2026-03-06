"use client";

import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n/context";
import { Select } from "@/components/ui/Select";
import type { StepProps } from "./StepHousehold";

const CUISINE_OPTIONS = [
  { value: "American", key: "cuisineAmerican" },
  { value: "Italian", key: "cuisineItalian" },
  { value: "Mexican", key: "cuisineMexican" },
  { value: "Asian", key: "cuisineAsian" },
  { value: "Mediterranean", key: "cuisineMediterranean" },
  { value: "Indian", key: "cuisineIndian" },
  { value: "Thai", key: "cuisineThai" },
  { value: "Japanese", key: "cuisineJapanese" },
  { value: "French", key: "cuisineFrench" },
  { value: "Middle Eastern", key: "cuisineMiddleEastern" },
  { value: "Korean", key: "cuisineKorean" },
  { value: "Southern/Soul Food", key: "cuisineSouthern" },
];

export function StepPreferences({ data, onChange }: StepProps) {
  const { t } = useT();

  const SKILL_OPTIONS = [
    { value: "beginner" as const, label: t("onboarding.preferences.beginner") },
    { value: "intermediate" as const, label: t("onboarding.preferences.intermediate") },
    { value: "advanced" as const, label: t("onboarding.preferences.advanced") },
  ];

  const COOK_TIME_OPTIONS = [
    { value: 15, label: t("onboarding.preferences.min15") },
    { value: 30, label: t("onboarding.preferences.min30") },
    { value: 45, label: t("onboarding.preferences.min45") },
    { value: 60, label: t("onboarding.preferences.min60") },
    { value: 90, label: t("onboarding.preferences.min90") },
  ];

  function toggleCuisine(value: string) {
    const current = data.cuisine_preferences;
    if (current.includes(value)) {
      onChange({
        cuisine_preferences: current.filter((c) => c !== value),
      });
    } else {
      onChange({ cuisine_preferences: [...current, value] });
    }
  }

  return (
    <div className="space-y-4 sm:space-y-5">
      <div className="text-center space-y-1">
        <h2 className="text-xl sm:text-2xl font-semibold text-stone-800">
          {t("onboarding.preferences.title")}
        </h2>
        <p className="text-stone-500 text-xs sm:text-sm">
          {t("onboarding.preferences.subtitle")}
        </p>
      </div>

      {/* Cuisine preferences */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-stone-700">
          {t("onboarding.preferences.cuisines")}
        </label>
        <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-1.5 sm:gap-2">
          {CUISINE_OPTIONS.map((cuisine) => {
            const selected = data.cuisine_preferences.includes(cuisine.value);
            return (
              <button
                key={cuisine.value}
                type="button"
                onClick={() => toggleCuisine(cuisine.value)}
                className={cn(
                  "px-2 py-1.5 sm:px-3 rounded-full border text-[11px] sm:text-xs font-medium transition-all duration-200 text-center",
                  "hover:border-orange-300 hover:bg-orange-50/50",
                  selected
                    ? "border-orange-400 bg-orange-50 text-orange-700"
                    : "border-stone-200 bg-white text-stone-600",
                )}
              >
                {selected && (
                  <svg
                    className="hidden sm:inline w-3 h-3 mr-1 -mt-0.5"
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
                {t(`onboarding.preferences.${cuisine.key}`)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cooking skill */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-stone-700">
          {t("onboarding.preferences.skillLevel")}
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
          label={t("onboarding.preferences.maxCookTime")}
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
          label={t("onboarding.preferences.mealsPerDay")}
          value={data.meals_per_day}
          onChange={(e) =>
            onChange({ meals_per_day: parseInt(e.target.value, 10) })
          }
        >
          <option value={2}>{t("onboarding.preferences.meals2")}</option>
          <option value={3}>{t("onboarding.preferences.meals3")}</option>
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
          {t("onboarding.preferences.includeSnacks")}
        </span>
      </button>
    </div>
  );
}
