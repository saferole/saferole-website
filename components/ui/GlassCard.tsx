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
        "relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-gold-500/30 hover:shadow-lg hover:shadow-gold-500/10",
        highlight && "border-gold-500/50 shadow-lg shadow-gold-500/10",
        className
      )}
    >
      {highlight && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-gold-500 text-navy-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
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
