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
    <div className="bg-navy-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="section-padding pt-32 pb-20">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1
              className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.025em" }}
            >
              About <span className="text-gold-400">SafeRole</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              We&apos;re building India&apos;s first salary protection plan — because
              your financial security shouldn&apos;t depend on your employer&apos;s
              decisions.
            </p>
          </AnimatedSection>
        </div>

        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gold-500/5 blur-3xl" />
        </div>
      </section>

      {/* Mission Section */}
      <section>
        <div className="section-padding py-16">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="glass-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-gold-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <h2
                  className="mb-4 text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Our Mission
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  We believe no one should face financial uncertainty because of a
                  layoff. Tech professionals in India work hard, build careers, and
                  support families — yet a single job loss can unravel years of
                  progress. SafeRole exists to change that.
                </p>
              </div>

              <div className="glass-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-gold-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h2
                  className="mb-4 text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Our Vision
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Making career transitions stress-free for every professional in
                  India. A future where losing a job is just the start of something
                  new — not a financial emergency.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section>
        <div className="section-padding py-16">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2
              className="text-3xl font-bold text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.025em" }}
            >
              What We <span className="text-gold-400">Stand For</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
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
                  "Affordable plans designed for every stage of your career — not just senior executives.",
              },
            ].map((value) => (
              <div key={value.title} className="glass-card p-6">
                <h3
                  className="mb-3 text-lg font-semibold text-gold-400"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {value.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <div className="section-padding py-16">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2
              className="text-3xl font-bold text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.025em" }}
            >
              Meet the <span className="text-gold-400">Team</span>
            </h2>
            <p className="mt-4 text-slate-400">
              The founders behind SafeRole are coming soon. Stay tuned.
            </p>
          </AnimatedSection>

          <AnimatedSection className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-3">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={index}
                className="glass-card flex flex-col items-center p-8 text-center"
              >
                {/* Avatar with initials */}
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gold-500/20 ring-2 ring-gold-500/30">
                  <span
                    className="text-xl font-bold text-gold-400"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {member.initials}
                  </span>
                </div>
                <h3
                  className="text-base font-semibold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{member.title}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
