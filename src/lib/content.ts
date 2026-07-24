export const site = {
  name: "Operator",
  email: "hello@operator.studio",
  tagline: "Websites connected to data, workflows, and software",
  description:
    "Operator builds websites connected to business data, workflows, and custom software for companies that need their digital layer to operate—not just advertise.",
} as const;

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#modes", label: "Modes" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#consult", label: "Consult" },
] as const;

export const proofStrip = [
  {
    name: "HarnessMate",
    href: "#harnessmate",
    status: "In development",
    line: "Engineering software for connector selection",
  },
  {
    name: "Hospitality sites",
    href: "#sheets",
    status: "Prototype demo",
    line: "Google Sheets → live menus and events",
  },
  {
    name: "MyBird Real Estate",
    href: "#mybird",
    status: "Private implementation",
    line: "Property discovery and inquiry flows",
  },
] as const;

export const engagementModes = [
  {
    id: "01",
    title: "Websites that communicate",
    summary: "Clear public sites for brand, offers, and conversion.",
    adds: ["Information architecture", "Brand system", "Lead capture"],
    includesPrior: false,
  },
  {
    id: "02",
    title: "Connected websites that operate",
    summary: "Staff-owned data keeps the public site accurate.",
    adds: ["Sheets or structured CMS", "Validation", "Automated publish"],
    includesPrior: true,
  },
  {
    id: "03",
    title: "Custom software that performs work",
    summary: "Tools for search, workflows, portals, and decision support.",
    adds: ["Auth & data models", "Domain workflows", "Optional AI assist"],
    includesPrior: true,
  },
] as const;

export const processSteps = [
  {
    id: "01",
    title: "Map the operating reality",
    description: "Who updates what, what customers must see, where work stalls.",
  },
  {
    id: "02",
    title: "Design the system",
    description: "Data, permissions, and interfaces before visual polish.",
  },
  {
    id: "03",
    title: "Build a working slice",
    description: "Ship one complete path early—then expand.",
  },
  {
    id: "04",
    title: "Hand off to operate",
    description: "Train owners so the system stays accurate after launch.",
  },
] as const;

export const projectTypes = [
  "Website that communicates",
  "Connected / Sheets-powered site",
  "Custom software",
  "Not sure yet",
] as const;

export type SheetRow = {
  id: string;
  item: string;
  price: string;
  active: boolean;
  invalid?: boolean;
};

export const initialSheetRows: SheetRow[] = [
  { id: "1", item: "Negroni", price: "14", active: true },
  { id: "2", item: "Oyster Hour", price: "½ off", active: true },
  { id: "3", item: "House IPA", price: "8", active: true },
  { id: "4", item: "Broken Row", price: "abc", active: true, invalid: true },
];
