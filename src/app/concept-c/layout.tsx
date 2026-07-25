import type { Metadata } from "next";
import { Newsreader, Space_Grotesk } from "next/font/google";

const ui = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-c-ui",
});

const serif = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-c-serif",
});

export const metadata: Metadata = {
  title: "Operator — Selected route",
  description: "Spatial technical opening prototype",
};

export default function ConceptCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${ui.variable} ${serif.variable}`}>{children}</div>;
}
