"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n/context";
import type { Meal } from "@/types/meal-plan";

interface MealCardProps {
  meal: Meal;
  feedback?: "liked" | "disliked" | null;
  onFeedback?: (mealName: string, rating: "liked" | "disliked") => void;
  onSwap?: () => void;
  swapping?: boolean;
}

const mealTypeStyles: Record<Meal["type"], string> = {
  breakfast: "bg-orange-50 text-orange-600",
  lunch: "bg-blue-50 text-blue-600",
  dinner: "bg-purple-50 text-purple-600",
  snack: "bg-lime-50 text-lime-600",
};

export function MealCard({ meal, feedback, onFeedback, onSwap, swapping }: MealCardProps) {
  const { t } = useT();
  const [expanded, setExpanded] = useState(false);

  const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(meal.name + " recipe")}`;

  return (
    <div className="rounded-xl border border-stone-100 bg-[#FFFBF5] overflow-hidden">
      {/* Meal header — always visible */}
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="w-full text-left px-4 py-3 group hover:bg-orange-50/40 transition-colors duration-200"
      >
        {/* Top row: type badge + meal name */}
        <div className="flex items-start gap-2.5">
          <span
            className={cn(
              "text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 mt-0.5",
              mealTypeStyles[meal.type],
            )}
          >
            {t(`mealTypes.${meal.type}`)}
          </span>
          <span className="text-sm font-medium text-stone-700 leading-snug flex-1">
            {meal.name}
          </span>
          {onSwap && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onSwap(); }}
              disabled={swapping}
              title="Swap this meal"
              className={cn(
                "shrink-0 p-1 rounded-lg transition-all duration-200 mr-0.5",
                swapping
                  ? "text-orange-400 animate-spin"
                  : "text-stone-300 hover:text-orange-400 hover:bg-orange-50",
              )}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2v6h-6" />
                <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                <path d="M3 22v-6h6" />
                <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
              </svg>
            </button>
          )}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-stone-300 transition-transform duration-200 shrink-0 mt-0.5 ${
              expanded ? "rotate-180" : ""
            }`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        {/* Bottom row: meta info */}
        <div className="flex items-center gap-3 mt-1.5 ml-[calc(0.625rem+4px+0.625rem)]">
          <span className="text-xs text-stone-400">
            {meal.prepTime + meal.cookTime} {t("plan.min")}
          </span>
          <span className="text-xs text-stone-400">&middot;</span>
          <span className="text-xs text-stone-400">
            {meal.calories} {t("plan.cal")}
          </span>
          {meal.servings && (
            <>
              <span className="text-xs text-stone-400">&middot;</span>
              <span className="text-xs text-stone-400">
                {meal.servings} {t("plan.servings")}
              </span>
            </>
          )}
        </div>
      </button>

      {/* Expanded recipe detail */}
      {expanded && (
        <div className="px-4 pb-4 pt-1 border-t border-stone-100 space-y-4">
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
              {t("plan.ingredients")}
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
              {t("plan.instructions")}
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

          {/* Action bar: YouTube + Feedback */}
          <div className="flex items-center justify-between pt-2 border-t border-stone-50">
            {/* YouTube search link */}
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-red-500 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              {t("plan.watchOnYouTube")}
            </a>

            {/* Thumbs feedback */}
            {onFeedback && (
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => onFeedback(meal.name, "liked")}
                  className={cn(
                    "p-1.5 rounded-lg transition-all duration-200",
                    feedback === "liked"
                      ? "bg-green-50 text-green-600"
                      : "text-stone-300 hover:text-green-500 hover:bg-green-50/50",
                  )}
                  title={t("plan.thumbsUp")}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => onFeedback(meal.name, "disliked")}
                  className={cn(
                    "p-1.5 rounded-lg transition-all duration-200",
                    feedback === "disliked"
                      ? "bg-red-50 text-red-500"
                      : "text-stone-300 hover:text-red-400 hover:bg-red-50/50",
                  )}
                  title={t("plan.thumbsDown")}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 14V2" />
                    <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
