"use client";

import { useState } from "react";
import { useT } from "@/lib/i18n/context";
import { getTrialDays } from "@/lib/trial";

/**
 * Shown to subscribers whose trial hasn't ended yet. States the end date and
 * the price that follows, so the auto-charge is never a surprise — the same
 * reasoning as the trial-ending email, applied to every dashboard visit.
 * Renders nothing once trial_ends_at passes (converted users need no cleanup)
 * or when the trial flag is off.
 */
export function TrialBanner({
  trialEndsAt,
  planInterval,
}: {
  trialEndsAt: string | null;
  planInterval: "monthly" | "yearly" | null;
}) {
  const { t, locale } = useT();
  // Stable per-mount timestamp — the render-purity lint forbids Date.now()
  // inline, and day-level precision makes a frozen value equally correct.
  const [now] = useState(() => Date.now());

  if (!getTrialDays() || !trialEndsAt) return null;
  const ends = new Date(trialEndsAt);
  if (Number.isNaN(ends.getTime()) || ends.getTime() <= now) return null;

  const date = ends.toLocaleDateString(locale, { month: "long", day: "numeric" });
  const price = planInterval === "yearly" ? "$59.99/yr" : "$7.99/mo";

  return (
    <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-2xl border border-orange-200 bg-orange-50 px-4 py-3">
      <span className="shrink-0 rounded-full bg-orange-500 px-2.5 py-0.5 text-xs font-semibold text-white">
        {t("dashboard.trialBannerTitle")}
      </span>
      <p className="text-sm text-stone-600">
        {t("dashboard.trialBannerBody", { date, price })}
      </p>
    </div>
  );
}
