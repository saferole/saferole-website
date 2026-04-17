"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

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
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
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

  const inputClasses =
    "w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20";

  return (
    <section
      id="waitlist"
      className="relative bg-white"
    >
      <div className="section-padding">
        <AnimatedSection className="mx-auto max-w-lg">
          {/* Section Header */}
          <div className="mb-10 text-center">
            <h2
              className="text-3xl font-bold leading-tight text-stone-900 sm:text-4xl lg:text-5xl"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-0.025em",
              }}
            >
              Join the{" "}
              <span className="text-emerald-600">Waitlist</span>
            </h2>
            <p className="mt-4 text-base text-stone-500 sm:text-lg">
              Be among the first to protect your career.
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-[0_2px_12px_rgba(28,25,23,0.06)] sm:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
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
                <h3 className="text-xl font-semibold text-stone-900">
                  You&apos;re on the list!
                </h3>
                {position && (
                  <p className="text-sm text-stone-500">
                    You are{" "}
                    <span className="font-semibold text-emerald-600">
                      #{position}
                    </span>{" "}
                    in line.
                  </p>
                )}
                <p className="text-sm text-stone-400">
                  We&apos;ll notify you when SafeRole launches.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-stone-600">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Your full name"
                    className={cn(
                      inputClasses,
                      errors.name && "border-red-500/50"
                    )}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-stone-600">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="you@company.com"
                    className={cn(
                      inputClasses,
                      errors.email && "border-red-500/50"
                    )}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Monthly Salary */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-stone-600">
                    Monthly Salary{" "}
                    <span className="text-stone-400">(optional)</span>
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-stone-400">
                      &#8377;
                    </span>
                    <input
                      {...register("monthlySalary")}
                      type="number"
                      placeholder="75,000"
                      className={cn(inputClasses, "pl-8")}
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-stone-600">
                    Company{" "}
                    <span className="text-stone-400">(optional)</span>
                  </label>
                  <input
                    {...register("company")}
                    type="text"
                    placeholder="Where you work"
                    className={inputClasses}
                  />
                </div>

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
                      Joining...
                    </span>
                  ) : (
                    "Join the Waitlist"
                  )}
                </Button>

                <p className="text-center text-xs text-stone-400">
                  No spam, ever. We only email when SafeRole is ready.
                </p>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
