"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useT } from "@/lib/i18n/context";

interface SubscriptionStatusProps {
  status: "active" | "inactive" | "past_due" | "cancelled";
  freeUsed?: boolean;
  hasBilling?: boolean;
  planInterval?: string | null;
}

const statusConfig: Record<
  SubscriptionStatusProps["status"],
  { variant: "success" | "default" | "muted"; color: string }
> = {
  active: { variant: "success", color: "bg-lime-400" },
  inactive: { variant: "muted", color: "bg-stone-400" },
  past_due: { variant: "default", color: "bg-orange-400" },
  cancelled: { variant: "muted", color: "bg-red-400" },
};

export function SubscriptionStatus({ status, freeUsed, hasBilling = true, planInterval }: SubscriptionStatusProps) {
  const { t } = useT();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const config = statusConfig[status];

  const statusLabels: Record<string, string> = {
    active: t("dashboard.statusActive"),
    inactive: t("dashboard.statusFree"),
    past_due: t("dashboard.statusPastDue"),
    cancelled: t("dashboard.statusCancelled"),
  };

  async function handleManageBilling() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/lemonsqueezy/portal", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      setError(data.error || "Could not open billing portal");
    } catch {
      setError("Could not connect to billing. Please try again.");
    }
    setLoading(false);
  }

  async function handleSubscribe() {
    setLoading(true);
    try {
      const res = await fetch("/api/lemonsqueezy/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: "monthly" }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
        return;
      }
    } catch {
      // fall through
    }
    setLoading(false);
  }

  return (
    <Card>
      <CardHeader>
        <h3 className="text-sm font-semibold text-stone-700">{t("dashboard.subscription")}</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <span
            className={`w-2.5 h-2.5 rounded-full ${config.color} shrink-0`}
          />
          <Badge variant={config.variant}>{statusLabels[status]}</Badge>
        </div>

        <p className="text-sm text-stone-500">
          {status === "active" &&
            t("dashboard.statusActiveDesc")}
          {status === "inactive" && !freeUsed &&
            t("dashboard.statusInactiveDesc")}
          {status === "inactive" && freeUsed &&
            t("dashboard.statusInactiveUsedDesc")}
          {status === "past_due" &&
            t("dashboard.statusPastDueDesc")}
          {status === "cancelled" &&
            t("dashboard.statusCancelledDesc")}
        </p>

        {status === "active" && planInterval === "monthly" && (
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 space-y-2.5">
            <div>
              <p className="text-xs font-semibold text-stone-700">Save 50% — switch to yearly</p>
              <p className="text-xs text-stone-500 mt-0.5">$2.50/mo &middot; billed once a year</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <p className="text-xs text-stone-600">Save $29/yr vs monthly</p>
              </div>
              <div className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <p className="text-xs text-stone-600">3 invite links — give friends a free month each</p>
              </div>
            </div>
            <Button
              variant="primary"
              size="sm"
              loading={loading}
              onClick={async () => {
                setLoading(true);
                try {
                  const res = await fetch("/api/lemonsqueezy/checkout", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ plan: "yearly" }),
                  });
                  const d = await res.json();
                  if (d.url) { window.location.href = d.url; return; }
                } catch {}
                setLoading(false);
              }}
              className="w-full"
            >
              Switch to Yearly
            </Button>
          </div>
        )}

        {status === "active" && hasBilling && (
          <>
            <Button
              variant="secondary"
              size="sm"
              loading={loading}
              onClick={handleManageBilling}
              className="w-full"
            >
              {t("dashboard.manageBilling")}
            </Button>
            {error && (
              <p className="text-xs text-red-500 text-center">{error}</p>
            )}
          </>
        )}
        {status === "active" && !hasBilling && (
          <p className="text-xs text-stone-400 text-center">
            {t(planInterval === "yearly" ? "dashboard.giftYearly" : "dashboard.gift")}
          </p>
        )}

        {(status === "inactive" || status === "cancelled") && (
          <Button
            variant="primary"
            size="sm"
            loading={loading}
            onClick={handleSubscribe}
            className="w-full"
          >
            {status === "cancelled" ? t("dashboard.resubscribe") : t("dashboard.subscribeCta")}
          </Button>
        )}

        {status === "past_due" && (
          <Button
            variant="primary"
            size="sm"
            loading={loading}
            onClick={handleManageBilling}
            className="w-full"
          >
            {t("dashboard.updatePayment")}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
