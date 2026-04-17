import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import Plans from "@/components/sections/Plans";
import Calculator from "@/components/sections/Calculator";
import Benefits from "@/components/sections/Benefits";
import B2BTeaser from "@/components/sections/B2BTeaser";
import FAQ from "@/components/sections/FAQ";
import WaitlistForm from "@/components/sections/WaitlistForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <Plans />
      <Calculator />
      <Benefits />
      <B2BTeaser />
      <FAQ />
      <WaitlistForm />
    </>
  );
}
