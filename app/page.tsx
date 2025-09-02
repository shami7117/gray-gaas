import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ImpactSection from "@/components/sections/ImpactSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import CTABanner from "@/components/sections/CTABanner";


export default function Landing() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-gray-900">
    <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <ImpactSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTABanner />
    </div>
  );
}
