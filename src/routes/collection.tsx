import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { Display, Eyebrow, Shell } from "@/components/ui-kit";
import { products } from "@/lib/products";
import { cn } from "@/lib/utils";

const filters = ["all", "artistic", "monogram", "bath", "beach", "bathrobe"] as const;
type Filter = (typeof filters)[number];

export const Route = createFileRoute("/collection")({
  validateSearch: (search: Record<string, unknown>): { filter?: Filter } => {
    const filter = search["filter"];
    return filters.includes(filter as Filter) ? { filter: filter as Filter } : {};
  },
  head: () => ({
    meta: [
      { title: "The Collection — Maison Bain" },
      {
        name: "description",
        content:
          "Artistic and monogram textiles in organic cotton: beach towels, bath towels and bathrobes for the rituals of water, sun and home.",
      },
      { property: "og:title", content: "The Collection — Maison Bain" },
      {
        property: "og:description",
        content: "Artistic and monogram textiles in organic cotton, made in India.",
      },
      { property: "og:url", content: "/collection" },
    ],
    links: [{ rel: "canonical", href: "/collection" }],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  const { filter = "all" } = Route.useSearch();
  const navigate = useNavigate({ from: "/collection" });

  const shown = products.filter((p) => {
    if (filter === "all") return true;
    if (filter === "artistic" || filter === "monogram") return p.family === filter;
    return p.uses.includes(filter);
  });

  return (
    <div className="bg-snow pt-40 pb-32">
      <Shell>
        <Eyebrow>The Founding Collection</Eyebrow>
        <Display as="h1" className="mt-6 max-w-3xl text-slate">
          Objects for the rituals of water, sun and home.
        </Display>

        <nav aria-label="Filter the collection" className="mt-16 flex flex-wrap gap-x-8 gap-y-4 border-b border-slate/15 pb-5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => navigate({ search: f === "all" ? {} : { filter: f } })}
              aria-current={f === filter}
              className={cn(
                "text-[0.6875rem] uppercase tracking-[0.167em] transition-colors",
                f === filter ? "text-slate" : "text-stone hover:text-slate",
              )}
            >
              {f}
            </button>
          ))}
        </nav>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-20 lg:grid-cols-3 lg:gap-x-12">
          {shown.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <ProductCard product={p} priority={i < 3} />
            </Reveal>
          ))}
        </div>

        {shown.length === 0 && (
          <p className="mt-16 font-display text-2xl text-stone">Nothing in this category yet.</p>
        )}
      </Shell>
    </div>
  );
}