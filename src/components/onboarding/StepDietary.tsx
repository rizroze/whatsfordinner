"use client";

import { useState, type KeyboardEvent } from "react";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n/context";
import type { StepProps } from "./StepHousehold";

const AGE_RANGES = ["18-25", "26-35", "36-45", "46-55", "56+"] as const;

const TASTE_PILL_VALUES = [
  "Spicy lover",
  "Comfort food",
  "Sweet tooth",
  "Love carbs",
  "Protein heavy",
  "Fresh & light",
  "Quick & easy",
  "One-pot meals",
  "Meal prep",
  "Picky eater",
  "Try anything",
];

const DIETARY_OPTIONS = [
  "Vegetarian",
  "Vegan",
  "Gluten-Free",
  "Dairy-Free",
  "Keto",
  "Low-Carb",
  "Pescatarian",
  "Halal",
  "Kosher",
];

export function StepDietary({ data, onChange }: StepProps) {
  const { t } = useT();
  const [allergyInput, setAllergyInput] = useState("");

  const GOAL_OPTIONS = [
    {
      value: "lose" as const,
      label: t("onboarding.dietary.goalLose"),
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      ),
    },
    {
      value: "maintain" as const,
      label: t("onboarding.dietary.goalMaintain"),
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
        </svg>
      ),
    },
    {
      value: "bulk" as const,
      label: t("onboarding.dietary.goalBulk"),
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      ),
    },
  ];

  const TASTE_PILLS: { value: string; label: string }[] = [
    { value: "Spicy lover", label: t("onboarding.dietary.spicyLover") },
    { value: "Comfort food", label: t("onboarding.dietary.comfortFood") },
    { value: "Sweet tooth", label: t("onboarding.dietary.sweetTooth") },
    { value: "Love carbs", label: t("onboarding.dietary.loveCarbs") },
    { value: "Protein heavy", label: t("onboarding.dietary.proteinHeavy") },
    { value: "Fresh & light", label: t("onboarding.dietary.freshLight") },
    { value: "Quick & easy", label: t("onboarding.dietary.quickEasy") },
    { value: "One-pot meals", label: t("onboarding.dietary.onePot") },
    { value: "Meal prep", label: t("onboarding.dietary.mealPrep") },
    { value: "Picky eater", label: t("onboarding.dietary.pickyEater") },
    { value: "Try anything", label: t("onboarding.dietary.tryAnything") },
  ];

  // Parse personal_note as pill selections + freetext
  // Pills are stored comma-separated at start, freetext after "|"
  function getSelectedPills(): string[] {
    const pills = data.personal_note.split("|")[0];
    return pills
      ? pills.split(",").filter((p) => TASTE_PILL_VALUES.includes(p.trim()))
      : [];
  }

  function getFreetext(): string {
    const parts = data.personal_note.split("|");
    return parts.length > 1 ? parts.slice(1).join("|").trim() : "";
  }

  function updateNote(pills: string[], freetext: string) {
    const pillStr = pills.join(",");
    const note = freetext ? `${pillStr}|${freetext}` : pillStr;
    onChange({ personal_note: note });
  }

  function togglePill(pill: string) {
    const current = getSelectedPills();
    const freetext = getFreetext();
    const next = current.includes(pill)
      ? current.filter((p) => p !== pill)
      : [...current, pill];
    updateNote(next, freetext);
  }

  function toggleRestriction(r: string) {
    const cur = data.dietary_restrictions;
    onChange({
      dietary_restrictions: cur.includes(r)
        ? cur.filter((x) => x !== r)
        : [...cur, r],
    });
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      const val = allergyInput.trim();
      if (val && !data.allergies.includes(val)) {
        onChange({ allergies: [...data.allergies, val] });
      }
      setAllergyInput("");
    }
    if (
      e.key === "Backspace" &&
      allergyInput === "" &&
      data.allergies.length > 0
    ) {
      onChange({ allergies: data.allergies.slice(0, -1) });
    }
  }

  const selectedPills = getSelectedPills();
  const freetext = getFreetext();

  return (
    <div className="space-y-4 sm:space-y-5">
      <div className="text-center space-y-1">
        <h2 className="text-xl sm:text-2xl font-semibold text-stone-800">{t("onboarding.dietary.title")}</h2>
        <p className="text-stone-500 text-xs sm:text-sm">
          {t("onboarding.dietary.subtitle")}
        </p>
      </div>

      {/* Age */}
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-stone-500">{t("onboarding.dietary.age")}</label>
        <div className="grid grid-cols-5 gap-1.5">
          {AGE_RANGES.map((age) => (
            <button
              key={age}
              type="button"
              onClick={() =>
                onChange({ age_range: data.age_range === age ? "" : age })
              }
              className={cn(
                "py-2 rounded-lg border text-xs font-medium transition-all",
                "hover:border-orange-300",
                data.age_range === age
                  ? "border-orange-400 bg-orange-50 text-orange-700"
                  : "border-stone-200 bg-white text-stone-600",
              )}
            >
              {age}
            </button>
          ))}
        </div>
      </div>

      {/* Goal — with up/down icons */}
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-stone-500">{t("onboarding.dietary.goal")}</label>
        <div className="grid grid-cols-3 gap-1.5">
          {GOAL_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() =>
                onChange({
                  nutrition_goal:
                    data.nutrition_goal === opt.value ? "" : opt.value,
                })
              }
              className={cn(
                "py-2 rounded-lg border text-xs font-medium transition-all inline-flex items-center justify-center gap-1.5",
                "hover:border-orange-300",
                data.nutrition_goal === opt.value
                  ? "border-orange-400 bg-orange-50 text-orange-700"
                  : "border-stone-200 bg-white text-stone-600",
              )}
            >
              {opt.icon}
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Taste pills — compact grid on mobile */}
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-stone-500">
          {t("onboarding.dietary.tastePillsLabel")}
        </label>
        <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-1.5">
          {TASTE_PILLS.map((pill) => {
            const on = selectedPills.includes(pill.value);
            return (
              <button
                key={pill.value}
                type="button"
                onClick={() => togglePill(pill.value)}
                className={cn(
                  "px-2 py-1.5 sm:px-3 rounded-full border text-[11px] sm:text-xs font-medium transition-all text-center",
                  on
                    ? "border-orange-400 bg-orange-50 text-orange-700"
                    : "border-stone-200 bg-white text-stone-500 hover:border-orange-300",
                )}
              >
                {pill.label}
              </button>
            );
          })}
        </div>
        <input
          type="text"
          value={freetext}
          onChange={(e) => updateNote(selectedPills, e.target.value)}
          placeholder={t("onboarding.dietary.anythingElse")}
          maxLength={100}
          className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-white text-xs text-stone-900 placeholder:text-stone-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
        />
      </div>

      {/* Dietary restrictions — compact grid on mobile */}
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-stone-500">
          {t("onboarding.dietary.restrictions")}
        </label>
        <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-1.5">
          {DIETARY_OPTIONS.map((opt) => {
            const on = data.dietary_restrictions.includes(opt);
            return (
              <button
                key={opt}
                type="button"
                onClick={() => toggleRestriction(opt)}
                className={cn(
                  "px-2 py-1.5 sm:px-2.5 rounded-full border text-[11px] sm:text-xs font-medium transition-all text-center",
                  on
                    ? "border-orange-400 bg-orange-50 text-orange-700"
                    : "border-stone-200 bg-white text-stone-500 hover:border-orange-300",
                )}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Allergies */}
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-stone-500">{t("onboarding.dietary.allergies")}</label>
        <div className="flex flex-wrap items-center gap-1.5 px-3 py-2 rounded-xl border border-stone-200 bg-white focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100 transition-all">
          {data.allergies.map((a) => (
            <span
              key={a}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-medium"
            >
              {a}
              <button
                type="button"
                onClick={() =>
                  onChange({
                    allergies: data.allergies.filter((x) => x !== a),
                  })
                }
                className="opacity-60 hover:opacity-100"
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </span>
          ))}
          <input
            type="text"
            value={allergyInput}
            onChange={(e) => setAllergyInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              data.allergies.length === 0 ? t("onboarding.dietary.allergiesPlaceholder") : ""
            }
            className="flex-1 min-w-[80px] outline-none text-sm text-stone-900 placeholder:text-stone-400 bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
