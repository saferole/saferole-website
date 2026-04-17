import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="section-padding pt-28 pb-0">
        <nav className="flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-600 transition-colors">
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
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          <span className="text-slate-800">FAQ</span>
        </nav>
      </div>

      {/* FAQ Component */}
      <FAQ />
    </div>
  );
}
