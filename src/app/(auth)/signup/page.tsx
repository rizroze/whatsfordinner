"use client";

import { Suspense, useState, useEffect, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { getAppUrl } from "@/lib/utils";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function SignUpPage() {
  return (
    <Suspense>
      <SignUpForm />
    </Suspense>
  );
}

function SignUpForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "monthly";
  const promoCode = searchParams.get("code");
  const redirectParam = searchParams.get("redirect");
  const hasPromo = !!promoCode;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);

  // Store promo code in localStorage so it survives auth redirects
  useEffect(() => {
    if (promoCode) {
      localStorage.setItem("wfd_promo_code", promoCode);
    }
  }, [promoCode]);

  async function redirectToCheckout() {
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
        router.push("/onboarding");
      }
    } catch {
      router.push("/onboarding");
    }
  }

  async function handleGoogleSignIn() {
    setGoogleLoading(true);
    setError("");

    try {
      const supabase = createClient();
      const appUrl = getAppUrl();

      // Promo users skip checkout — redirect to onboarding after auth
      const callbackUrl = hasPromo
        ? `${appUrl}/callback?redirect=/onboarding`
        : `${appUrl}/callback?plan=${plan}`;

      const { error: oauthError } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: callbackUrl,
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      });

      if (oauthError) {
        setError(oauthError.message);
        setGoogleLoading(false);
      }
      // Browser will redirect to Google — no need to do anything else
    } catch {
      setError("Something went wrong. Please try again.");
      setGoogleLoading(false);
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);

    try {
      const supabase = createClient();
      const appUrl = getAppUrl();

      const emailRedirectUrl = hasPromo
        ? `${appUrl}/callback?redirect=/onboarding`
        : `${appUrl}/callback?plan=${plan}`;

      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: emailRedirectUrl,
        },
      });

      if (signUpError) {
        setError(signUpError.message);
        setLoading(false);
        return;
      }

      // If session exists, email confirmation is disabled — redirect immediately
      if (signUpData.session) {
        if (hasPromo) {
          router.push("/onboarding");
        } else if (redirectParam) {
          router.push(redirectParam);
        } else {
          await redirectToCheckout();
        }
        return;
      }

      // No session = email confirmation required — show "check your email"
      setCheckEmail(true);
      setLoading(false);
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#FFFBF5] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-semibold text-stone-900 tracking-tight">
            What&apos;s For Dinner?
          </Link>
          <p className="mt-2 text-stone-500 text-sm">
            Create an account to get weekly plans
          </p>
        </div>

        {checkEmail ? (
          <Card className="shadow-md">
            <CardContent className="flex flex-col items-center gap-4 py-8">
              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                </svg>
              </div>
              <h1 className="text-xl font-semibold text-stone-900">Check your email</h1>
              <p className="text-sm text-stone-500 text-center max-w-xs">
                We sent a confirmation link to <strong className="text-stone-700">{email}</strong>. Click it to activate your account{hasPromo ? " and claim your gift" : ""}.
              </p>
              <p className="text-xs text-stone-400 text-center">
                Don&apos;t see it? Check your spam folder.
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card className="shadow-md">
            <CardHeader>
              <h1 className="text-xl font-semibold text-stone-900">
                Create Account
              </h1>
            </CardHeader>

            <CardContent className="flex flex-col gap-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
                  {error}
                </div>
              )}

              {/* Google OAuth */}
              <Button
                type="button"
                variant="secondary"
                size="lg"
                loading={googleLoading}
                onClick={handleGoogleSignIn}
                className="w-full"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" className="mr-2 shrink-0">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </Button>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-stone-200" />
                <span className="text-xs text-stone-400">or</span>
                <div className="flex-1 h-px bg-stone-200" />
              </div>

              {/* Email form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />

                <Input
                  label="Password"
                  type="password"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="new-password"
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={loading}
                  className="w-full"
                >
                  Create Account
                </Button>
              </form>
            </CardContent>

            <CardFooter>
              <p className="text-sm text-stone-500 text-center w-full">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}
