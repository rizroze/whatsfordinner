"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n/context";
import type { GroceryCategory } from "@/types/meal-plan";

interface GroceryListProps {
  categories: GroceryCategory[];
  estimatedCost?: string;
  columns?: boolean;
}

export function GroceryList({ categories, estimatedCost, columns = false }: GroceryListProps) {
  const { t } = useT();
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  function toggleItem(categoryIdx: number, itemIdx: number) {
    const key = `${categoryIdx}-${itemIdx}`;
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const totalItems = categories.reduce(
    (sum, cat) => sum + cat.items.length,
    0,
  );
  const checkedCount = Object.values(checked).filter(Boolean).length;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-semibold text-stone-800">
                {t("plan.groceryList")}
              </h3>
              {estimatedCost && (
                <span className="text-xs font-medium text-lime-700 bg-lime-50 border border-lime-200 rounded-full px-2.5 py-0.5">
                  ~{estimatedCost}
                </span>
              )}
            </div>
            <p className="text-xs text-stone-400 mt-0.5">
              {t("plan.itemsChecked", { checked: String(checkedCount), total: String(totalItems) })}
            </p>
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.print()}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              {t("plan.print")}
            </Button>
            <span className="text-[10px] text-stone-400 print:hidden">{t("plan.fridgeNote")}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className={cn("print:space-y-3", columns ? "" : "space-y-5")}>
        <div className={cn(columns && "columns-2 xl:columns-3 gap-8")}>
          {categories.map((cat, catIdx) => (
            <div key={cat.category} className={cn(columns ? "break-inside-avoid mb-5" : "mb-5 last:mb-0")}>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                  {cat.category}
                </h4>
                <span className="text-[10px] text-stone-400">
                  {cat.items.length} {t("plan.items")}
                </span>
              </div>

              <ul className="space-y-1.5">
                {cat.items.map((item, itemIdx) => {
                  const key = `${catIdx}-${itemIdx}`;
                  const isChecked = !!checked[key];

                  return (
                    <li key={key}>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleItem(catIdx, itemIdx)}
                          className="w-4 h-4 rounded border-stone-300 text-orange-500 focus:ring-orange-400 focus:ring-offset-0 cursor-pointer"
                        />
                        <span
                          className={cn(
                            "text-sm transition-all duration-200",
                            isChecked
                              ? "line-through text-stone-400"
                              : "text-stone-600 group-hover:text-stone-800",
                          )}
                        >
                          {item.amount} {item.unit} {item.name}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
