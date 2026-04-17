import Link from "next/link";

const productLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Plans", href: "/#plans" },
  { label: "Calculator", href: "/#calculator" },
  { label: "Benefits", href: "/#benefits" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const supportLinks = [
  { label: "hello@saferole.in", href: "mailto:hello@saferole.in" },
  { label: "Bangalore, India", href: null },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-text)" }}>
      <style>{`
        .footer-link { color: oklch(0.55 0.005 175); transition: color 0.2s; }
        .footer-link:hover { color: white; }
        .footer-social { color: oklch(0.45 0.005 175); transition: color 0.2s; }
        .footer-social:hover { color: white; }
      `}</style>
      <div
        className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8"
        style={{ paddingTop: "var(--space-3xl)", paddingBottom: "var(--space-3xl)" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Col 1: Logo + tagline + socials */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-3">
              <span
                className="text-lg font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                SafeRole
              </span>
            </Link>
            <p
              className="text-sm max-w-xs leading-relaxed"
              style={{ color: "oklch(0.6 0.005 175)", marginTop: "var(--space-sm)" }}
            >
              India&apos;s first salary protection plan. Get paid even when you
              lose your job.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/saferole"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Twitter/X */}
              <a
                href="https://twitter.com/saferole_in"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Product */}
          <div>
            <h3
              className="text-xs uppercase font-semibold mb-4"
              style={{ color: "oklch(0.5 0.005 175)", letterSpacing: "0.1em" }}
            >
              Product
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3
              className="text-xs uppercase font-semibold mb-4"
              style={{ color: "oklch(0.5 0.005 175)", letterSpacing: "0.1em" }}
            >
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3
              className="text-xs uppercase font-semibold mb-4"
              style={{ color: "oklch(0.5 0.005 175)", letterSpacing: "0.1em" }}
            >
              Contact
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <a href={link.href} className="footer-link text-sm">
                      {link.label}
                    </a>
                  ) : (
                    <span
                      className="text-sm"
                      style={{ color: "oklch(0.55 0.005 175)" }}
                    >
                      {link.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid oklch(0.3 0.005 175)" }}
        >
          <p className="text-sm" style={{ color: "oklch(0.45 0.005 175)" }}>
            &copy; {new Date().getFullYear()} SafeRole. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: "oklch(0.45 0.005 175)" }}>
            Made in India
          </p>
        </div>
      </div>
    </footer>
  );
}
