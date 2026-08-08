import { useState } from "react";

import monogramBlank from "@/assets/monogram-blank.jpg";
import { PillButton, Eyebrow } from "@/components/ui-kit";
import { useCart } from "@/lib/cart";
import { products } from "@/lib/products";
import { cn } from "@/lib/utils";

const treatments = [
  { id: "serif", label: "Serif", className: "font-display" },
  { id: "initialed", label: "Spaced", className: "font-display tracking-[0.3em]" },
  { id: "sans", label: "Sans", className: "font-sans text-[0.7em] tracking-[0.3em]" },
] as const;

const monogramProducts = products.filter((p) => p.personalisable);

export function MonogramStudio() {
  const [initials, setInitials] = useState("MB");
  const [treatment, setTreatment] = useState<(typeof treatments)[number]["id"]>("serif");
  const [slug, setSlug] = useState(monogramProducts[0]!.slug);
  const { add } = useCart();

  const product = monogramProducts.find((p) => p.slug === slug)!;
  const active = treatments.find((t) => t.id === treatment)!;

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div className="relative bg-parchment">
        <img
          src={monogramBlank}
          alt="Undyed organic cotton towel, folded, ready for monogramming"
          loading="lazy"
          width={1200}
          height={1200}
          className="w-full object-cover"
        />
        <span
          aria-hidden
          className={cn(
            "absolute bottom-[22%] left-1/2 -translate-x-1/2 text-[clamp(1.5rem,4vw,2.5rem)] uppercase text-gold transition-opacity duration-700",
            active.className,
          )}
          style={{ textShadow: "0 0 1px rgba(25,55,65,0.25)" }}
        >
          {initials || "—"}
        </span>
      </div>

      <div>
        <Eyebrow>Step 01 · Choose a piece</Eyebrow>
        <div className="mt-4 flex flex-wrap gap-6">
          {monogramProducts.map((p) => (
            <button
              key={p.slug}
              onClick={() => setSlug(p.slug)}
              className={cn(
                "border-b pb-1 text-[0.6875rem] uppercase tracking-[0.167em] transition-colors",
                p.slug === slug ? "border-slate text-slate" : "border-transparent text-stone hover:text-slate",
              )}
            >
              {p.name}
            </button>
          ))}
        </div>

        <Eyebrow className="mt-10">Step 02 · Enter initials</Eyebrow>
        <label htmlFor="initials" className="sr-only">
          Initials
        </label>
        <input
          id="initials"
          value={initials}
          maxLength={3}
          onChange={(e) => setInitials(e.target.value.replace(/[^a-zA-Z]/g, "").toUpperCase())}
          className="mt-4 w-40 border-b border-slate/30 bg-transparent pb-2 font-display text-3xl uppercase tracking-[0.2em] text-slate focus:outline-none focus:border-slate"
        />

        <Eyebrow className="mt-10">Step 03 · Treatment</Eyebrow>
        <div className="mt-4 flex flex-wrap gap-6">
          {treatments.map((t) => (
            <button
              key={t.id}
              onClick={() => setTreatment(t.id)}
              className={cn(
                "border-b pb-1 text-[0.6875rem] uppercase tracking-[0.167em] transition-colors",
                t.id === treatment ? "border-slate text-slate" : "border-transparent text-stone hover:text-slate",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-12">
          <PillButton
            onClick={() =>
              add({
                slug: product.slug,
                name: product.name,
                image: product.image,
                price: product.price,
                size: product.sizes[0]!,
                ...(initials ? { monogram: initials } : {}),
              })
            }
          >
            Add to bag
          </PillButton>
          <p className="mt-4 text-xs text-stone">
            Personalised pieces are made to order. Prototype preview — no payment is taken.
          </p>
        </div>
      </div>
    </div>
  );
}