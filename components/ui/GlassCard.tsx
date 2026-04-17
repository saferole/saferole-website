"use client";

import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  highlight?: boolean;
  gradient?: boolean;
}

export default function GlassCard({ children, className = "", hover = false, highlight = false, gradient = false }: GlassCardProps) {
  if (gradient) {
    return (
      <div className={`gradient-border p-6 sm:p-8 ${className}`}>
        {highlight && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-emerald-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            Most Popular
          </div>
        )}
        <div className="relative z-[2]">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={`
        relative rounded-2xl border p-6 sm:p-8
        ${highlight
          ? "bg-zinc-900 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.06)]"
          : "bg-zinc-900 border-zinc-800"
        }
        ${hover ? "glow-card" : ""}
        ${className}
      `}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)]">
          Most Popular
        </div>
      )}
      {children}
    </div>
  );
}
