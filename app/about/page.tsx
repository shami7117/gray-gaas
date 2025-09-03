
// app/about/page.tsx
import AboutHero from '@/components/about/AboutHero';
import OurMission from '@/components/about/OurMission';
import OurStory from '@/components/about/OurStory';
import OurValues from '@/components/about/OurValues';
import TeamSection from '@/components/about/TeamSection';
import PartnersSection from '@/components/sections/PartnersSection';
import CTASection from '@/components/sections/CTABanner';

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurMission />
      <OurStory />
      <OurValues />
      <TeamSection />
      <PartnersSection />
      <CTASection />
    </main>
  );
}