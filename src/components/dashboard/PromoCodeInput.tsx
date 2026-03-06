"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useT } from "@/lib/i18n/context";

export function PromoCodeInput() {
  const { t } = useT();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; ok: boolean } | null>(null);
  const [expanded, setExpanded] = useState(false);

  async function handleRedeem() {
    if (!code.trim()) return;
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/promo/redeem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code.trim() }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setMessage({ text: data.message || "Activated!", ok: true });
        setCode("");
        // Reload after short delay so dashboard reflects new status
        setTimeout(() => window.location.reload(), 1500);
      } else {
        setMessage({ text: data.error || "Invalid code", ok: false });
      }
    } catch {
      setMessage({ text: "Something went wrong", ok: false });
    }

    setLoading(false);
  }

  if (!expanded) {
    return (
      <button
        onClick={() => setExpanded(true)}
        className="text-sm text-stone-400 hover:text-orange-500 transition-colors duration-200"
      >
        {t("dashboard.havePromo")}
      </button>
    );
  }

  return (
    <Card>
      <CardHeader>
        <h3 className="text-sm font-semibold text-stone-700">{t("dashboard.promoCode")}</h3>
      </CardHeader>
      <CardContent className="space-y-3 pb-5">
        <div className="flex gap-2">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            placeholder="DINNER-XXXX-XXXX"
            className="flex-1 min-w-0 px-3 py-2 text-sm border border-stone-200 rounded-lg bg-white text-stone-800 placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition-all duration-200"
            onKeyDown={(e) => e.key === "Enter" && handleRedeem()}
          />
          <Button
            variant="primary"
            size="sm"
            loading={loading}
            onClick={handleRedeem}
            disabled={!code.trim()}
          >
            {t("dashboard.apply")}
          </Button>
        </div>
        {message && (
          <p className={`text-xs ${message.ok ? "text-green-600" : "text-red-500"}`}>
            {message.text}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
