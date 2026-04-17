"use client";

import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-zinc-950/80 backdrop-blur-xl ${
        scrolled ? "border-b border-zinc-800/50" : "border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center font-bold text-zinc-950 text-lg transition-all duration-200 group-hover:scale-105 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
            S
          </div>
          <span className="text-lg font-semibold tracking-tight">
            <span className="text-zinc-50">Safe</span>
            <span className="text-emerald-400">Role</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 rounded-lg transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/#waitlist"
          className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold text-zinc-950 bg-emerald-500 hover:bg-emerald-400 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
        >
          Join Waitlist
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 hover:bg-zinc-800/50"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-zinc-300 transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[3px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-zinc-300 mt-1 transition-all duration-300 ${
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
        <div className="bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50 px-4 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="px-4 py-3 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-lg transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            onClick={handleLinkClick}
            className="mt-2 flex items-center justify-center px-5 py-3 text-sm font-semibold text-zinc-950 bg-emerald-500 hover:bg-emerald-400 rounded-xl transition-all duration-200"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
