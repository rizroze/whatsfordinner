"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useT } from "@/lib/i18n/context";

export default function CheckoutPage() {
  return (
    <Suspense>
      <CheckoutRedirect />
    </Suspense>
  );
}

function CheckoutRedirect() {
  const router = useRouter();
  const { t, locale } = useT();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "monthly";
  const [error, setError] = useState("");

  useEffect(() => {
    async function startCheckout() {
      try {
        const res = await fetch("/api/lemonsqueezy/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ plan }),
        });
        const data = await res.json();

        if (data.url) {
          window.location.href = data.url;
        } else {
          // Stripe not configured — go to onboarding as fallback
          setError(t("checkout.settingUp"));
          setTimeout(() => router.push("/onboarding"), 2000);
        }
      } catch {
        setError(t("checkout.error"));
        setTimeout(() => router.push("/onboarding"), 2000);
      }
    }

    startCheckout();
  }, [plan, router, locale, t]);

  return (
    <div className="min-h-screen bg-[#FFFBF5] flex items-center justify-center">
      <div className="text-center">
        <h1 className="sr-only">{t("checkout.srTitle")}</h1>
        {error ? (
          <p className="text-sm text-stone-500">{error}</p>
        ) : (
          <>
            <div className="w-6 h-6 border-2 border-orange-300 border-t-orange-500 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm text-stone-500">{t("checkout.redirecting")}</p>
          </>
        )}
      </div>
    </div>
  );
}
