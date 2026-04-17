import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function FAQPage() {
  return (
    <div className="bg-navy-950 min-h-screen">
      {/* Breadcrumb */}
      <div className="section-padding pt-28 pb-0">
        <nav className="flex items-center gap-2 text-sm text-slate-400" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-gold-400 transition-colors">
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
          <span className="text-white">FAQ</span>
        </nav>
      </div>

      {/* FAQ Component */}
      <FAQ />
    </div>
  );
}
