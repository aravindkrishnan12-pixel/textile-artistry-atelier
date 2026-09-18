import { Reveal } from "@/components/Reveal";
import { Display, Eyebrow, Shell } from "@/components/ui-kit";

const reasons = [
  ["100% Organic Cotton", "Natural fibres chosen for softness, comfort and everyday use."],
  ["Artisanal Craftsmanship", "Thoughtful textile-making with details finished by skilled hands."],
  ["Designed in the Mediterranean", "Inspired by Mediterranean light, architecture, coastlines and colour."],
  ["Made to Last", "Created for repeated use, washing and years of everyday rituals."],
] as const;

export function WhyMaisonBain() {
  return (
    <section className="bg-slate py-28 md:py-36" aria-labelledby="why-maison-bain">
      <Shell>
        <Reveal className="max-w-2xl">
          <Eyebrow className="text-snow/60">Why Maison Bain</Eyebrow>
          <Display as="h2" id="why-maison-bain" className="mt-5 text-snow">
            Considered from fibre to finish.
          </Display>
        </Reveal>
        <dl className="mt-16 grid border-t border-snow/20 md:grid-cols-2">
          {reasons.map(([term, detail], index) => (
            <Reveal key={term} className="border-b border-snow/20 py-9 md:px-8 md:first:pl-0 md:odd:border-r" delay={index * 70}>
              <dt className="font-display text-2xl text-snow">{term}</dt>
              <dd className="mt-3 max-w-md text-sm leading-relaxed text-snow/70">{detail}</dd>
            </Reveal>
          ))}
        </dl>
      </Shell>
    </section>
  );
}