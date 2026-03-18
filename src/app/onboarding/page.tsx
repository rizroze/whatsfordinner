"use client";

import { Suspense, useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { LanguagePicker } from "@/components/ui/LanguagePicker";
import { cn } from "@/lib/utils";
import { useT, LANGUAGES, type Locale } from "@/lib/i18n/context";
import { generateFingerprint } from "@/lib/fingerprint";
import { createClient } from "@/lib/supabase/client";
import { track } from "@vercel/analytics";
import {
  StepHousehold,
  type OnboardingFormData,
} from "@/components/onboarding/StepHousehold";
import { StepBudget } from "@/components/onboarding/StepBudget";
import { StepDietary } from "@/components/onboarding/StepDietary";
import { StepPreferences } from "@/components/onboarding/StepPreferences";
import { StepDelivery } from "@/components/onboarding/StepDelivery";

const STEP_KEYS = [
  "onboarding.steps.household",
  "onboarding.steps.budget",
  "onboarding.steps.dietary",
  "onboarding.steps.preferences",
  "onboarding.steps.delivery",
];

const INITIAL_DATA: OnboardingFormData = {
  household_size: 2,
  has_kids: false,
  kids_ages: [],
  weekly_budget: "moderate",
  nutrition_goal: "",
  age_range: "",
  dietary_restrictions: [],
  allergies: [],
  personal_note: "",
  cuisine_preferences: [],
  cooking_skill: "intermediate",
  max_cook_time: 45,
  meals_per_day: 3,
  include_snacks: false,
  servings_per_meal: 2,
  delivery_email: "",
  delivery_day: "sunday",
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
};

export default function OnboardingPage() {
  return (
    <Suspense>
      <OnboardingContent />
    </Suspense>
  );
}

function OnboardingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isEdit = searchParams.get("edit") === "1";
  const { t, setLocale } = useT();

  // Apply language from URL param (e.g. /onboarding?lang=tr from pSEO pages)
  const langParam = searchParams.get("lang");
  useEffect(() => {
    if (langParam && langParam in LANGUAGES) {
      setLocale(langParam as Locale);
    }
  }, [langParam, setLocale]);
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<OnboardingFormData>(INITIAL_DATA);
  const [loading, setLoading] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [blocked, setBlocked] = useState(false);
  const [subscribing, setSubscribing] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profileLoading, setProfileLoading] = useState(isEdit);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startedAtRef = useRef(Date.now());

  // Check if user is authenticated + load profile in edit mode
  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      // Anonymous user who already used their free plan — show banner but let them browse
      // Skip block if they have a promo code (they're redeeming a gift)
      const hasPromoCode = !!localStorage.getItem("wfd_promo_code");
      if (!user && !isEdit && !hasPromoCode && localStorage.getItem("wfd_free_used") === "1") {
        setBlocked(true);
      }
      if (!user) return;
      setIsAuthenticated(true);
      // Pre-fill email from auth
      if (user.email) {
        setData((prev) => ({ ...prev, delivery_email: prev.delivery_email || user.email! }));
      }
      // Load profile once — used for both block check and edit mode pre-fill
      try {
        const res = await fetch("/api/profile");
        if (res.ok) {
          const { profile } = await res.json();
          // Block check: signed-in user who already completed onboarding (not in edit mode)
          if (!isEdit && !hasPromoCode && profile?.onboarding_completed) {
            setBlocked(true);
          }
          // Edit mode: pre-fill form with saved profile
          if (isEdit && profile) {
            setData((prev) => ({
              ...prev,
              household_size: profile.household_size ?? prev.household_size,
              has_kids: profile.has_kids ?? prev.has_kids,
              kids_ages: profile.kids_ages?.length ? profile.kids_ages : prev.kids_ages,
              weekly_budget: profile.weekly_budget ?? prev.weekly_budget,
              age_range: profile.age_range || prev.age_range,
              nutrition_goal: profile.nutrition_goal || prev.nutrition_goal,
              dietary_restrictions: profile.dietary_restrictions?.length ? profile.dietary_restrictions : prev.dietary_restrictions,
              allergies: profile.allergies?.length ? profile.allergies : prev.allergies,
              personal_note: profile.personal_note || prev.personal_note,
              cuisine_preferences: profile.cuisine_preferences?.length ? profile.cuisine_preferences : prev.cuisine_preferences,
              cooking_skill: profile.cooking_skill ?? prev.cooking_skill,
              max_cook_time: profile.max_cook_time ?? prev.max_cook_time,
              meals_per_day: profile.meals_per_day ?? prev.meals_per_day,
              include_snacks: profile.include_snacks ?? prev.include_snacks,
              servings_per_meal: profile.servings_per_meal ?? prev.servings_per_meal,
              delivery_email: profile.delivery_email || user.email || prev.delivery_email,
              delivery_day: profile.delivery_day ?? prev.delivery_day,
              timezone: profile.timezone ?? prev.timezone,
            }));
          }
        } else if (isEdit) {
          setError("Failed to load your preferences. Please try again.");
        }
      } catch {
        if (isEdit) setError("Failed to load your preferences. Please try again.");
      } finally {
        if (isEdit) setProfileLoading(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const COOKING_KEYS = [
    "onboarding.cooking.msg1", "onboarding.cooking.msg2", "onboarding.cooking.msg3",
    "onboarding.cooking.msg4", "onboarding.cooking.msg5", "onboarding.cooking.msg6",
    "onboarding.cooking.msg7", "onboarding.cooking.msg8", "onboarding.cooking.msg9",
    "onboarding.cooking.msg10",
  ];

  const cookingMessage = t(COOKING_KEYS[Math.min(
    Math.floor(elapsed / 4),
    COOKING_KEYS.length - 1,
  )]);

  useEffect(() => {
    if (loading) {
      setElapsed(0);
      timerRef.current = setInterval(() => setElapsed((s) => s + 1), 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [loading]);

  function handleChange(updates: Partial<OnboardingFormData>) {
    setData((prev) => ({ ...prev, ...updates }));
  }

  function handleBack() {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  }

  function handleNext() {
    // Step 3 (Dietary) — require age range and goal for personalization
    if (currentStep === 2) {
      if (!data.age_range) {
        setError("Pick your age range so we can tailor portions and nutrition.");
        return;
      }
      if (!data.nutrition_goal) {
        setError("Select a goal — it helps us balance your meals.");
        return;
      }
    }
    setError(null);

    if (currentStep < 4) {
      track("onboarding_step_completed", { step: currentStep + 1, step_name: STEP_KEYS[currentStep] });
      setCurrentStep((prev) => prev + 1);
    } else {
      // Require email on delivery step
      if (!data.delivery_email?.trim()) {
        setError("Please enter your email address to receive your meal plan.");
        return;
      }
      track("onboarding_completed", { authenticated: isAuthenticated });
      handleSubmit();
    }
  }

  async function handleSubmit() {
    setLoading(true);
    setError(null);

    try {
      // Edit mode: save profile and go back to dashboard
      if (isEdit && isAuthenticated) {
        const editRes = await fetch("/api/profile", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data,
            servings_per_meal: data.household_size,
            onboarding_completed: true,
          }),
        });
        if (!editRes.ok) {
          const errData = await editRes.json().catch(() => ({ error: "Failed to save preferences" }));
          throw new Error(errData.error || "Failed to save preferences");
        }
        router.push("/dashboard");
        return;
      }

      // If there's already a cached plan, go straight to preview
      const cached = localStorage.getItem("wfd_free_plan");
      if (cached) {
        router.push("/preview");
        return;
      }

      // Save profile (required for authenticated plan generation)
      if (isAuthenticated) {
        const profileRes = await fetch("/api/profile", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data,
            servings_per_meal: data.household_size,
            onboarding_completed: true,
          }),
        });

        if (!profileRes.ok) {
          const errData = await profileRes.json().catch(() => ({ error: "Failed to save profile" }));
          throw new Error(errData.error || "Failed to save profile");
        }
      }

      localStorage.setItem("wfd_preferences", JSON.stringify(data));

      // Authenticated users: use the proper generate-plan endpoint
      if (isAuthenticated) {
        // Auto-redeem promo code FIRST if one was stored (from /redeem flow)
        // This activates the subscription before generate-plan checks for it
        const promoCode = localStorage.getItem("wfd_promo_code");
        if (promoCode) {
          try {
            const promoRes = await fetch("/api/promo/redeem", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ code: promoCode }),
            });
            if (!promoRes.ok) {
              const promoErr = await promoRes.json().catch(() => ({}));
              console.warn("Promo redemption failed:", promoErr.error || promoRes.status);
              setError(promoErr.error || "Promo code could not be redeemed. You can try again from the dashboard.");
            }
          } catch {
            console.warn("Promo redemption network error");
          } finally {
            localStorage.removeItem("wfd_promo_code");
          }
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 120_000);

        const res = await fetch("/api/generate-plan", {
          method: "POST",
          signal: controller.signal,
        });

        clearTimeout(timeout);

        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.error || "Failed to generate plan");
        }

        router.push("/dashboard");
        return;
      }

      // Anonymous: check device-level block
      if (localStorage.getItem("wfd_free_used") === "1") {
        setBlocked(true);
        throw new Error("block");
      }

      // Generate the free 1-day plan (anonymous only)
      const fingerprint = await generateFingerprint();

      const submitData = {
        ...data,
        servings_per_meal: data.household_size,
        _fingerprint: fingerprint,
        _t: startedAtRef.current,
        _email: "",
      };

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 120_000);

      const res = await fetch("/api/generate-free-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!res.ok) {
        const errData = await res.json();
        if (res.status === 403 || res.status === 429) {
          localStorage.setItem("wfd_free_used", "1");
          setBlocked(true);
          throw new Error("block");
        }
        throw new Error(errData.error || "Failed to generate plan");
      }

      const { plan, weekOf } = await res.json();

      localStorage.setItem("wfd_free_used", "1");
      localStorage.setItem(
        "wfd_free_plan",
        JSON.stringify({ plan, weekOf, generatedAt: Date.now() })
      );

      router.push("/preview");
    } catch (err) {
      if (err instanceof Error && err.message === "block") {
        // blocked state is already set
      } else {
        setError(err instanceof Error ? err.message : "Something went wrong");
      }
      setLoading(false);
    }
  }

  const isLastStep = currentStep === 4;

  return (
    <div className="min-h-screen bg-[#FFF8F2]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 relative">
          <Button
            asChild
            size="icon"
            className="absolute left-0 top-0 w-10 h-10 rounded-xl"
            title="Back to home"
          >
            <Link href="/">
              <span className="text-2xl leading-none" style={{ filter: "brightness(0) invert(1)" }}>🍴</span>
            </Link>
          </Button>
          <div className="absolute right-0 top-0">
            <LanguagePicker />
          </div>
          <Link
            href="/"
            className="text-sm font-semibold text-stone-400 hover:text-orange-500 transition-colors"
          >
            What&apos;s For Dinner
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold text-stone-800 mb-0.5 sm:mb-1 mt-2 sm:mt-3">
            {t("onboarding.title")}
          </h1>
          <p className="text-stone-500 text-xs sm:text-sm">
            {t("onboarding.subtitle")}
          </p>
        </div>

        {/* Progress indicator */}
        <div className="grid grid-cols-5 mb-4 sm:mb-6 max-w-md mx-auto">
          {STEP_KEYS.map((key, index) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                if (blocked || index < currentStep) setCurrentStep(index);
              }}
              disabled={!blocked && index > currentStep}
              className="flex flex-col items-center gap-1.5 group"
            >
              <div
                className={cn(
                  "w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300",
                  index === currentStep
                    ? "bg-orange-500 text-white shadow-md shadow-orange-200 scale-110"
                    : index < currentStep
                      ? "bg-orange-200 text-orange-700 cursor-pointer group-hover:bg-orange-300"
                      : blocked
                        ? "bg-stone-200 text-stone-500 cursor-pointer group-hover:bg-stone-300"
                        : "bg-stone-100 text-stone-400"
                )}
              >
                {index < currentStep ? (
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              <span
                className={cn(
                  "text-[10px] sm:text-xs font-medium transition-colors duration-200",
                  index === currentStep
                    ? "text-orange-600"
                    : index < currentStep
                      ? "text-stone-500"
                      : "text-stone-400"
                )}
              >
                {t(key)}
              </span>
            </button>
          ))}
        </div>

        {/* Step content */}
        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4 sm:p-8 mb-4 sm:mb-6">
          {profileLoading ? (
            <div className="py-12 text-center">
              <div className="w-6 h-6 border-2 border-orange-400 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-sm text-stone-400">{t("onboarding.loadingPrefs")}</p>
            </div>
          ) : (
            <>
              {currentStep === 0 && (
                <StepHousehold data={data} onChange={handleChange} />
              )}
              {currentStep === 1 && (
                <StepBudget data={data} onChange={handleChange} />
              )}
              {currentStep === 2 && (
                <StepDietary data={data} onChange={handleChange} />
              )}
              {currentStep === 3 && (
                <StepPreferences data={data} onChange={handleChange} />
              )}
              {currentStep === 4 && (
                <StepDelivery data={data} onChange={handleChange} />
              )}
            </>
          )}
        </div>

        {/* Blocked banner — free plan already used */}
        {blocked && (
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 sm:p-5 mb-4 sm:mb-6 text-center space-y-2.5">
            {isAuthenticated ? (
              <>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-sm font-bold text-stone-800">
                    {t("onboarding.blocked.alreadyCreatedTitle")}
                  </h3>
                </div>
                <p className="text-xs text-stone-500">
                  {t("onboarding.blocked.alreadyCreatedSubtitle")}
                </p>
                <div className="flex flex-row gap-2 justify-center">
                  <Button size="sm" asChild>
                    <Link href="/dashboard">
                      {t("onboarding.blocked.viewPlan")}
                    </Link>
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    loading={subscribing}
                    onClick={async () => {
                      setSubscribing(true);
                      try {
                        const res = await fetch("/api/lemonsqueezy/checkout", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ plan: "monthly" }),
                        });
                        const d = await res.json();
                        if (d.url) { window.location.href = d.url; return; }
                      } catch {}
                      setSubscribing(false);
                    }}
                  >
                    {t("onboarding.blocked.monthly")}
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-4">
                  {/* Friendly headline — not a wall */}
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl">🎉</span>
                    <h3 className="text-sm font-bold text-stone-800">
                      You liked your free plan!
                    </h3>
                  </div>
                  <p className="text-xs text-stone-500 max-w-sm mx-auto">
                    Your 3-day plan showed you how it works. Upgrade to get a full 7-day plan with recipes and a grocery list every week.
                  </p>

                  {/* What you get — quick visual */}
                  <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto text-left">
                    <div className="flex items-center gap-1.5 text-xs text-stone-600">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                      7-day plans
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-stone-600">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                      Full recipes
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-stone-600">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                      Grocery list
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-stone-600">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                      Every Sunday
                    </div>
                  </div>

                  {/* Price comparison */}
                  <div className="bg-white rounded-xl border border-stone-100 p-3 max-w-xs mx-auto">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-stone-500">DoorDash tonight</span>
                      <span className="text-xs font-bold text-red-500 line-through">~$25</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-stone-500">Full week of meals</span>
                      <span className="text-xs font-bold text-green-600">$7.99/mo</span>
                    </div>
                  </div>

                  {/* CTA buttons */}
                  <div className="flex flex-col gap-2 max-w-xs mx-auto">
                    <Button
                      size="sm"
                      loading={subscribing}
                      onClick={async () => {
                        setSubscribing(true);
                        try {
                          const res = await fetch("/api/lemonsqueezy/checkout", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ plan: "yearly" }),
                          });
                          const d = await res.json();
                          if (d.url) { window.location.href = d.url; return; }
                        } catch {}
                        setSubscribing(false);
                      }}
                    >
                      Start for $5/mo (yearly, save 37%)
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      loading={subscribing}
                      onClick={async () => {
                        setSubscribing(true);
                        try {
                          const res = await fetch("/api/lemonsqueezy/checkout", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ plan: "monthly" }),
                          });
                          const d = await res.json();
                          if (d.url) { window.location.href = d.url; return; }
                        } catch {}
                        setSubscribing(false);
                      }}
                    >
                      Or $7.99/mo monthly
                    </Button>
                  </div>

                  {/* View existing plan link */}
                  <div className="flex flex-col items-center gap-1">
                    <Link href="/preview" className="text-xs text-orange-500 hover:text-orange-600 font-medium">
                      View your free plan &rarr;
                    </Link>
                    <p className="text-[10px] text-stone-400">
                      <Link href="/login" className="text-orange-500 hover:text-orange-600 font-medium">
                        Sign in
                      </Link>
                      {" "}or{" "}
                      <Link href="/signup" className="text-orange-500 hover:text-orange-600 font-medium">
                        sign up
                      </Link>
                      {" "}to manage your account
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mb-4 bg-orange-50 border border-orange-200 text-orange-700 text-sm rounded-xl px-4 py-3 text-center">
            {error}
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <div>
            {currentStep > 0 && (
              <Button
                variant="secondary"
                onClick={handleBack}
                disabled={loading}
              >
                {t("common.back")}
              </Button>
            )}
          </div>
          {blocked && isLastStep ? (
            <Button
              variant="primary"
              size="lg"
              loading={subscribing}
              onClick={async () => {
                setSubscribing(true);
                try {
                  const res = await fetch("/api/lemonsqueezy/checkout", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ plan: "monthly" }),
                  });
                  const d = await res.json();
                  if (d.url) { window.location.href = d.url; return; }
                } catch {}
                setSubscribing(false);
              }}
            >
              Subscribe — $7.99/mo
            </Button>
          ) : (
            <Button
              variant="primary"
              size="lg"
              onClick={handleNext}
              loading={loading}
              disabled={blocked && isLastStep}
              className="transition-all duration-500 ease-in-out"
              style={{ minWidth: loading ? 260 : undefined }}
            >
              {isLastStep
                ? loading
                  ? <span className="inline-flex items-center gap-0">
                    {cookingMessage}
                    <span className="animated-dots ml-0.5">
                      <span>.</span><span>.</span><span>.</span>
                    </span>
                  </span>
                  : isEdit ? t("common.save") : t("onboarding.generate")
                : t("common.next")}
            </Button>
          )}
        </div>

        {/* Loading status */}
        {loading && (
          <div className="mt-4 text-center">
            <p className="text-xs text-stone-400 tabular-nums">
              {t("onboarding.loadingTime", { elapsed: String(elapsed) })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
