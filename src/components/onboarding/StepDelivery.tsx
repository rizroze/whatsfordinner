"use client";

import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n/context";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import type { StepProps } from "./StepHousehold";

const COMMON_TIMEZONES = [
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "America/Anchorage",
  "Pacific/Honolulu",
  "America/Phoenix",
  "America/Indiana/Indianapolis",
  "America/Detroit",
  "America/Boise",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "Europe/Riga",
  "Europe/Helsinki",
  "Europe/Istanbul",
  "Asia/Tokyo",
  "Asia/Shanghai",
  "Asia/Kolkata",
  "Australia/Sydney",
];


function formatTimezone(tz: string): string {
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      timeZoneName: "short",
    });
    const parts = formatter.formatToParts(new Date());
    const tzName = parts.find((p) => p.type === "timeZoneName")?.value || tz;
    const city = tz.split("/").pop()?.replace(/_/g, " ") || tz;
    return `${city} (${tzName})`;
  } catch {
    return tz;
  }
}

export function StepDelivery({ data, onChange, isAuthenticated = false }: StepProps & { isAuthenticated?: boolean }) {
  const { t } = useT();

  const DAYS_OF_WEEK = [
    { value: "sunday", label: t("onboarding.delivery.sun") },
    { value: "monday", label: t("onboarding.delivery.mon") },
    { value: "tuesday", label: t("onboarding.delivery.tue") },
    { value: "wednesday", label: t("onboarding.delivery.wed") },
    { value: "thursday", label: t("onboarding.delivery.thu") },
    { value: "friday", label: t("onboarding.delivery.fri") },
    { value: "saturday", label: t("onboarding.delivery.sat") },
  ];

  const DAY_LABELS: Record<string, string> = {
    sunday: t("onboarding.delivery.sun"),
    monday: t("onboarding.delivery.mon"),
    tuesday: t("onboarding.delivery.tue"),
    wednesday: t("onboarding.delivery.wed"),
    thursday: t("onboarding.delivery.thu"),
    friday: t("onboarding.delivery.fri"),
    saturday: t("onboarding.delivery.sat"),
  };

  const selectedDayLabel = DAY_LABELS[data.delivery_day] || t("onboarding.delivery.sun");

  return (
    <div className="space-y-4 sm:space-y-5">
      <div className="text-center space-y-1">
        <h2 className="text-xl sm:text-2xl font-semibold text-stone-800">
          {isAuthenticated ? t("onboarding.delivery.title") : t("onboarding.delivery.sendTo")}
        </h2>
        <p className="text-stone-500 text-xs sm:text-sm">
          {isAuthenticated
            ? t("onboarding.delivery.subtitle")
            : "We\u2019ll send your 3-day meal plan with recipes and a grocery list."}
        </p>
      </div>

      {/* Day picker — only for authenticated/subscriber users */}
      {isAuthenticated && (
        <div className="space-y-2">
          <label className="text-sm font-medium text-stone-700">
            {t("onboarding.delivery.everyWeekOn")}
          </label>
          <div className="grid grid-cols-7 gap-1.5">
            {DAYS_OF_WEEK.map((day) => {
              const selected = data.delivery_day === day.value;
              return (
                <button
                  key={day.value}
                  type="button"
                  onClick={() => onChange({ delivery_day: day.value })}
                  className={cn(
                    "py-2.5 rounded-xl border text-sm font-medium transition-all duration-200",
                    "hover:border-orange-300",
                    selected
                      ? "border-orange-400 bg-orange-50 text-orange-700"
                      : "border-stone-200 bg-white text-stone-600",
                  )}
                >
                  {day.label}
                </button>
              );
            })}
          </div>
          {/* Confirmation note */}
          <p className="text-xs text-stone-400 text-center">
            {t("onboarding.delivery.confirmNote", { day: selectedDayLabel })}
          </p>
        </div>
      )}

      {/* Email */}
      <Input
        label={t("onboarding.delivery.sendTo")}
        type="email"
        placeholder={t("onboarding.delivery.emailPlaceholder")}
        value={data.delivery_email}
        onChange={(e) => onChange({ delivery_email: e.target.value })}
        required
      />

      {/* Timezone — visible for authenticated users, auto-detected silently for anonymous */}
      {isAuthenticated ? (
        <div className="space-y-1">
          <Select
            label={t("onboarding.delivery.timezone")}
            value={data.timezone}
            onChange={(e) => onChange({ timezone: e.target.value })}
          >
            {[...new Set([data.timezone, ...COMMON_TIMEZONES])].map((tz) => (
              <option key={tz} value={tz}>
                {formatTimezone(tz)}
              </option>
            ))}
          </Select>
          <p className="text-xs text-stone-400">
            {t("onboarding.delivery.timezoneHint")}
          </p>
        </div>
      ) : null}
    </div>
  );
}
