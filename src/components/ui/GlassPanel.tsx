"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "subtle" | "strong";
  children: React.ReactNode;
}

const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variantClasses = {
      default: "glass",
      subtle: "glass-subtle",
      strong: "glass-strong",
    };

    return (
      <div
        ref={ref}
        className={cn(
          variantClasses[variant],
          "rounded-2xl",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassPanel.displayName = "GlassPanel";

export { GlassPanel };
