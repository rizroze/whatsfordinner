"use client";

import { useEffect, useState } from "react";

/**
 * Honest social proof from real usage stats. Renders nothing until the
 * stats load (and nothing at all if the numbers aren't worth showing).
 */
export function SocialProofLine({ className = "" }: { className?: string }) {
  const [meals, setMeals] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && typeof data.mealsPlanned === "number" && data.mealsPlanned >= 500) {
          setMeals(data.mealsPlanned);
        }
      })
      .catch(() => {});
  }, []);

  if (!meals) return null;

  const rounded = Math.floor(meals / 100) * 100;

  return (
    <p className={`text-xs text-stone-400 flex items-center justify-center gap-1.5 ${className}`}>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="#F97316" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <span>
        <span className="font-semibold text-stone-500">{rounded.toLocaleString()}+ meals</span> planned
        for real households &middot; 30-day money-back guarantee
      </span>
    </p>
  );
}
