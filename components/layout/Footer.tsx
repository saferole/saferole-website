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

export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Col 1: Logo + tagline + socials */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-0.5 mb-4">
              <span
                className="text-2xl font-bold italic text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                SafeRole
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              India&apos;s first salary protection plan. Get paid even when you
              lose your job.
            </p>
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/saferole"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-700 hover:border-slate-500 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4 text-slate-500 hover:text-white transition-colors duration-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Twitter/X */}
              <a
                href="https://twitter.com/saferole_in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-700 hover:border-slate-500 transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg
                  className="w-4 h-4 text-slate-500 hover:text-white transition-colors duration-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Product */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-slate-200 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-slate-200 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@saferole.in"
                  className="text-sm text-slate-400 hover:text-slate-200 transition-colors duration-200"
                >
                  hello@saferole.in
                </a>
              </li>
              <li className="text-sm text-slate-400">Bangalore, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} SafeRole. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">
            Made in India
          </p>
        </div>
      </div>
    </footer>
  );
}
