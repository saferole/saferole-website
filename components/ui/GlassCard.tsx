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
        "relative bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)]",
        highlight && "border-amber-300 shadow-amber-100/50",
        className
      )}
    >
      {highlight && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
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
