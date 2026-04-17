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
        relative bg-white border rounded-2xl p-6 sm:p-8 shadow-sm
        ${highlight
          ? "border-emerald-500 ring-2 ring-emerald-500"
          : "border-gray-200"
        }
        ${hover ? "hover:shadow-lg hover:-translate-y-1 transition-all duration-300" : ""}
        ${className}
      `}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}
      {children}
    </div>
  );
}
