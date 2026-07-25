import type { Metadata } from "next";
import { Instrument_Serif, Syne } from "next/font/google";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-a-display",
});

const ui = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-a-ui",
});

export const metadata: Metadata = {
  title: "Operator — Concept A",
  description: "Cinematic kinetic visual route",
};

export default function ConceptALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${display.variable} ${ui.variable}`}>{children}</div>
  );
}
