import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Display, Eyebrow, Shell } from "@/components/ui-kit";
import { faqGroups } from "@/lib/faq";

export function FaqSection() {
  return (
    <section className="bg-snow py-28 md:py-36" aria-labelledby="faq-heading">
      <Shell className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <Eyebrow>Questions &amp; Answers</Eyebrow>
          <Display as="h2" className="mt-5 text-slate" id="faq-heading">
            The details, considered.
          </Display>
        </div>
        <div className="space-y-12">
          {faqGroups.map((group) => (
            <section key={group.category} aria-labelledby={`faq-${group.category.toLowerCase().replaceAll(" ", "-").replace("&", "and")}`}>
              <h3 id={`faq-${group.category.toLowerCase().replaceAll(" ", "-").replace("&", "and")}`} className="text-[0.6875rem] uppercase tracking-[0.167em] text-stone">
                {group.category}
              </h3>
              <Accordion type="single" collapsible className="mt-4 border-t border-slate/15">
                {group.items.map((item) => (
                  <AccordionItem key={item.question} value={item.question} className="border-slate/15">
                    <AccordionTrigger className="py-5 text-left font-display text-xl font-normal text-slate hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="max-w-xl pb-6 text-sm leading-relaxed text-stone">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>
      </Shell>
    </section>
  );
}