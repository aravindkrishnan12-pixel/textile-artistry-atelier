import { createFileRoute, Link } from "@tanstack/react-router";

import cottonMacro from "@/assets/cotton-macro.jpg";
import craftHands from "@/assets/craft-hands.jpg";
import craftLoom from "@/assets/craft-loom.jpg";
import dyeing from "@/assets/dyeing.jpg";
import heroArchitecture from "@/assets/hero-architecture.jpg";
import lifestyleBath from "@/assets/lifestyle-bath.jpg";
import lifestyleTerrace from "@/assets/lifestyle-terrace.jpg";
import { MonogramStudio } from "@/components/MonogramStudio";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { TraceJourney } from "@/components/TraceJourney";
import { Display, Eyebrow, PillLink, Shell } from "@/components/ui-kit";
import { stories } from "@/lib/journal";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Bain — Artisanal Organic Cotton Textiles" },
      {
        name: "description",
        content:
          "Artistic towels, bathrobes and beach textiles crafted from organic cotton and rooted in India's textile heritage.",
      },
      { property: "og:title", content: "Maison Bain — Artisanal Organic Cotton Textiles" },
      {
        property: "og:description",
        content:
          "Artistic towels, bathrobes and beach textiles crafted from organic cotton and rooted in India's textile heritage.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const artistic = products.filter((p) => p.family === "artistic");
const founding = [artistic[0]!, artistic[4]!, products.find((p) => p.family === "monogram")!];
const stages = ["Fibre", "Spinning", "Weaving", "Dyeing", "Finishing"];

function Index() {
  return (
    <>
      {/* 01 — Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img
          src={heroArchitecture}
          alt="Sunlit Mediterranean courtyard of limewashed plaster, travertine and still water"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate/40" />
        <img
          src={artistic[0]!.image}
          alt={`${artistic[0]!.name} — ${artistic[0]!.caption}`}
          className="pointer-events-none absolute right-[6%] top-1/2 hidden h-[68vh] -translate-y-1/2 object-contain lg:block"
        />
        <Shell className="relative pb-20 pt-40">
          <h1 className="max-w-2xl font-display text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[1.05] text-snow">
            The Art of Everyday
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-snow/85">
            Textiles made to be lived with. Artisanal towels in organic cotton, created between heritage and
            contemporary design.
          </p>
          <div className="mt-10">
            <PillLink to="/collection" tone="dark">
              Discover the collection
            </PillLink>
          </div>
          <p className="mt-14 flex flex-wrap gap-x-8 gap-y-2 text-[0.625rem] uppercase tracking-[0.167em] text-snow/70">
            <span>100% Organic Cotton</span>
            <span>Artisan Made</span>
            <span>India</span>
          </p>
        </Shell>
      </section>

      {/* 02 — Brand statement */}
      <section className="bg-parchment py-28 md:py-40">
        <Shell className="max-w-[720px] text-center">
          <Reveal>
            <Eyebrow>A towel, reimagined</Eyebrow>
            <Display className="mt-6 text-slate">Objects of everyday ritual.</Display>
            <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-slate">
              We believe everyday objects deserve the same consideration as the spaces they inhabit. Our
              textiles are created as pieces of functional art — expressive, tactile and made to become part
              of daily rituals.
            </p>
          </Reveal>
        </Shell>
      </section>

      {/* 03 — Founding collection */}
      <section className="bg-snow py-28 md:py-36">
        <Shell>
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>The Founding Collection</Eyebrow>
              <Display className="mt-5 max-w-xl text-slate">
                Artistic textiles for the rituals of everyday life.
              </Display>
            </div>
            <PillLink to="/collection">View all</PillLink>
          </Reveal>
          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-16 lg:grid-cols-3 lg:gap-x-12">
            {founding.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <ProductCard product={p} priority />
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      {/* 04 — Textiles as art */}
      <section className="bg-parchment py-28 md:py-36">
        <Shell>
          <Reveal className="max-w-xl">
            <Eyebrow>Artistic Collection</Eyebrow>
            <Display className="mt-5 text-slate">Textiles as art</Display>
            <p className="mt-6 text-base leading-relaxed text-slate">
              Inspired by coastlines, landscapes, colour and movement, each design turns an everyday textile
              into an expressive object.
            </p>
          </Reveal>
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
            {artistic.slice(0, 5).map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <Link to="/product/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="overflow-hidden bg-snow">
                    <img
                      src={p.image}
                      alt={`${p.name} — ${p.caption}`}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg text-slate">{p.name}</h3>
                  <p className="mt-1 text-xs text-stone">{p.caption}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-16">
            <PillLink to="/collection" search={{ filter: "artistic" } as never}>
              Explore the artistic collection
            </PillLink>
          </div>
        </Shell>
      </section>

      {/* 05 — Lifestyle / ownership */}
      <section className="relative">
        <img
          src={lifestyleBath}
          alt="A quiet coastal bathroom in limewashed plaster with folded cotton towels"
          loading="lazy"
          className="h-[85vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate/45" />
        <Shell className="absolute inset-0 flex flex-col justify-center">
          <Reveal className="max-w-lg">
            <Display className="text-snow">Made to be lived with.</Display>
            <p className="mt-8 space-y-1 text-base leading-relaxed text-snow/85">
              The towel after the first swim. The robe on a quiet morning. The familiar texture waiting
              beside the bath. Objects made not simply to be displayed — but to become part of your life.
            </p>
            <div className="mt-10">
              <PillLink to="/collection" tone="dark">
                Discover the collection
              </PillLink>
            </div>
          </Reveal>
        </Shell>
      </section>

      {/* 06 — Heritage */}
      <section className="bg-slate py-28 md:py-36">
        <Shell className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <img
              src={craftLoom}
              alt="Handloom strung with fine cotton warp threads in an Indian workshop"
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow className="text-snow/60">Origin</Eyebrow>
            <Display className="mt-5 text-snow">From the land of textile heritage</Display>
            <p className="mt-8 max-w-md text-base leading-relaxed text-snow/80">
              Our textiles begin in India, where cotton, colour and craft have been shaped by generations of
              textile knowledge. The brand is rooted in the people, materials and techniques that give each
              piece its character.
            </p>
            <div className="mt-10">
              <PillLink to="/craft" tone="dark">
                Discover our origin
              </PillLink>
            </div>
          </Reveal>
        </Shell>
      </section>

      {/* 07 — The people */}
      <section className="bg-snow py-28 md:py-36">
        <Shell>
          <Reveal className="max-w-xl">
            <Eyebrow>The People</Eyebrow>
            <Display className="mt-5 text-slate">Behind every piece is a hand.</Display>
            <p className="mt-6 text-base leading-relaxed text-slate">
              Each textile carries the knowledge, attention and hand of the person who helped make it.
            </p>
          </Reveal>
        </Shell>
        <Reveal className="mt-16">
          <img
            src={craftHands}
            alt="A weaver's hands guiding cotton yarn across a loom"
            loading="lazy"
            className="h-[70vh] w-full object-cover"
          />
        </Reveal>
        <Shell className="mt-16">
          <ol className="grid gap-px bg-slate/15 sm:grid-cols-2 lg:grid-cols-5">
            {stages.map((s, i) => (
              <li key={s} className="bg-snow px-6 py-8">
                <p className="text-[0.625rem] tracking-[0.167em] text-stone">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-[0.6875rem] uppercase tracking-[0.167em] text-slate">{s}</p>
              </li>
            ))}
          </ol>
        </Shell>
      </section>

      {/* 08 — Organic cotton */}
      <section className="bg-parchment py-28 md:py-36">
        <Shell className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow>The Material</Eyebrow>
            <Display className="mt-5 text-slate">100% organic cotton</Display>
            <p className="mt-6 font-display text-xl text-stone">Soft by nature. Considered by design.</p>
            <dl className="mt-12 grid gap-px bg-slate/15 sm:grid-cols-3">
              {[
                ["Material", "100% organic cotton"],
                ["Craft", "Artisanal textile production"],
                ["Feel", "Soft · absorbent · enduring"],
              ].map(([term, detail]) => (
                <div key={term} className="bg-parchment px-6 py-8">
                  <dt className="text-[0.625rem] uppercase tracking-[0.167em] text-stone">{term}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-slate">{detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={cottonMacro}
              alt="Macro study of raw organic cotton fibre and spun yarn"
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
        </Shell>
      </section>

      {/* 09 — Responsible colour */}
      <section className="relative">
        <img
          src={dyeing}
          alt="Skeins of dyed cotton yarn drying against a plaster wall"
          loading="lazy"
          className="h-[75vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate/50" />
        <Shell className="absolute inset-0 flex flex-col justify-center">
          <Reveal className="max-w-lg">
            <Display className="text-snow">Colour with intention.</Display>
            <p className="mt-8 text-base leading-relaxed text-snow/85">
              Colour is chosen before it is applied: a fixed palette per design, no seasonal churn, no piece
              made in a shade we would not repeat. Dyehouse process details are recorded per batch and
              published only once verified.
            </p>
          </Reveal>
        </Shell>
      </section>

      {/* 10 — Traceability */}
      <section className="bg-snow py-28 md:py-36">
        <Shell>
          <Reveal className="max-w-xl">
            <Eyebrow>Traceability</Eyebrow>
            <Display className="mt-5 text-slate">Know your piece.</Display>
          </Reveal>
          <div className="mt-14">
            <TraceJourney />
          </div>
          <div className="mt-14">
            <PillLink to="/traceability">Trace your piece</PillLink>
          </div>
        </Shell>
      </section>

      {/* 11 — Certifications */}
      <section className="bg-parchment py-24">
        <Shell>
          <Reveal>
            <Eyebrow>Certified with purpose</Eyebrow>
            <div className="mt-10 grid gap-px bg-slate/15 md:grid-cols-2">
              {[
                [
                  "Certification pathway",
                  "GOTS",
                  "Global Organic Textile Standard certification is a stated target for our organic cotton supply chain. Not yet held.",
                ],
                [
                  "Target standard",
                  "OEKO-TEX",
                  "Testing for harmful substances is part of our planned certification programme. Status published here once confirmed.",
                ],
              ].map(([label, name, body]) => (
                <div key={name} className="bg-parchment p-10">
                  <p className="text-[0.625rem] uppercase tracking-[0.167em] text-stone">{label}</p>
                  <h3 className="mt-4 font-display text-2xl text-slate">{name}</h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-slate">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Shell>
      </section>

      {/* 12 — Monogram */}
      <section className="bg-snow py-28 md:py-36">
        <Shell>
          <Reveal className="max-w-xl">
            <Eyebrow>Monogram Collection</Eyebrow>
            <Display className="mt-5 text-slate">Made yours.</Display>
            <p className="mt-6 text-base leading-relaxed text-slate">
              A quiet signature for pieces made personal.
            </p>
          </Reveal>
          <div className="mt-16">
            <MonogramStudio />
          </div>
        </Shell>
      </section>

      {/* 13 — Journal */}
      <section className="bg-parchment py-28 md:py-36">
        <Shell>
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Journal</Eyebrow>
              <Display className="mt-5 text-slate">Stories from the world of textile</Display>
            </div>
            <PillLink to="/journal">All stories</PillLink>
          </Reveal>
          <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-3">
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
                  <h3 className="mt-6 font-display text-2xl leading-snug text-slate">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{s.standfirst}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      {/* 14 — Final statement */}
      <section className="relative">
        <img
          src={lifestyleTerrace}
          alt="Folded cotton cloth on a travertine bench beside a still pool at dusk"
          loading="lazy"
          className="h-[80vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate/55" />
        <Shell className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <Reveal className="max-w-2xl">
            <Display className="text-snow">Some objects become part of your life.</Display>
            <p className="mt-8 text-base leading-relaxed text-snow/85">
              Made slowly. Designed with intention. Created to be lived with.
            </p>
            <div className="mt-10">
              <PillLink to="/collection" tone="dark">
                Discover the collection
              </PillLink>
            </div>
          </Reveal>
        </Shell>
      </section>
    </>
  );
}
