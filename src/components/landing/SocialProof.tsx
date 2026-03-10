"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useT } from "@/lib/i18n/context";

interface CounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
}

function Counter({ end, prefix = "", suffix = "", label, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const isVisible = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  // When end changes (stats loaded) and already visible → animate
  useEffect(() => {
    if (end > 0 && isVisible.current) animate();
  }, [end, animate]);

  // Track visibility — animate immediately if data is ready
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.current = true;
          if (end > 0) animate();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px 50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, animate]);

  function formatNumber(n: number): string {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
    return n.toLocaleString();
  }

  return (
    <div ref={ref} className="text-center">
      <p className="text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight">
        {prefix}{formatNumber(count)}{suffix}
      </p>
      <p className="mt-1 text-sm text-stone-500">{label}</p>
    </div>
  );
}

interface Stats {
  mealsPlanned: number;
  hoursSaved: number;
  plansGenerated: number;
  users: number;
}

export function SocialProof() {
  const { t } = useT();
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch("/api/stats", { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => setStats(data))
      .catch(() => setStats(null));
  }, []);

  // Hide only if we got data and it's empty
  if (stats && stats.plansGenerated < 1) return null;

  return (
    <section className="py-16 sm:py-20 border-t border-stone-100">
      <div className="max-w-lg sm:max-w-3xl mx-auto px-6">
        <div className={`grid grid-cols-3 gap-6 sm:gap-12 transition-opacity duration-500 ${stats ? "opacity-100" : "opacity-0"}`}>
          <Counter end={stats?.mealsPlanned ?? 0} label={t("landing.social.mealsPlanned")} />
          <Counter end={stats?.hoursSaved ?? 0} suffix="h" label={t("landing.social.hoursSaved")} />
          <Counter end={1200} prefix="$" suffix="+" label={t("landing.social.lessSpent")} />
        </div>
      </div>
    </section>
  );
}
