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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gold-500 rounded-md flex items-center justify-center font-bold text-navy-950 text-lg transition-transform duration-200 group-hover:scale-105">
            S
          </div>
          <span className="text-lg font-semibold tracking-tight">
            <span className="text-white">Safe</span>
            <span className="text-gold-400">Role</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm text-gray-300 hover:text-white rounded-lg transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/#waitlist"
          className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold text-navy-950 bg-gold-500 hover:bg-gold-400 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gold-500/25"
        >
          Join Waitlist
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 hover:bg-white/10"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[3px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white mt-1 transition-all duration-300 ${
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
        <div className="bg-navy-950/95 backdrop-blur-xl border-b border-white/10 px-4 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            onClick={handleLinkClick}
            className="mt-2 flex items-center justify-center px-5 py-3 text-sm font-semibold text-navy-950 bg-gold-500 hover:bg-gold-400 rounded-lg transition-all duration-200"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
