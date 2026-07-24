import { AiCapabilitiesSection } from "@/components/sections/ai-capabilities";
import { ConsultSection } from "@/components/sections/consult";
import { DifferenceSection } from "@/components/sections/difference";
import { FeaturedWorkSection } from "@/components/sections/featured-work";
import { HeroSection } from "@/components/sections/hero";
import { ProcessSection } from "@/components/sections/process";
import { ServicesSection } from "@/components/sections/services";
import { SheetsSection } from "@/components/sections/sheets";
import { StudioIntroSection } from "@/components/sections/studio-intro";

export default function HomePage() {
  return (
    <main id="main">
      <HeroSection />
      <StudioIntroSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <SheetsSection />
      <AiCapabilitiesSection />
      <ProcessSection />
      <DifferenceSection />
      <ConsultSection />
    </main>
  );
}
