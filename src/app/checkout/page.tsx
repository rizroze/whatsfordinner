"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function CheckoutPage() {
  return (
    <Suspense>
      <CheckoutRedirect />
    </Suspense>
  );
}

function CheckoutRedirect() {
  const router = useRouter();
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
          setError("Payment system is being set up. Redirecting...");
          setTimeout(() => router.push("/onboarding"), 2000);
        }
      } catch {
        setError("Something went wrong. Redirecting...");
        setTimeout(() => router.push("/onboarding"), 2000);
      }
    }

    startCheckout();
  }, [plan, router]);

  return (
    <div className="min-h-screen bg-[#FFFBF5] flex items-center justify-center">
      <div className="text-center">
        {error ? (
          <p className="text-sm text-stone-500">{error}</p>
        ) : (
          <>
            <div className="w-6 h-6 border-2 border-orange-300 border-t-orange-500 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm text-stone-500">Redirecting to payment...</p>
          </>
        )}
      </div>
    </div>
  );
}
