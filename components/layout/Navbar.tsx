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
    <header
      className="sticky top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "var(--color-surface)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <nav className="max-w-[72rem] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span
            className="text-[1.35rem] font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
          >
            SafeRole
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-[0.875rem] font-medium uppercase rounded-lg transition-colors duration-200"
              style={{
                color: "var(--color-text-secondary)",
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-text)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-text-secondary)";
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/#waitlist"
          className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-all duration-200"
          style={{ backgroundColor: "var(--color-accent)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-accent-hover)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-accent)";
          }}
        >
          Join Waitlist
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "var(--color-text-secondary)",
              transform: mobileOpen ? "rotate(45deg) translate(0, 3px)" : "none",
            }}
          />
          <span
            className="block w-5 h-0.5 mt-1 transition-all duration-300"
            style={{
              backgroundColor: "var(--color-text-secondary)",
              transform: mobileOpen ? "rotate(-45deg) translate(0, -3px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="px-4 pb-4 pt-2 flex flex-col gap-1"
          style={{
            backgroundColor: "var(--color-surface)",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="px-4 py-3 text-sm font-medium uppercase rounded-lg transition-colors duration-200"
              style={{
                color: "var(--color-text-secondary)",
                letterSpacing: "0.05em",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            onClick={handleLinkClick}
            className="mt-2 flex items-center justify-center px-5 py-3 text-sm font-semibold text-white rounded-lg transition-all duration-200"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
