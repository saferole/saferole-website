"use client";

import { useState, type FormEvent } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function B2BTeaser() {
  const [form, setForm] = useState({
    companyName: "",
    email: "",
    companySize: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/b2b-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputBaseClass =
    "w-full px-4 py-3.5 text-sm text-white outline-none transition-colors";

  return (
    <section
      style={{
        backgroundColor: "var(--ink)",
        paddingTop: "128px",
        paddingBottom: "128px",
      }}
    >
      <div className="section-container">
        <AnimatedSection className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left -- Copy */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--signal)" }}
              />
              <span
                className="text-xs font-bold uppercase tracking-eyebrow"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                For Employers
              </span>
            </div>

            <h2
              className="font-medium tracking-headline text-white mt-4"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              }}
            >
              Offer SafeRole as an employee benefit.
            </h2>
            <p
              className="mt-4 max-w-[50ch]"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Add career insurance to your employee benefits package &mdash;
              just like health insurance.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {[
                "Boost retention with a unique safety net",
                "Tax-efficient group plans for employers",
                "Demonstrate genuine care for employee wellbeing",
                "Simple onboarding — we handle everything",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-white text-sm mt-0.5 shrink-0">
                    &rarr;
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right -- Form */}
          <div
            className="p-10"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "var(--radius-card)",
            }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-8 w-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  We&apos;ll be in touch!
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Our team will reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-lg font-semibold text-white mb-6">
                  Get in touch
                </h3>

                <input
                  name="companyName"
                  type="text"
                  placeholder="Company name"
                  required
                  value={form.companyName}
                  onChange={handleChange}
                  className={inputBaseClass}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "var(--radius-btn)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--signal)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.2)";
                  }}
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Work email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputBaseClass}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "var(--radius-btn)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--signal)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.2)";
                  }}
                />

                <select
                  name="companySize"
                  required
                  value={form.companySize}
                  onChange={handleChange}
                  className={inputBaseClass}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "var(--radius-btn)",
                    color: form.companySize
                      ? "white"
                      : "rgba(255,255,255,0.3)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--signal)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.2)";
                  }}
                >
                  <option value="" disabled>
                    Company size
                  </option>
                  <option value="1-50">1 - 50 employees</option>
                  <option value="51-200">51 - 200 employees</option>
                  <option value="201-500">201 - 500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us more (optional)"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputBaseClass} resize-none`}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "var(--radius-btn)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--signal)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.2)";
                  }}
                />

                {status === "error" && (
                  <p className="text-sm font-medium text-red-300">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3.5 text-base font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer mt-4"
                  style={{
                    backgroundColor: "var(--canvas)",
                    color: "var(--ink)",
                    borderRadius: "var(--radius-btn)",
                  }}
                >
                  {status === "submitting" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="h-5 w-5 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Talk to Us"
                  )}
                </button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
