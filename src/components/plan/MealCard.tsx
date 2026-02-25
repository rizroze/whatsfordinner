"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Meal } from "@/types/meal-plan";

interface MealCardProps {
  meal: Meal;
}

const mealTypeStyles: Record<Meal["type"], string> = {
  breakfast: "bg-orange-50 text-orange-600",
  lunch: "bg-blue-50 text-blue-600",
  dinner: "bg-purple-50 text-purple-600",
  snack: "bg-lime-50 text-lime-600",
};

export function MealCard({ meal }: MealCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-xl border border-stone-100 bg-[#FFFBF5] overflow-hidden">
      {/* Meal header — always visible */}
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="w-full text-left px-4 py-3 flex items-center justify-between group hover:bg-orange-50/40 transition-colors duration-200"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span
            className={cn(
              "text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0",
              mealTypeStyles[meal.type],
            )}
          >
            {meal.type}
          </span>
          <span className="text-sm font-medium text-stone-700 truncate">
            {meal.name}
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0 ml-3">
          {/* Prep + cook time */}
          <span className="text-xs text-stone-400 hidden sm:block">
            {meal.prepTime + meal.cookTime} min
          </span>
          <Badge variant="muted">{meal.calories} cal</Badge>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-stone-300 transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      {/* Expanded recipe detail */}
      {expanded && (
        <div className="px-4 pb-4 pt-1 border-t border-stone-100 space-y-4">
          {/* Time details */}
          <div className="flex items-center gap-4 text-xs text-stone-500">
            <span>
              <strong className="text-stone-600">Prep:</strong> {meal.prepTime}{" "}
              min
            </span>
            <span>
              <strong className="text-stone-600">Cook:</strong> {meal.cookTime}{" "}
              min
            </span>
            <span>
              <strong className="text-stone-600">Servings:</strong>{" "}
              {meal.servings}
            </span>
          </div>

          {/* Tags */}
          {meal.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {meal.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] text-stone-500 bg-stone-100 rounded-full px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Ingredients */}
          <div>
            <h4 className="text-xs font-semibold text-stone-600 uppercase tracking-wide mb-2">
              Ingredients
            </h4>
            <ul className="space-y-1">
              {meal.ingredients.map((ing, i) => (
                <li
                  key={`${ing.name}-${i}`}
                  className="text-sm text-stone-600 flex items-baseline gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-orange-300 shrink-0 mt-1.5" />
                  <span>
                    {ing.amount} {ing.unit} {ing.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h4 className="text-xs font-semibold text-stone-600 uppercase tracking-wide mb-2">
              Instructions
            </h4>
            <ol className="space-y-2">
              {meal.instructions.map((step, i) => (
                <li key={i} className="text-sm text-stone-600 flex gap-3">
                  <span className="text-xs font-semibold text-orange-400 mt-0.5 shrink-0">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
