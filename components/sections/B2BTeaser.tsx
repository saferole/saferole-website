"use client";

import { useState, type FormEvent } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export default function B2BTeaser() {
  const [form, setForm] = useState({
    companyName: "",
    email: "",
    companySize: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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

  const inputClasses =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20";

  return (
    <section className="relative border-y border-slate-100 bg-slate-50">
      <div className="section-padding">
        <AnimatedSection className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left -- Copy */}
          <div className="flex flex-col justify-center">
            <h2
              className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-0.025em",
              }}
            >
              Offer SafeRole as an{" "}
              <span className="text-amber-500">Employee Benefit</span>
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Add career insurance to your employee benefits package -- just like
              health insurance.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {[
                "Boost retention with a unique safety net",
                "Tax-efficient group plans for employers",
                "Demonstrate genuine care for employee wellbeing",
                "Simple onboarding -- we handle everything",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="mt-0.5 h-5 w-5 shrink-0 text-amber-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-sm text-slate-600 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right -- Form */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] sm:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-8 w-8 text-emerald-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  We&apos;ll be in touch!
                </h3>
                <p className="text-sm text-slate-500">
                  Our team will reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-lg font-semibold text-slate-900">
                  Get in touch
                </h3>

                <input
                  name="companyName"
                  type="text"
                  placeholder="Company name"
                  required
                  value={form.companyName}
                  onChange={handleChange}
                  className={inputClasses}
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Work email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses}
                />

                <select
                  name="companySize"
                  required
                  value={form.companySize}
                  onChange={handleChange}
                  className={inputClasses}
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
                  className={inputClasses + " resize-none"}
                />

                {status === "error" && (
                  <p className="text-sm text-red-500">
                    Something went wrong. Please try again.
                  </p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === "submitting"}
                  className="w-full"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center gap-2">
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
                </Button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
