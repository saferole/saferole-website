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
    <header className="sticky top-6 left-0 right-0 z-50 px-4">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3"
        style={{
          backgroundColor: "var(--white)",
          borderRadius: "var(--radius-pill)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span
            className="text-xl font-semibold tracking-headline"
            style={{ color: "var(--ink)" }}
          >
            SafeRole
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-headline transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--ink)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/#waitlist"
          className="hidden md:inline-flex items-center px-6 py-2.5 text-sm font-medium tracking-headline transition-all duration-200"
          style={{
            backgroundColor: "var(--ink)",
            color: "var(--canvas)",
            borderRadius: "var(--radius-btn)",
          }}
        >
          Join Waitlist
        </Link>

        {/* Mobile: CTA + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href="/#waitlist"
            onClick={handleLinkClick}
            className="inline-flex items-center px-5 py-2 text-sm font-medium"
            style={{
              backgroundColor: "var(--ink)",
              color: "var(--canvas)",
              borderRadius: "var(--radius-btn)",
            }}
          >
            Join
          </Link>
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex flex-col items-center justify-center w-10 h-10 rounded-[var(--radius-btn)] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                backgroundColor: "var(--text-muted)",
                transform: mobileOpen
                  ? "rotate(45deg) translate(0, 3px)"
                  : "none",
              }}
            />
            <span
              className="block w-5 h-0.5 mt-1 transition-all duration-300"
              style={{
                backgroundColor: "var(--text-muted)",
                transform: mobileOpen
                  ? "rotate(-45deg) translate(0, -3px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out mx-auto max-w-5xl mt-2 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          backgroundColor: "var(--white)",
          borderRadius: "var(--radius-card)",
          boxShadow: mobileOpen ? "var(--shadow-sm)" : "none",
        }}
      >
        <div className="px-6 pb-4 pt-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="px-4 py-3 text-sm font-medium tracking-headline rounded-[var(--radius-btn)] transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
