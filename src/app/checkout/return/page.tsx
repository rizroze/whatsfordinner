"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const MESSAGES = [
  "Confirming your payment...",
  "Activating your subscription...",
  "Setting up your account...",
  "Almost there...",
];

export default function CheckoutReturnPage() {
  const router = useRouter();
  const [msgIndex, setMsgIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    // Cycle through messages
    const msgInterval = setInterval(() => {
      setMsgIndex((i) => Math.min(i + 1, MESSAGES.length - 1));
    }, 4000);

    let attempts = 0;
    const maxAttempts = 15; // 30s total at 2s intervals

    const poll = setInterval(async () => {
      attempts++;
      try {
        const res = await fetch("/api/subscription-status");
        const { status } = await res.json();
        if (status === "active") {
          clearInterval(poll);
          clearInterval(msgInterval);
          router.replace("/dashboard");
          return;
        }
      } catch {
        // keep polling
      }
      if (attempts >= maxAttempts) {
        clearInterval(poll);
        clearInterval(msgInterval);
        setFailed(true);
      }
    }, 2000);

    return () => {
      clearInterval(poll);
      clearInterval(msgInterval);
    };
  }, [router]);

  if (failed) {
    return (
      <div className="min-h-screen bg-[#FFFBF5] flex items-center justify-center px-4">
        <div className="max-w-sm w-full text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-stone-800">Taking longer than expected</h1>
          <p className="text-sm text-stone-500">
            Your payment was likely successful. Head to your dashboard — if your plan isn't there yet, it'll appear within a minute.
          </p>
          <a
            href="/dashboard"
            className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-full text-sm hover:bg-orange-600 transition-colors"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFBF5] flex items-center justify-center px-4">
      <div className="max-w-sm w-full text-center space-y-6">
        {/* Spinner */}
        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto">
          <div className="w-8 h-8 border-3 border-orange-400 border-t-transparent rounded-full animate-spin" style={{ borderWidth: 3 }} />
        </div>

        <div className="space-y-2">
          <h1 className="text-xl font-bold text-stone-800">{MESSAGES[msgIndex]}</h1>
          <p className="text-sm text-stone-400">Don't close this tab</p>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2">
          {MESSAGES.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i <= msgIndex ? "bg-orange-400" : "bg-stone-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
