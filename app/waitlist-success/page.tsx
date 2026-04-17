import type { Metadata } from "next";
import Link from "next/link";
import CopyLinkButton from "./CopyLinkButton";

export const metadata: Metadata = {
  title: "Welcome to the Waitlist",
};

const SHARE_URL = "https://saferole.in";
const SHARE_TEXT = "I just joined the SafeRole waitlist — India's first salary protection plan for tech professionals. Join me!";

export default function WaitlistSuccessPage() {
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SHARE_URL)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(SHARE_URL)}`;

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="mx-auto max-w-md w-full text-center">
        {/* Emerald checkmark icon */}
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-12 w-12 text-emerald-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl font-bold text-slate-800 sm:text-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          You&apos;re on the list!
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg text-slate-500">
          We&apos;ll notify you when SafeRole launches.
        </p>
        <p className="mt-2 text-sm text-slate-400">
          In the meantime, spread the word and help us reach more tech professionals.
        </p>

        {/* Share Buttons */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          {/* Copy Link */}
          <CopyLinkButton />

          {/* LinkedIn */}
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 rounded-full px-5 py-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-blue-300 hover:bg-blue-50/50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 text-[#0A66C2]"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Share on LinkedIn
          </a>

          {/* Twitter/X */}
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 rounded-full px-5 py-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-blue-300 hover:bg-blue-50/50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.845L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Share on X
          </a>
        </div>

        {/* Back to Home */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
