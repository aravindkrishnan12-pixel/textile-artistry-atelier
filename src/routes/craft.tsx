import { createFileRoute } from "@tanstack/react-router";

import hands from "@/assets/craft-hands.jpg";
import loom from "@/assets/craft-loom.jpg";
import dyeing from "@/assets/dyeing.jpg";
import { Reveal } from "@/components/Reveal";
import { Display, Eyebrow, PillLink, Shell } from "@/components/ui-kit";

const stages = [
  { index: "01", title: "Fibre", body: "Organic cotton is cleaned and prepared." },
  { index: "02", title: "Spinning", body: "Fibre is drawn and twisted into yarn." },
  { index: "03", title: "Weaving", body: "Yarn becomes terry and flat-weave cloth." },
  { index: "04", title: "Dyeing", body: "Colour is brought to the finished cloth." },
  { index: "05", title: "Finishing", body: "Hems closed, fringes knotted, each piece checked by hand." },
];

export const Route = createFileRoute("/craft")({
  head: () => ({
    meta: [
      { title: "Craft & People — Maison Bain" },
      {
        name: "description",
        content:
          "Behind every Maison Bain piece is a hand: fibre, spinning, weaving, dyeing and finishing in India's textile workshops.",
      },
      { property: "og:title", content: "Craft & People — Maison Bain" },
      {
        property: "og:description",
        content: "Fibre, spinning, weaving, dyeing and finishing — the people behind the cloth.",
      },
      { property: "og:url", content: "/craft" },
    ],
    links: [{ rel: "canonical", href: "/craft" }],
  }),
  component: CraftPage,
});

function CraftPage() {
  return (
    <div className="bg-snow pb-32">
      <div className="bg-slate pt-40 pb-24">
        <Shell>
          <Eyebrow className="text-snow/60">Craft & People</Eyebrow>
          <Display as="h1" className="mt-6 max-w-3xl text-snow">
            Behind every piece is a hand.
          </Display>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-snow/80">
            Each textile carries the knowledge, attention and hand of the person who helped make it.
          </p>
        </Shell>
      </div>

      <img
        src={hands}
        alt="A weaver's hands guiding cotton yarn across a loom"
        loading="lazy"
        width={1600}
        height={1104}
        className="h-[70vh] w-full object-cover"
      />

      <Shell className="mt-28">
        <ol className="grid gap-px bg-slate/15 sm:grid-cols-2 lg:grid-cols-5">
          {stages.map((s, i) => (
            <Reveal as="li" key={s.index} delay={i * 70} className="bg-snow px-6 py-10">
              <p className="text-[0.625rem] tracking-[0.167em] text-stone">{s.index}</p>
              <h2 className="mt-4 text-[0.6875rem] uppercase tracking-[0.167em] text-slate">{s.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-stone">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </Shell>

      <Shell className="mt-28 grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <img
            src={loom}
            alt="Wooden handloom strung with fine cotton warp threads in a workshop"
            loading="lazy"
            width={1600}
            height={1104}
            className="w-full object-cover"
          />
        </Reveal>
        <Reveal delay={100}>
          <Eyebrow>The workshop</Eyebrow>
          <Display className="mt-5 text-slate">From the land of textile heritage.</Display>
          <p className="mt-8 max-w-md text-base leading-relaxed text-slate">
            Our textiles begin in India, where cotton, colour and craft have been shaped by generations of
            textile knowledge. The brand is rooted in the people, materials and techniques that give each
            piece its character.
          </p>
        </Reveal>
      </Shell>

      <Shell className="mt-28 grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <Eyebrow>Colour</Eyebrow>
          <Display className="mt-5 text-slate">Colour with intention.</Display>
          <p className="mt-8 max-w-md text-base leading-relaxed text-slate">
            Colour is chosen before it is applied: a fixed palette per design, no seasonal churn, no piece
            made in a shade we would not repeat. Dyehouse process details are recorded per batch and will be
            published here once verified — we make no claim we cannot evidence.
          </p>
          <div className="mt-10">
            <PillLink to="/traceability">See the journey</PillLink>
          </div>
        </Reveal>
        <Reveal delay={100} className="order-1 lg:order-2">
          <img
            src={dyeing}
            alt="Indigo and terracotta cotton skeins drying on a rail"
            loading="lazy"
            width={1600}
            height={1104}
            className="w-full object-cover"
          />
        </Reveal>
      </Shell>
    </div>
  );
}