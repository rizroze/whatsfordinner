"use client";

import { useState } from "react";
import Link from "next/link";

export default function FeedbackPage() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (message.trim().length < 5) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message.trim(), email: email.trim() || undefined }),
      });

      if (!res.ok) {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("sent");
    } catch {
      setErrorMsg("Could not send. Check your connection.");
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <nav className="max-w-xl mx-auto px-6 py-6">
        <Link
          href="/"
          className="text-sm text-stone-500 hover:text-orange-500 transition-colors"
        >
          &larr; Back to home
        </Link>
      </nav>

      <main className="max-w-xl mx-auto px-6 pb-20">
        <h1 className="text-2xl font-bold text-stone-900 mb-2">Send us feedback</h1>
        <p className="text-sm text-stone-500 mb-8">
          Bug, idea, or just a thought — we read everything.
        </p>

        {status === "sent" ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
            <p className="text-green-800 font-semibold mb-1">Thanks for your feedback!</p>
            <p className="text-green-600 text-sm">We'll take a look.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1.5">
                Your message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What's on your mind?"
                maxLength={2000}
                rows={5}
                required
                className="w-full px-4 py-3 text-sm text-stone-800 bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 resize-none transition-shadow placeholder:text-stone-400"
              />
              <p className="text-xs text-stone-400 mt-1 text-right">{message.length}/2000</p>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1.5">
                Email <span className="text-stone-400 font-normal">(optional — if you want a reply)</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 text-sm text-stone-800 bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition-shadow placeholder:text-stone-400"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending" || message.trim().length < 5}
              className="w-full py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-full transition-colors"
            >
              {status === "sending" ? "Sending..." : "Send feedback"}
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
