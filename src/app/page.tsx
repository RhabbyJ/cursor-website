import Link from "next/link";

const concepts = [
  {
    href: "/concept-a",
    label: "Concept A",
    premise: "Cinematic kinetic — charcoal, amber, filmic type",
  },
  {
    href: "/concept-b",
    label: "Concept B",
    premise: "Editorial light — limestone, forest accent, system diagram",
  },
  {
    href: "/concept-c",
    label: "Concept C",
    premise: "Spatial technical — steel field, nodes, dimensional proof",
  },
] as const;

export default function Home() {
  return (
    <main className="mx-auto flex min-h-full w-full max-w-3xl flex-col justify-center gap-10 px-6 py-16">
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">Website OS v2 · visual exploration</p>
        <h1 className="text-3xl font-semibold tracking-tight">Operator concept routes</h1>
        <p className="max-w-xl text-muted-foreground">
          Three isolated directions for human selection. Full landing page not built yet.
        </p>
      </div>
      <ul className="space-y-4">
        {concepts.map((concept) => (
          <li key={concept.href}>
            <Link
              href={concept.href}
              className="block rounded-lg border border-border px-5 py-4 transition-colors hover:bg-muted"
            >
              <span className="font-medium">{concept.label}</span>
              <span className="mt-1 block text-sm text-muted-foreground">
                {concept.premise}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
