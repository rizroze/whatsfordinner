"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";

interface PromoCode {
  code: string;
  current_uses: number;
  max_uses: number;
}

export function ReferralCodes() {
  const [codes, setCodes] = useState<PromoCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/referral/codes")
      .then((res) => res.json())
      .then((data) => {
        if (data.codes) setCodes(data.codes);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  function copyLink(code: string) {
    const url = `${window.location.origin}/redeem?code=${code}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(code);
      setTimeout(() => setCopied(null), 2000);
    });
  }

  if (loading) return null;
  if (codes.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <h3 className="text-sm font-semibold text-stone-700">Invite Friends</h3>
      </CardHeader>
      <CardContent className="space-y-3 pb-5">
        <p className="text-xs text-stone-500">
          Share these codes with friends. Each gives 1 month free.
        </p>
        <div className="space-y-2">
          {codes.map((c) => {
            const used = c.current_uses >= c.max_uses;
            return (
              <div
                key={c.code}
                className="flex items-center justify-between gap-2 px-3 py-2 bg-stone-50 rounded-lg"
              >
                <code className={`text-xs font-mono ${used ? "text-stone-400 line-through" : "text-stone-700"}`}>
                  {c.code}
                </code>
                {used ? (
                  <span className="text-xs text-stone-400">Used</span>
                ) : (
                  <button
                    onClick={() => copyLink(c.code)}
                    className="text-xs font-medium text-orange-500 hover:text-orange-600 transition-colors duration-200 shrink-0"
                  >
                    {copied === c.code ? "Copied!" : "Copy link"}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
