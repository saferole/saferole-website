"use client";

import { BENEFITS } from "@/lib/constants";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

const categoryLabels: Record<string, string> = {
  "graduation-cap": "Learning",
  handshake: "Placement",
  gift: "Rewards",
  rocket: "Freedom",
};

export default function Benefits() {
  return (
    <section
      id="benefits"
      style={{
        backgroundColor: "var(--canvas)",
        paddingTop: "128px",
        paddingBottom: "128px",
      }}
    >
      <div className="section-container">
        {/* Eyebrow + Title */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--signal)" }}
            />
            <span
              className="text-xs font-bold uppercase tracking-eyebrow"
              style={{ color: "var(--text-muted)" }}
            >
              Benefits
            </span>
          </div>
          <h2
            className="font-medium tracking-headline mt-4"
            style={{
              color: "var(--ink)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            }}
          >
            More than insurance.
          </h2>
        </AnimatedSection>

        {/* Editorial flowing layout */}
        <AnimatedSection stagger className="max-w-4xl">
          {BENEFITS.map((benefit, i) => (
            <AnimatedItem key={benefit.title}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 py-12 ${
                  i < BENEFITS.length - 1 ? "" : ""
                }`}
                style={{
                  borderBottom:
                    i < BENEFITS.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                }}
              >
                {/* Text — alternates sides on desktop */}
                <div
                  className={`flex flex-col justify-center ${
                    i % 2 === 1 ? "md:col-start-2 md:row-start-1" : ""
                  }`}
                >
                  <p
                    className="text-xs uppercase font-bold tracking-eyebrow"
                    style={{ color: "var(--signal)" }}
                  >
                    {categoryLabels[benefit.icon] || "Benefit"}
                  </p>
                  <h3
                    className="text-xl font-semibold mt-2"
                    style={{ color: "var(--ink)" }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="text-base mt-3 leading-relaxed"
                    style={{
                      color: "var(--text-muted)",
                      fontWeight: 450,
                      maxWidth: "45ch",
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>

                {/* Ghost watermark on opposite side */}
                <div
                  className={`hidden md:flex items-center ${
                    i % 2 === 1
                      ? "md:col-start-1 md:row-start-1 justify-start"
                      : "justify-end"
                  }`}
                  aria-hidden="true"
                >
                  <span
                    className="font-medium tracking-headline select-none"
                    style={{
                      fontSize: "5rem",
                      color: "var(--text-dust)",
                      opacity: 0.4,
                      lineHeight: 1,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
