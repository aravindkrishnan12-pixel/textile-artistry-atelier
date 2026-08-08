import { createFileRoute } from "@tanstack/react-router";

import hero from "@/assets/hero-architecture.jpg";
import terrace from "@/assets/lifestyle-terrace.jpg";
import cotton from "@/assets/cotton-macro.jpg";
import { Reveal } from "@/components/Reveal";
import { Display, Eyebrow, PillLink, Shell } from "@/components/ui-kit";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Maison Bain" },
      {
        name: "description",
        content:
          "Why Maison Bain treats the towel as an object of everyday ritual: art, organic cotton and Indian textile heritage.",
      },
      { property: "og:title", content: "Our Story — Maison Bain" },
      {
        property: "og:description",
        content: "Art, organic cotton and Indian textile heritage — the thinking behind Maison Bain.",
      },
      { property: "og:url", content: "/story" },
    ],
    links: [{ rel: "canonical", href: "/story" }],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <div className="bg-snow pb-32">
      <div className="relative h-[70vh] min-h-[420px]">
        <img
          src={hero}
          alt="Sunlit Mediterranean terrace of limewashed plaster and travertine"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate/35" />
        <Shell className="absolute inset-x-0 bottom-14">
          <Eyebrow className="text-snow/70">Our Story</Eyebrow>
          <Display as="h1" className="mt-5 max-w-3xl text-snow">
            Textiles as art. Made to be lived with.
          </Display>
        </Shell>
      </div>

      <Shell className="mt-24 grid gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="font-display text-[clamp(1.5rem,2.4vw,2.1rem)] leading-snug text-slate">
            We began with a simple objection: that the most-touched objects in a home are the least
            considered.
          </p>
        </Reveal>
        <Reveal delay={120} className="space-y-6 text-base leading-relaxed text-slate">
          <p>
            Maison Bain makes towels, beach textiles and robes in organic cotton, produced in India with
            artisanal textile partners. Each design is drawn or painted first, then carried onto cloth — a
            piece of functional art rather than a printed commodity.
          </p>
          <p>
            We work in small founding batches, made to order where we can, so nothing is produced before it
            is wanted. It is a slower way to build a house of textiles, and the right one.
          </p>
          <p>
            The brand is positioned between premium and heritage luxury — considered, well-made and honest
            about what it is, without the pricing of an inherited name.
          </p>
        </Reveal>
      </Shell>

      <Reveal className="mt-28">
        <img
          src={terrace}
          alt="Folded cream cotton cloth on a travertine bench beside a still pool"
          loading="lazy"
          width={1600}
          height={1104}
          className="h-[60vh] w-full object-cover"
        />
      </Reveal>

      <Shell className="mt-28 grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <img
            src={cotton}
            alt="Macro study of raw organic cotton fibre and spun yarn"
            loading="lazy"
            width={1600}
            height={1104}
            className="w-full object-cover"
          />
        </Reveal>
        <Reveal delay={100}>
          <Eyebrow>The material</Eyebrow>
          <Display className="mt-5 text-slate">Soft by nature. Considered by design.</Display>
          <p className="mt-8 max-w-md text-base leading-relaxed text-slate">
            Every piece is made from 100% organic cotton. We publish what we know about each production
            batch and mark clearly what is still being verified.
          </p>
          <div className="mt-10">
            <PillLink to="/traceability">Follow the journey</PillLink>
          </div>
        </Reveal>
      </Shell>
    </div>
  );
}