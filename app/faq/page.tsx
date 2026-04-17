import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function FAQPage() {
  return (
    <div style={{ backgroundColor: "var(--canvas)" }}>
      {/* Breadcrumb */}
      <div
        className="section-container"
        style={{ paddingTop: "7rem", paddingBottom: 0 }}
      >
        <nav
          className="flex items-center gap-2 text-sm"
          aria-label="Breadcrumb"
          style={{ color: "var(--text-muted)" }}
        >
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-[var(--ink)]"
            style={{ color: "var(--text-muted)" }}
          >
            Home
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          <span style={{ color: "var(--ink)" }}>FAQ</span>
        </nav>
      </div>

      {/* FAQ Component */}
      <FAQ />
    </div>
  );
}
