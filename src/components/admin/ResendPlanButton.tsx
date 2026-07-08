"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function ResendPlanButton({ userId }: { userId: string }) {
  const router = useRouter();
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function handleClick() {
    setState("loading");
    setMessage("");
    try {
      const res = await fetch("/api/admin/resend-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      const data = await res.json();
      if (!res.ok) {
        setState("error");
        setMessage(data.error || "Failed");
        return;
      }
      setState("done");
      setMessage(data.mode === "resent" ? "Resent existing plan" : "Generated + sent");
      router.refresh();
    } catch {
      setState("error");
      setMessage("Network error");
    }
  }

  if (state === "done") {
    return <span className="text-[10px] font-semibold text-green-700 bg-green-50 px-2 py-1 rounded-full">✓ {message}</span>;
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <button
        type="button"
        onClick={handleClick}
        disabled={state === "loading"}
        className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50 transition-colors"
      >
        {state === "loading" ? "Sending…" : "Generate & Send"}
      </button>
      {state === "error" && (
        <span className="text-[9px] text-red-600 max-w-[140px] text-right">{message}</span>
      )}
    </div>
  );
}
