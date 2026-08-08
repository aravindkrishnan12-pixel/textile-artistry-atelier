import { createFileRoute, Link } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { Display, Eyebrow, Shell } from "@/components/ui-kit";
import { stories } from "@/lib/journal";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "Journal — Maison Bain" },
      {
        name: "description",
        content:
          "Stories from the world of textile, craft and design: Indian textile heritage, the art of the towel, and cotton to cloth.",
      },
      { property: "og:title", content: "Journal — Maison Bain" },
      {
        property: "og:description",
        content: "Stories from the world of textile, craft and design.",
      },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: JournalIndex,
});

function JournalIndex() {
  return (
    <div className="bg-snow pb-32 pt-40">
      <Shell>
        <Eyebrow>Journal</Eyebrow>
        <Display as="h1" className="mt-6 max-w-2xl text-slate">
          Notes on textile, craft and design.
        </Display>

        <div className="mt-20 grid gap-x-10 gap-y-16 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <Link to="/journal/$slug" params={{ slug: s.slug }} className="group block">
                <div className="overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <h2 className="mt-6 font-display text-2xl leading-snug text-slate">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-stone">{s.standfirst}</p>
                <p className="mt-4 text-[0.625rem] uppercase tracking-[0.167em] text-stone group-hover:text-slate">
                  Read
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Shell>
    </div>
  );
}