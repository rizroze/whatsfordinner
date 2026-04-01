"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useT } from "@/lib/i18n/context";

const STORAGE_KEY = "wfd_exit_shown";

export function ExitIntentPopup({ isSignedIn }: { isSignedIn: boolean }) {
  const { t } = useT();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [closing, setClosing] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    // Don't show for signed-in users or if already shown this session
    if (isSignedIn) return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const trigger = () => {
      if (triggered.current) return;
      triggered.current = true;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setShow(true);
    };

    // Desktop: mouse leaves viewport toward top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    // Mobile: after 45s on page
    const mobileTimer = setTimeout(() => {
      // Only trigger on mobile (no fine pointer = touch device)
      if (!window.matchMedia("(pointer: fine)").matches) {
        trigger();
      }
    }, 45000);

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, [isSignedIn]);

  const dismiss = () => {
    setClosing(true);
    setTimeout(() => setShow(false), 200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (email) params.set("email", email);
    router.push(`/onboarding${params.toString() ? `?${params}` : ""}`);
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-opacity duration-200 ${closing ? "opacity-0" : "opacity-100"}`}
      onClick={dismiss}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Modal */}
      <div
        className={`relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 sm:p-10 text-center transition-all duration-200 ${closing ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-stone-300 hover:text-stone-500 transition-colors"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Decorative emoji */}
        <div className="text-5xl mb-4">🍽️</div>

        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight whitespace-pre-line">
          {t("exitIntent.title")}
        </h2>

        <p className="mt-3 text-stone-500 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
          {t("exitIntent.subtitle")}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("exitIntent.emailPlaceholder")}
            className="w-full px-4 py-3 rounded-full border border-stone-200 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
            autoFocus
          />
          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            {t("exitIntent.cta")}
          </button>
        </form>

        <p className="mt-4 text-xs text-stone-400">
          {t("exitIntent.reassurance")}
        </p>

        <button
          onClick={dismiss}
          className="mt-3 text-xs text-stone-400 hover:text-stone-600 transition-colors"
        >
          {t("exitIntent.dismiss")}
        </button>
      </div>
    </div>
  );
}
