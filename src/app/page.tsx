import { ConsultSection } from "@/components/sections/consult";
import { DifferentiatorStrip } from "@/components/sections/differentiator";
import { EngagementModesSection } from "@/components/sections/engagement-modes";
import { FounderSection } from "@/components/sections/founder";
import { HarnessMateSection } from "@/components/sections/harnessmate";
import { HeroSection } from "@/components/sections/hero";
import { MyBirdSection } from "@/components/sections/mybird";
import { ProcessSection } from "@/components/sections/process";
import { ProofStripSection } from "@/components/sections/proof-strip";
import { SheetsDemoSection } from "@/components/sections/sheets-demo";

export default function HomePage() {
  return (
    <main id="main">
      <HeroSection />
      <DifferentiatorStrip />
      <ProofStripSection />
      <EngagementModesSection />
      <HarnessMateSection />
      <SheetsDemoSection />
      <MyBirdSection />
      <ProcessSection />
      <FounderSection />
      <ConsultSection />
    </main>
  );
}
