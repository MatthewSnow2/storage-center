"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const sizeClasses = {
      sm: "px-4 py-2 text-sm min-w-[100px]",
      md: "px-9 py-4 text-base min-w-[132px]",
      lg: "px-12 py-5 text-lg min-w-[160px]",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "gradient-button",
          "relative inline-flex items-center justify-center",
          "font-semibold text-white",
          "rounded-xl",
          "transition-all duration-500 ease-out",
          "hover:scale-[1.02] active:scale-[0.98]",
          "focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-background",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

GradientButton.displayName = "GradientButton";

export { GradientButton };
