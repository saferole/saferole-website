"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  highlight?: boolean;
}

function GlassCard({ children, className, hover, highlight }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative bg-white border border-stone-200 rounded-2xl p-6",
        "shadow-[0_1px_3px_rgba(28,25,23,0.06),0_1px_2px_rgba(28,25,23,0.04)]",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(28,25,23,0.08)] hover:border-emerald-200",
        highlight && "border-emerald-400 bg-emerald-50/30",
        className
      )}
    >
      {highlight && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Most Popular
          </span>
        </div>
      )}
      {children}
    </div>
  );
}

export { GlassCard };
export type { GlassCardProps };
