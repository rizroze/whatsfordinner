"use client";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import type { StepProps } from "./StepHousehold";

const DAYS_OF_WEEK = [
  { value: "sunday", label: "Sun" },
  { value: "monday", label: "Mon" },
  { value: "tuesday", label: "Tue" },
  { value: "wednesday", label: "Wed" },
  { value: "thursday", label: "Thu" },
  { value: "friday", label: "Fri" },
  { value: "saturday", label: "Sat" },
];

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

export function StepDelivery({ data, onChange }: StepProps) {
  return (
    <div className="space-y-5">
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-semibold text-stone-800">
          When should we send it?
        </h2>
        <p className="text-stone-500 text-sm">
          Pick a day and we&apos;ll email your meal plan every week.
        </p>
      </div>

      {/* Day picker — buttons */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-stone-700">
          Every week on
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
      </div>

      {/* Email */}
      <Input
        label="Send to"
        type="email"
        placeholder="you@example.com"
        value={data.delivery_email}
        onChange={(e) => onChange({ delivery_email: e.target.value })}
      />

      {/* Timezone */}
      <div className="space-y-1">
        <Select
          label="Timezone"
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
          Auto-detected. Change if needed.
        </p>
      </div>
    </div>
  );
}
