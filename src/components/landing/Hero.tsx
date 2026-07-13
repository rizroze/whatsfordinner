"use client";

import { useState, useEffect, useRef } from "react";
import { useT } from "@/lib/i18n/context";
import { InstantPlanner } from "@/components/landing/InstantPlanner";

// Slow count-up with ease-out deceleration (slot machine settling effect)
function useCountUp(target: number, duration = 4000): number {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (target <= 0 || startedRef.current) return;
    startedRef.current = true;

    const start = performance.now();
    function update(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic — fast start, slow finish
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }, [target, duration]);

  return count;
}

export function Hero({ isSignedIn }: { isSignedIn?: boolean }) {
  const { t } = useT();
  const [mealsCount, setMealsCount] = useState<number | null>(null);
  const animatedCount = useCountUp(mealsCount ?? 0, 8000);

  // Fetch live meals counter
  useEffect(() => {
    fetch("/api/stats", { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => { if (data.mealsPlanned) setMealsCount(data.mealsPlanned); })
      .catch(() => {});
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-24 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 py-14 sm:py-20 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-stone-900 tracking-tight leading-[1.1] whitespace-pre-line">
          {t("landing.hero.title")}
        </h1>
        <p className="mt-3 sm:mt-5 text-xl sm:text-2xl font-semibold text-orange-500 max-w-2xl mx-auto">
          {t("landing.hero.subtitle")}
        </p>

        {/* Instant generator — the ETM-style "try it right here" hero */}
        <InstantPlanner isSignedIn={isSignedIn} />

        {/* Supporting copy lives below the generator so the widget is the star */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="text-base sm:text-lg text-stone-600 max-w-xl mx-auto leading-relaxed whitespace-pre-line">
            {t("landing.hero.description")}
          </p>

          {!isSignedIn && (
            <p className="text-sm sm:text-base text-stone-500">
              {t("landing.hero.subtext")}
            </p>
          )}

          {mealsCount !== null && (
            <p className="text-xs sm:text-sm text-stone-400 tracking-wide tabular-nums">
              {t("landing.hero.liveCounter", { count: animatedCount.toLocaleString() })}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
