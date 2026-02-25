"use client";

import { useEffect, useCallback, type ReactNode } from "react";
import { create } from "zustand";
import { cn } from "@/lib/utils";

// --- Types ---

type ToastType = "success" | "error" | "info";

interface ToastItem {
  id: string;
  type: ToastType;
  message: string;
}

interface ToastState {
  toasts: ToastItem[];
  add: (type: ToastType, message: string) => void;
  remove: (id: string) => void;
}

// --- Store ---

let toastCounter = 0;

const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  add: (type, message) => {
    const id = `toast-${++toastCounter}`;
    set((state) => ({
      toasts: [...state.toasts, { id, type, message }],
    }));
  },
  remove: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
}));

// --- Public API ---

const toast = {
  success: (message: string) => useToastStore.getState().add("success", message),
  error: (message: string) => useToastStore.getState().add("error", message),
  info: (message: string) => useToastStore.getState().add("info", message),
};

function useToast() {
  return toast;
}

// --- Toast Item Component ---

const typeStyles: Record<ToastType, string> = {
  success: "border-l-green-500 bg-green-50 text-green-800",
  error: "border-l-red-500 bg-red-50 text-red-800",
  info: "border-l-orange-500 bg-orange-50 text-orange-800",
};

const typeIcons: Record<ToastType, string> = {
  success: "\u2713",
  error: "\u2715",
  info: "\u2139",
};

function ToastItemView({ item }: { item: ToastItem }) {
  const remove = useToastStore((s) => s.remove);

  useEffect(() => {
    const timer = setTimeout(() => remove(item.id), 4000);
    return () => clearTimeout(timer);
  }, [item.id, remove]);

  return (
    <div
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-xl border-l-4 shadow-md",
        "animate-slide-in-right",
        typeStyles[item.type],
      )}
      role="alert"
    >
      <span className="text-sm font-semibold shrink-0">{typeIcons[item.type]}</span>
      <p className="text-sm font-medium flex-1">{item.message}</p>
      <button
        onClick={() => remove(item.id)}
        className="text-current opacity-50 hover:opacity-100 transition-opacity ml-2 shrink-0"
        aria-label="Dismiss"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}

// --- Provider ---

function ToastProvider({ children }: { children: ReactNode }) {
  const toasts = useToastStore((s) => s.toasts);

  return (
    <>
      {children}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 w-80 pointer-events-none">
        {toasts.map((item) => (
          <div key={item.id} className="pointer-events-auto">
            <ToastItemView item={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export { ToastProvider, useToast, toast, type ToastType, type ToastItem };
