"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Plans", href: "/#plans" },
  { label: "Calculator", href: "/#calculator" },
  { label: "Benefits", href: "/#benefits" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-slate-100">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0.5 group">
          <span
            className="text-2xl font-bold italic"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-slate-800">Safe</span>
            <span className="text-blue-600">Role</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 rounded-lg transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/#waitlist"
          className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-sm shadow-blue-600/20 transition-all duration-200"
        >
          Join Waitlist
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 hover:bg-slate-50"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-slate-600 transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[3px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-600 mt-1 transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-slate-100 px-4 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            onClick={handleLinkClick}
            className="mt-2 flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-sm shadow-blue-600/20 transition-all duration-200"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
