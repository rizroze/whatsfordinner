import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWeekOf(date: Date = new Date()): string {
  // Get the most recent Sunday
  const d = new Date(date);
  d.setDate(d.getDate() - d.getDay());
  return d.toISOString().split("T")[0];
}

export function formatWeekOf(weekOf: string): string {
  const date = new Date(weekOf + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function getAppUrl(): string {
  // .trim() guards against a stray trailing newline/whitespace in the env
  // var value (this exact class of bug already broke NEXT_PUBLIC_SUPABASE_URL
  // once) — an untrimmed URL here silently corrupts the List-Unsubscribe
  // header on every outbound email, and Resend rejects the whole send with
  // a 422 validation error since headers can't contain CR/LF characters.
  return (process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000").trim();
}
