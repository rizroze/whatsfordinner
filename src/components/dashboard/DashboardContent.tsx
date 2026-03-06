"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n/context";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { SubscribeButton } from "./SubscribeButton";

interface DashboardHeaderProps {
  email: string;
}

export function DashboardHeader({ email }: DashboardHeaderProps) {
  const { t } = useT();

  return (
    <div className="flex items-center gap-3">
      <Link
        href="/"
        className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-xl flex items-center justify-center transition-colors shrink-0"
      >
        <span className="text-2xl leading-none" style={{ filter: "brightness(0) invert(1)" }}>🍴</span>
      </Link>
      <div>
        <h1 className="text-lg sm:text-2xl font-semibold text-stone-800 tracking-tight">
          {t("dashboard.title")}
        </h1>
        <p className="text-xs sm:text-sm text-stone-500">{email}</p>
      </div>
    </div>
  );
}

export function DashboardHomeLink() {
  const { t } = useT();
  return (
    <Link
      href="/"
      className="text-sm text-stone-400 hover:text-orange-500 transition-colors duration-200"
    >
      {t("dashboard.home")}
    </Link>
  );
}

export function UpgradeBanner() {
  const { t } = useT();
  return (
    <div className="mb-8 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h3 className="font-semibold text-stone-800">
          {t("dashboard.upgradeBanner")}
        </h3>
        <p className="text-sm text-stone-600 mt-1">
          {t("dashboard.upgradeDesc")}
        </p>
      </div>
      <SubscribeButton label={t("dashboard.subscribeCta")} />
    </div>
  );
}

export function PastPlansHeading() {
  const { t } = useT();
  return (
    <h2 className="text-lg font-semibold text-stone-800 mb-4">
      {t("dashboard.pastPlans")}
    </h2>
  );
}

export function SetupCard() {
  const { t } = useT();
  return (
    <Card className="border-dashed border-2 border-stone-200 bg-[#FFFBF5]">
      <CardContent className="py-12 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-50 flex items-center justify-center text-2xl">
          🍽️
        </div>
        <h3 className="text-lg font-semibold text-stone-700 mb-2">
          {t("dashboard.setupTitle")}
        </h3>
        <p className="text-sm text-stone-500 mb-6 max-w-sm mx-auto">
          {t("dashboard.setupDesc")}
        </p>
        <a
          href="/onboarding"
          className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm transition-all duration-200"
        >
          {t("dashboard.getFreePlan")}
        </a>
      </CardContent>
    </Card>
  );
}

interface SettingsCardProps {
  hasProfile: boolean;
  isSubscribed: boolean;
  freeUsed: boolean;
}

export function SettingsCard({ hasProfile, isSubscribed, freeUsed }: SettingsCardProps) {
  const { t } = useT();

  return (
    <Card>
      <CardHeader>
        <h3 className="text-sm font-semibold text-stone-700">
          {hasProfile ? t("dashboard.quickSettings") : t("dashboard.getStarted")}
        </h3>
      </CardHeader>
      <CardContent>
        {hasProfile && !isSubscribed && freeUsed ? (
          <>
            <div className="flex items-center gap-2 mb-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-stone-400 shrink-0">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <p className="text-sm font-medium text-stone-700">
                {t("dashboard.prefsLocked")}
              </p>
            </div>
            <p className="text-sm text-stone-500 mb-3">
              {t("dashboard.prefsLockedDesc")}
            </p>
            <SubscribeButton
              label={`${t("dashboard.subscribeCta")} →`}
              variant="link"
            />
          </>
        ) : (
          <>
            <p className="text-sm text-stone-500 mb-3">
              {hasProfile
                ? t("dashboard.settingsDesc")
                : t("dashboard.settingsDescNoProfile")}
            </p>
            <Link
              href={hasProfile ? "/onboarding?edit=1" : "/onboarding"}
              className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors duration-200"
            >
              {hasProfile ? `${t("dashboard.editPrefsLink")} →` : `${t("dashboard.setupPrefsLink")} →`}
            </Link>
          </>
        )}
      </CardContent>
    </Card>
  );
}
