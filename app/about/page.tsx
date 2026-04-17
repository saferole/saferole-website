import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "About",
};

const TEAM_MEMBERS = [
  { initials: "CS", name: "Coming Soon", title: "Co-Founder" },
  { initials: "CS", name: "Coming Soon", title: "Co-Founder" },
  { initials: "CS", name: "Coming Soon", title: "Co-Founder" },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "var(--color-bg)" }}>
      {/* Hero Section */}
      <section
        style={{
          paddingTop: "var(--space-4xl)",
          paddingBottom: "var(--space-3xl)",
        }}
      >
        <div className="section-container">
          <AnimatedSection className="max-w-3xl">
            <h1
              className="font-bold leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-text)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              About SafeRole
            </h1>
            <p
              className="mt-6 text-lg leading-relaxed max-w-[60ch]"
              style={{ color: "var(--color-text-secondary)" }}
            >
              We&apos;re building India&apos;s first salary protection plan &mdash; because
              your financial security shouldn&apos;t depend on your employer&apos;s
              decisions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        style={{
          backgroundColor: "var(--color-bg-alt)",
          paddingTop: "var(--space-3xl)",
          paddingBottom: "var(--space-3xl)",
        }}
      >
        <div className="section-container">
          <AnimatedSection className="grid gap-12 md:grid-cols-2 max-w-5xl">
            <div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
              >
                Our Mission
              </h2>
              <p
                className="leading-relaxed max-w-[55ch]"
                style={{ color: "var(--color-text-secondary)" }}
              >
                We believe no one should face financial uncertainty because of a
                layoff. Tech professionals in India work hard, build careers, and
                support families &mdash; yet a single job loss can unravel years of
                progress. SafeRole exists to change that.
              </p>
            </div>

            <div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
              >
                Our Vision
              </h2>
              <p
                className="leading-relaxed max-w-[55ch]"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Making career transitions stress-free for every professional in
                India. A future where losing a job is just the start of something
                new &mdash; not a financial emergency.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section
        style={{
          backgroundColor: "var(--color-bg)",
          paddingTop: "var(--space-3xl)",
          paddingBottom: "var(--space-3xl)",
        }}
      >
        <div className="section-container">
          <AnimatedSection className="mb-12">
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
            >
              What We Stand For
            </h2>
          </AnimatedSection>

          <AnimatedSection className="grid max-w-4xl gap-8 md:grid-cols-3">
            {[
              {
                title: "Transparency",
                description:
                  "Clear terms, no hidden clauses. You know exactly what you're getting and when you can claim.",
              },
              {
                title: "Speed",
                description:
                  "Claims processed within days, not months. We know time matters most when you need support.",
              },
              {
                title: "Accessibility",
                description:
                  "Affordable plans designed for every stage of your career -- not just senior executives.",
              },
            ].map((value) => (
              <div key={value.title} className="py-6">
                <h3
                  className="text-lg font-semibold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}
                >
                  {value.title}
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed max-w-[40ch]"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section
        style={{
          backgroundColor: "var(--color-bg-alt)",
          paddingTop: "var(--space-3xl)",
          paddingBottom: "var(--space-3xl)",
        }}
      >
        <div className="section-container">
          <AnimatedSection className="mb-12">
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
            >
              Meet the Team
            </h2>
            <p
              className="mt-4"
              style={{ color: "var(--color-text-secondary)" }}
            >
              The founders behind SafeRole are coming soon. Stay tuned.
            </p>
          </AnimatedSection>

          <AnimatedSection className="grid max-w-3xl gap-8 sm:grid-cols-3">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center py-6"
              >
                {/* Avatar with initials */}
                <div
                  className="mb-4 flex h-20 w-20 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--color-accent-light)" }}
                >
                  <span
                    className="text-xl font-bold"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {member.initials}
                  </span>
                </div>
                <h3
                  className="text-base font-semibold"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-text)",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  className="mt-1 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {member.title}
                </p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
