"use client";

import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  highlight?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = false,
  highlight = false,
}: CardProps) {
  return (
    <div
      className={`
        relative p-10
        ${hover ? "transition-all duration-300" : ""}
        ${className}
      `}
      style={{
        backgroundColor: "var(--white)",
        borderRadius: "var(--radius-card)",
        border: highlight
          ? "2px solid var(--ink)"
          : "1px solid var(--border)",
      }}
      onMouseEnter={
        hover
          ? (e) => {
              const el = e.currentTarget;
              el.style.boxShadow = "var(--shadow-sm)";
              el.style.transform = "translateY(-2px)";
            }
          : undefined
      }
      onMouseLeave={
        hover
          ? (e) => {
              const el = e.currentTarget;
              el.style.boxShadow = "none";
              el.style.transform = "translateY(0)";
            }
          : undefined
      }
    >
      {highlight && (
        <div className="flex items-center gap-2 mb-4">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "var(--signal)" }}
          />
          <span
            className="text-xs font-bold uppercase tracking-eyebrow"
            style={{ color: "var(--text-muted)" }}
          >
            Most Popular
          </span>
        </div>
      )}
      {children}
    </div>
  );
}
