"use client";

import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  highlight?: boolean;
}

export default function GlassCard({ children, className = "", hover = false, highlight = false }: GlassCardProps) {
  return (
    <div
      className={`
        relative bg-white rounded-3xl border p-8 shadow-sm
        ${highlight
          ? "ring-2 ring-blue-500 bg-blue-50/30 border-blue-200"
          : "border-slate-100"
        }
        ${hover ? "hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-300" : ""}
        ${className}
      `}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
          Most Popular
        </div>
      )}
      {children}
    </div>
  );
}
