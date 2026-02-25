"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface SubscriptionStatusProps {
  status: "active" | "inactive" | "past_due" | "cancelled";
  freeUsed?: boolean;
}

const statusConfig: Record<
  SubscriptionStatusProps["status"],
  { label: string; variant: "success" | "default" | "muted"; color: string }
> = {
  active: { label: "Active", variant: "success", color: "bg-lime-400" },
  inactive: { label: "Free", variant: "muted", color: "bg-stone-400" },
  past_due: { label: "Past Due", variant: "default", color: "bg-orange-400" },
  cancelled: { label: "Cancelled", variant: "muted", color: "bg-red-400" },
};

export function SubscriptionStatus({ status, freeUsed }: SubscriptionStatusProps) {
  const [loading, setLoading] = useState(false);
  const config = statusConfig[status];

  async function handleManageBilling() {
    setLoading(true);
    try {
      const res = await fetch("/api/lemonsqueezy/portal", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setLoading(false);
    }
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
      }
    } catch {
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <h3 className="text-sm font-semibold text-stone-700">Subscription</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <span
            className={`w-2.5 h-2.5 rounded-full ${config.color} shrink-0`}
          />
          <Badge variant={config.variant}>{config.label}</Badge>
        </div>

        <p className="text-sm text-stone-500">
          {status === "active" &&
            "Your weekly meal plans are being generated automatically."}
          {status === "inactive" && !freeUsed &&
            "You're on the free plan. Generate a free 1-day plan to try it out!"}
          {status === "inactive" && freeUsed &&
            "Your free plan has been used. Subscribe to keep getting weekly plans."}
          {status === "past_due" &&
            "Your payment is past due. Please update your billing info."}
          {status === "cancelled" &&
            "Your subscription has been cancelled. Resubscribe to continue."}
        </p>

        {status === "active" && (
          <Button
            variant="secondary"
            size="sm"
            loading={loading}
            onClick={handleManageBilling}
            className="w-full"
          >
            Manage Billing
          </Button>
        )}

        {(status === "inactive" || status === "cancelled") && (
          <Button
            variant="primary"
            size="sm"
            loading={loading}
            onClick={handleSubscribe}
            className="w-full"
          >
            {status === "cancelled" ? "Resubscribe — $4.99/mo" : "Subscribe — $4.99/mo"}
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
            Update Payment
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
