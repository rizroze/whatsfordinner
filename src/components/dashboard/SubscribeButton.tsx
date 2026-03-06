"use client";

import { useState } from "react";
import { useT } from "@/lib/i18n/context";

interface SubscribeButtonProps {
  label?: string;
  plan?: "monthly" | "yearly";
  variant?: "primary" | "link";
  className?: string;
}

export function SubscribeButton({
  label,
  plan = "monthly",
  variant = "primary",
  className = "",
}: SubscribeButtonProps) {
  const { t } = useT();
  const resolvedLabel = label ?? t("dashboard.heroEveryWeek");
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch("/api/lemonsqueezy/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
        return;
      }
    } catch {}
    setLoading(false);
  }

  const base = variant === "link"
    ? "text-sm font-medium text-orange-500 hover:text-orange-600 disabled:opacity-60 transition-colors duration-200"
    : "inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 disabled:opacity-60 rounded-full shadow-sm transition-all duration-200";

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`${base} ${className}`}
    >
      {loading ? (
        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : (
        resolvedLabel
      )}
    </button>
  );
}
