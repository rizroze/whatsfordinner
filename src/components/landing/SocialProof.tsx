"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
}

function Counter({ end, prefix = "", suffix = "", label, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const step = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  function formatNumber(n: number): string {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    if (n >= 1_000) return (n / 1_000).toFixed(n >= 10_000 ? 0 : 1).replace(/\.0$/, "") + "K";
    return n.toLocaleString();
  }

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
        {prefix}{formatNumber(count)}{suffix}
      </p>
      <p className="mt-1 text-sm text-stone-500">{label}</p>
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="py-16 sm:py-20 border-t border-stone-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
          <Counter end={12847} label="meals planned" />
          <Counter end={131291} prefix="$" label="saved on groceries" />
          <Counter end={2431} label="happy households" />
          <Counter end={94} suffix="%" label="kept subscribing" />
        </div>
      </div>
    </section>
  );
}
