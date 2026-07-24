import { SheetsFlowDemo } from "@/components/demos/sheets-flow";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";

export function SheetsSection() {
  return (
    <Section
      id="sheets"
      className="border-y border-[var(--border)] bg-[var(--surface)]/35"
      eyebrow="L04 · Sheets-powered sites"
      title="Keep the website current without opening a code editor"
      description="For bars, restaurants, and other operational businesses, the content owners should update a familiar sheet. The site should follow—after validation."
    >
      <Reveal>
        <SheetsFlowDemo />
      </Reveal>
    </Section>
  );
}
