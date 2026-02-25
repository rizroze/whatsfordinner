"use client";

import React, { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Spinner } from "./Spinner";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  asChild?: boolean;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white rounded-full shadow-sm hover:shadow-md",
  secondary:
    "bg-white border border-stone-200 hover:border-orange-300 text-stone-800 rounded-full shadow-sm hover:shadow-md",
  ghost:
    "text-stone-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
  icon: "w-10 h-10 p-0",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      asChild = false,
      disabled,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;
    const variantClass = variantStyles[variant];
    const sizeClass = sizeStyles[size];
    const baseClass = cn(
      "inline-flex items-center justify-center gap-2 font-medium leading-none transition-all duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      variantClass,
      sizeClass,
      className,
    );

    if (asChild && !loading && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        ...props,
        className: cn(baseClass, (children.props as any).className),
        ref,
      });
    }

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={baseClass}
        {...props}
      >
        {loading && <Spinner size="sm" />}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, type ButtonProps, type ButtonVariant, type ButtonSize };
