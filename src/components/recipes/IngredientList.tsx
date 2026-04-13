"use client";

import { useState } from "react";
import type { RecipeIngredient } from "@/data/recipes/types";

export function IngredientList({ ingredients }: { ingredients: RecipeIngredient[] }) {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  function toggle(index: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  // Group ingredients by their group field
  const groups: { label: string | null; items: { ingredient: RecipeIngredient; globalIndex: number }[] }[] = [];
  let currentGroup: typeof groups[number] | null = null;

  ingredients.forEach((ingredient, i) => {
    const groupLabel = ingredient.group ?? null;
    if (!currentGroup || currentGroup.label !== groupLabel) {
      currentGroup = { label: groupLabel, items: [] };
      groups.push(currentGroup);
    }
    currentGroup.items.push({ ingredient, globalIndex: i });
  });

  return (
    <div className="space-y-6">
      {groups.map((group, gi) => (
        <div key={gi}>
          {group.label && (
            <h3 className="text-sm font-bold text-stone-800 mb-3">{group.label}</h3>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {group.items.map(({ ingredient, globalIndex }) => {
              const isChecked = checked.has(globalIndex);
              return (
                <label
                  key={globalIndex}
                  className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer hover:bg-stone-50 transition-colors duration-200 min-h-[44px]"
                >
                  <span className="relative flex items-center justify-center shrink-0">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggle(globalIndex)}
                      className="peer sr-only"
                    />
                    <span className="w-5 h-5 rounded border-2 border-stone-300 peer-checked:border-orange-500 peer-checked:bg-orange-500 transition-colors duration-200 flex items-center justify-center">
                      {isChecked && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 6l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </span>
                  <span
                    className={`text-sm transition-all duration-200 ${
                      isChecked ? "line-through text-stone-400 opacity-60" : "text-stone-700"
                    }`}
                  >
                    <span className="font-medium">{ingredient.amount}{ingredient.unit ? ` ${ingredient.unit}` : ""}</span>
                    {" "}
                    {ingredient.name}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
