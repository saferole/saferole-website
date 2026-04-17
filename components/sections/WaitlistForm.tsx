"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface WaitlistData {
  name: string;
  email: string;
  monthlySalary?: number;
  company?: string;
}

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  monthlySalary: z.coerce.number().optional(),
  company: z.string().optional(),
});

export default function WaitlistForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [position, setPosition] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WaitlistData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(schema) as any,
  });

  async function onSubmit(data: WaitlistData) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      const json = await res.json();
      setPosition(json.position ?? null);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="waitlist"
      style={{
        backgroundColor: "var(--canvas)",
        paddingTop: "128px",
        paddingBottom: "128px",
      }}
    >
      <div className="section-container">
        <AnimatedSection className="mx-auto max-w-md">
          {/* Heading -- centered */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--signal)" }}
              />
              <span
                className="text-xs font-bold uppercase tracking-eyebrow"
                style={{ color: "var(--text-muted)" }}
              >
                Waitlist
              </span>
            </div>
            <h2
              className="font-medium tracking-headline"
              style={{
                color: "var(--ink)",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              }}
            >
              Join the waitlist.
            </h2>
            <p className="mt-2" style={{ color: "var(--text-muted)" }}>
              Be the first to know when SafeRole launches.
            </p>
          </div>

          {/* Form card */}
          {status === "success" ? (
            <div
              className="flex flex-col items-center gap-4 py-8 text-center p-10"
              style={{
                backgroundColor: "var(--white)",
                borderRadius: "var(--radius-card)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgb(236 253 245)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-8 w-8"
                  style={{ color: "rgb(22 163 74)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-semibold"
                style={{ color: "var(--ink)" }}
              >
                You&apos;re on the list!
              </h3>
              {position && (
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  You are{" "}
                  <span
                    className="font-semibold"
                    style={{ color: "var(--signal)" }}
                  >
                    #{position}
                  </span>{" "}
                  in line.
                </p>
              )}
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                We&apos;ll notify you when SafeRole launches.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5 p-10"
              style={{
                backgroundColor: "var(--white)",
                borderRadius: "var(--radius-card)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              {/* Name */}
              <div className="flex flex-col gap-1.5 text-left">
                <label
                  className="text-sm font-medium"
                  style={{ color: "var(--ink)" }}
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3.5 text-base transition-all duration-200 focus-visible:outline-none"
                  style={{
                    backgroundColor: "var(--canvas)",
                    border: errors.name
                      ? "1px solid rgb(239 68 68)"
                      : "1px solid var(--border)",
                    color: "var(--ink)",
                    borderRadius: "var(--radius-btn)",
                    fontWeight: 450,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--signal)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = errors.name
                      ? "rgb(239 68 68)"
                      : "var(--border)";
                  }}
                />
                {errors.name && (
                  <p className="text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5 text-left">
                <label
                  className="text-sm font-medium"
                  style={{ color: "var(--ink)" }}
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="you@company.com"
                  className="w-full px-4 py-3.5 text-base transition-all duration-200 focus-visible:outline-none"
                  style={{
                    backgroundColor: "var(--canvas)",
                    border: errors.email
                      ? "1px solid rgb(239 68 68)"
                      : "1px solid var(--border)",
                    color: "var(--ink)",
                    borderRadius: "var(--radius-btn)",
                    fontWeight: 450,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--signal)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = errors.email
                      ? "rgb(239 68 68)"
                      : "var(--border)";
                  }}
                />
                {errors.email && (
                  <p className="text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Monthly Salary */}
              <div className="flex flex-col gap-1.5 text-left">
                <label
                  className="text-sm font-medium"
                  style={{ color: "var(--ink)" }}
                >
                  Monthly Salary{" "}
                  <span style={{ color: "var(--text-muted)" }}>(optional)</span>
                </label>
                <div className="relative">
                  <span
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    &#8377;
                  </span>
                  <input
                    {...register("monthlySalary")}
                    type="number"
                    placeholder="75,000"
                    className="w-full pl-8 pr-4 py-3.5 text-base transition-all duration-200 focus-visible:outline-none"
                    style={{
                      backgroundColor: "var(--canvas)",
                      border: "1px solid var(--border)",
                      color: "var(--ink)",
                      borderRadius: "var(--radius-btn)",
                      fontWeight: 450,
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--signal)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                    }}
                  />
                </div>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-1.5 text-left">
                <label
                  className="text-sm font-medium"
                  style={{ color: "var(--ink)" }}
                >
                  Company{" "}
                  <span style={{ color: "var(--text-muted)" }}>(optional)</span>
                </label>
                <input
                  {...register("company")}
                  type="text"
                  placeholder="Where you work"
                  className="w-full px-4 py-3.5 text-base transition-all duration-200 focus-visible:outline-none"
                  style={{
                    backgroundColor: "var(--canvas)",
                    border: "1px solid var(--border)",
                    color: "var(--ink)",
                    borderRadius: "var(--radius-btn)",
                    fontWeight: 450,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--signal)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 w-full py-3.5 text-base font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                style={{
                  backgroundColor: "var(--ink)",
                  color: "var(--canvas)",
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
                    Joining...
                  </span>
                ) : (
                  "Join the Waitlist"
                )}
              </button>

              <p
                className="text-center text-xs mt-3"
                style={{ color: "var(--text-muted)" }}
              >
                No spam. We only email when SafeRole is ready.
              </p>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
