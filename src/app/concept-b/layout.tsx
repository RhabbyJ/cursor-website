import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-b-display",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-b-body",
});

export const metadata: Metadata = {
  title: "Operator — Concept B",
  description: "Editorial light visual route",
};

export default function ConceptBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${display.variable} ${body.variable}`}>{children}</div>;
}
