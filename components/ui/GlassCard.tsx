"use client";

import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  highlight?: boolean;
}

export default function GlassCard({ children, className = "", hover = false, highlight = false }: CardProps) {
  return (
    <div
      className={`
        relative rounded-2xl p-8
        ${hover ? "transition-all duration-300" : ""}
        ${className}
      `}
      style={{
        backgroundColor: "var(--color-surface)",
        border: highlight ? "2px solid var(--color-accent)" : "1px solid var(--color-border)",
        ...(hover ? {} : {}),
      }}
      onMouseEnter={hover ? (e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--color-border-strong)";
        el.style.transform = "translateY(-2px)";
      } : undefined}
      onMouseLeave={hover ? (e) => {
        const el = e.currentTarget;
        el.style.borderColor = highlight ? "var(--color-accent)" : "var(--color-border)";
        el.style.transform = "translateY(0)";
      } : undefined}
    >
      {children}
    </div>
  );
}
