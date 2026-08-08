import { createFileRoute } from "@tanstack/react-router";

import dyeing from "@/assets/dyeing.jpg";
import { Reveal } from "@/components/Reveal";
import { TraceJourney } from "@/components/TraceJourney";
import { Display, Eyebrow, PillLink, Shell } from "@/components/ui-kit";
import { journey } from "@/lib/journey";

export const Route = createFileRoute("/traceability")({
  head: () => ({
    meta: [
      { title: "Traceability — Maison Bain" },
      {
        name: "description",
        content:
          "From cotton to your home: the seven stages behind every Maison Bain piece, and what we can and cannot yet verify.",
      },
      { property: "og:title", content: "Traceability — Maison Bain" },
      {
        property: "og:description",
        content: "The seven stages behind every Maison Bain piece, documented per production batch.",
      },
      { property: "og:url", content: "/traceability" },
    ],
    links: [{ rel: "canonical", href: "/traceability" }],
  }),
  component: TraceabilityPage,
});

function TraceabilityPage() {
  return (
    <div className="bg-snow pb-32 pt-40">
      <Shell>
        <Eyebrow>Traceability</Eyebrow>
        <Display as="h1" className="mt-6 max-w-3xl text-slate">
          Know your piece.
        </Display>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-slate">
          Every piece passes through seven hands and seven stages. We publish what we can verify, and mark
          clearly what we cannot — yet.
        </p>

        <div className="mt-20">
          <TraceJourney />
        </div>
      </Shell>

      <div className="mt-28 bg-parchment py-24">
        <Shell>
          <ol className="grid gap-px bg-slate/15 md:grid-cols-2">
            {journey.map((s) => (
              <Reveal as="li" key={s.index} className="bg-parchment p-10">
                <p className="text-[0.625rem] tracking-[0.167em] text-stone">{s.index}</p>
                <h2 className="mt-4 font-display text-2xl text-slate">{s.title}</h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-slate">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </Shell>
      </div>

      <div className="relative mt-0">
        <img
          src={dyeing}
          alt="Skeins of dyed cotton yarn drying against a plaster wall"
          loading="lazy"
          width={1600}
          height={1104}
          className="h-[60vh] w-full object-cover"
        />
      </div>

      <Shell className="mt-24">
        <Eyebrow>Certified with purpose</Eyebrow>
        <div className="mt-10 grid gap-px bg-slate/15 md:grid-cols-2">
          <div className="bg-snow p-10">
            <p className="text-[0.625rem] uppercase tracking-[0.167em] text-stone">Certification pathway</p>
            <h2 className="mt-4 font-display text-2xl text-slate">GOTS</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Global Organic Textile Standard certification is a stated target for our organic cotton supply
              chain. Not yet held.
            </p>
          </div>
          <div className="bg-snow p-10">
            <p className="text-[0.625rem] uppercase tracking-[0.167em] text-stone">Target standard</p>
            <h2 className="mt-4 font-display text-2xl text-slate">OEKO-TEX</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Testing for harmful substances is part of our planned certification programme. Status will be
              published here when confirmed.
            </p>
          </div>
        </div>
        <div className="mt-14">
          <PillLink to="/collection">Trace your piece</PillLink>
        </div>
      </Shell>
    </div>
  );
}