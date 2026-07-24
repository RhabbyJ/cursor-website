export const site = {
  name: "Operator",
  email: "hello@operator.studio",
  tagline: "Websites, systems, and AI software for business",
  description:
    "Operator builds premium websites, Google Sheets–powered operational sites, AI tools, portals, and full web applications—so your digital layer helps the business run.",
} as const;

export const navLinks = [
  { href: "#studio", label: "Studio" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#consult", label: "Consult" },
] as const;

export const services = [
  {
    title: "Premium marketing websites",
    description:
      "Fast, accessible public sites with clear hierarchy, conversion paths, and brand-specific visual systems.",
    icon: "GlobeHemisphereWest",
  },
  {
    title: "Google Sheets–powered websites",
    description:
      "Staff update menus, events, specials, and listings in a familiar sheet. The site stays current automatically.",
    icon: "Table",
  },
  {
    title: "AI tools",
    description:
      "Decision-support and workflow assistants grounded in your data—search, recommend, draft, and triage with clear limits.",
    icon: "Sparkle",
  },
  {
    title: "Internal business portals",
    description:
      "Private tools for teams: intake, status, approvals, and operational dashboards that match how you work.",
    icon: "Buildings",
  },
  {
    title: "Customer dashboards",
    description:
      "Logged-in experiences for clients: accounts, activity, documents, and self-serve status without email ping-pong.",
    icon: "UserCircle",
  },
  {
    title: "Searchable databases",
    description:
      "Structured catalogs with filters, specs, and relationships—built for real query patterns, not brochure pages.",
    icon: "MagnifyingGlass",
  },
  {
    title: "Workflow automation",
    description:
      "Connect forms, sheets, CRMs, and notifications so routine handoffs happen without manual copy-paste.",
    icon: "FlowArrow",
  },
  {
    title: "Booking & lead systems",
    description:
      "Inquiry flows, scheduling, qualification, and routing designed around how your sales process actually runs.",
    icon: "CalendarCheck",
  },
  {
    title: "Full web applications",
    description:
      "End-to-end products with auth, data models, and product UX—engineering platforms and custom software included.",
    icon: "Cube",
  },
] as const;

export const processSteps = [
  {
    id: "01",
    title: "Discover the operating reality",
    description:
      "We map who updates what, where decisions stall, and which public pages must stay truthful as the business changes.",
  },
  {
    id: "02",
    title: "Design the system, not just screens",
    description:
      "Information architecture, data sources, permissions, and AI boundaries are defined before visual polish.",
  },
  {
    id: "03",
    title: "Build in vertical slices",
    description:
      "Ship a working first viewport and one complete interaction early, then expand narrative and capability together.",
  },
  {
    id: "04",
    title: "Verify and hand off to operate",
    description:
      "Browser QA, accessibility, and operational training so your team can keep the system accurate after launch.",
  },
] as const;

export const differences = [
  {
    agency: "Delivers pages that look finished on launch day.",
    operator: "Delivers a system your staff can keep accurate after launch.",
  },
  {
    agency: "Treats content edits as developer tickets.",
    operator: "Puts operational data in tools your team already knows—often Google Sheets.",
  },
  {
    agency: "Stops at marketing copy and layout.",
    operator: "Connects the public site to workflows, search, automation, and AI where they earn their keep.",
  },
  {
    agency: "Sells “digital presence.”",
    operator: "Builds software that helps the business operate.",
  },
] as const;

export const aiCapabilities = [
  {
    title: "AI-assisted decision support",
    description:
      "Recommend options from structured technical or operational data with transparent criteria—not black-box promises.",
  },
  {
    title: "Document and data workflows",
    description:
      "Extract, classify, and route information into the systems your team already uses.",
  },
  {
    title: "Internal copilots with guardrails",
    description:
      "Assist staff with search, drafting, and triage while keeping human override and privacy boundaries explicit.",
  },
  {
    title: "Productized AI inside web apps",
    description:
      "Embed model capabilities into portals and tools where latency, failure states, and evaluation are designed up front.",
  },
] as const;

export const projectTypes = [
  "Marketing website",
  "Sheets-powered site",
  "AI tool / software",
  "Portal or dashboard",
  "Something else",
] as const;
