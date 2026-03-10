"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const REASONS = [
  { value: "price", label: "It's too expensive" },
  { value: "not_using", label: "I'm not using it enough" },
  { value: "missing_feature", label: "Missing a feature I need" },
  { value: "found_alternative", label: "Found something else" },
  { value: "temporary", label: "Just taking a break" },
  { value: "other", label: "Other" },
];

export default function CancelPage() {
  const router = useRouter();
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCancel() {
    if (!reason) return;
    setLoading(true);
    try {
      // Save feedback
      await fetch("/api/cancel-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reason }),
      });
      // Redirect to billing portal to complete cancellation
      const res = await fetch("/api/lemonsqueezy/portal", { method: "POST" });
      const data = await res.json();
      if (data.url) { window.location.href = data.url; return; }
    } catch {}
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#FFFBF5] flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mx-auto">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-stone-800">Before you go...</h1>
          <p className="text-sm text-stone-500">
            We&apos;re sorry to see you leave. Your feedback helps us improve.
          </p>
        </div>

        {/* Reason picker */}
        <div className="bg-white rounded-2xl border border-stone-100 p-5 space-y-3">
          <p className="text-sm font-semibold text-stone-700">Why are you cancelling?</p>
          <div className="space-y-2">
            {REASONS.map((r) => (
              <button
                key={r.value}
                type="button"
                onClick={() => setReason(r.value)}
                className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-200 ${
                  reason === r.value
                    ? "border-orange-400 bg-orange-50 text-orange-700 font-medium"
                    : "border-stone-200 text-stone-600 hover:border-stone-300"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* Save nudge for price objection */}
        {reason === "price" && (
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 text-center space-y-2">
            <p className="text-sm font-semibold text-stone-800">Switch to yearly instead?</p>
            <p className="text-sm text-stone-500">$5/mo — save 37% vs monthly, same plan every Sunday.</p>
            <Link
              href="/dashboard"
              className="inline-block text-sm font-semibold text-orange-600 hover:text-orange-700"
            >
              Go back and switch to yearly &rarr;
            </Link>
          </div>
        )}

        {/* Actions */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={handleCancel}
            disabled={!reason || loading}
            className="w-full py-3 rounded-full border border-stone-300 text-sm font-semibold text-stone-600 hover:border-stone-400 hover:text-stone-800 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? "Redirecting..." : "Continue to cancel"}
          </button>
          <Link
            href="/dashboard"
            className="block w-full py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold text-center transition-colors duration-200"
          >
            Never mind, keep my subscription
          </Link>
        </div>
      </div>
    </div>
  );
}
