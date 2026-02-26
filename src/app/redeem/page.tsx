"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

function RedeemFlow() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get("code") || "";

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [needsAuth, setNeedsAuth] = useState(false);

  useEffect(() => {
    if (!code) return;

    async function redeem() {
      setStatus("loading");
      try {
        const res = await fetch("/api/promo/redeem", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        });
        const data = await res.json();

        if (res.status === 401) {
          // Not logged in — need to sign up first
          setNeedsAuth(true);
          setStatus("idle");
          return;
        }

        if (res.ok && data.success) {
          setStatus("success");
          setMessage(data.message || "You're in! 1 month free.");
        } else {
          setStatus("error");
          setMessage(data.error || "This code didn't work.");
        }
      } catch {
        setStatus("error");
        setMessage("Something went wrong. Try again.");
      }
    }

    redeem();
  }, [code]);

  return (
    <div className="min-h-screen bg-[#FFFBF5] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl leading-none" style={{ filter: "brightness(0) invert(1)" }}>🍴</span>
        </div>

        {!code && (
          <>
            <h1 className="text-2xl font-bold text-stone-800 mb-2">
              Enter your promo code
            </h1>
            <p className="text-sm text-stone-500 mb-6">
              Paste your code on the dashboard after signing in.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm transition-all duration-200"
            >
              Create Account
            </Link>
          </>
        )}

        {code && needsAuth && (
          <>
            <h1 className="text-2xl font-bold text-stone-800 mb-2">
              You&apos;ve been invited!
            </h1>
            <p className="text-sm text-stone-500 mb-2">
              A friend gave you 1 month of free meal plans.
            </p>
            <div className="inline-block px-4 py-2 bg-stone-50 rounded-lg mb-6">
              <code className="text-sm font-mono text-stone-700">{code}</code>
            </div>
            <p className="text-xs text-stone-400 mb-6">
              Create an account, then we&apos;ll activate your free month.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href={`/signup?code=${encodeURIComponent(code)}`}
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm transition-all duration-200"
              >
                Create Account — Free
              </Link>
              <Link
                href={`/login?code=${encodeURIComponent(code)}`}
                className="text-sm text-stone-500 hover:text-orange-500 transition-colors duration-200"
              >
                Already have an account? Sign in
              </Link>
            </div>
          </>
        )}

        {status === "loading" && (
          <>
            <div className="w-6 h-6 border-2 border-orange-300 border-t-orange-500 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm text-stone-500">Activating your code...</p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-stone-800 mb-2">
              You&apos;re in!
            </h1>
            <p className="text-sm text-stone-500 mb-6">{message}</p>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm transition-all duration-200"
            >
              Go to Dashboard
            </Link>
          </>
        )}

        {status === "error" && (
          <>
            <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-stone-800 mb-2">
              Code didn&apos;t work
            </h1>
            <p className="text-sm text-stone-500 mb-6">{message}</p>
            <Link
              href="/"
              className="text-sm text-orange-500 hover:text-orange-600 transition-colors duration-200"
            >
              Back to home
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default function RedeemPage() {
  return (
    <Suspense>
      <RedeemFlow />
    </Suspense>
  );
}
