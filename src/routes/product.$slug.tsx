import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";

import lifestyleJetty from "@/assets/lifestyle-poolchair.jpeg.asset.json";
import lifestyleCove from "@/assets/lifestyle-line.jpeg.asset.json";
import soleAnticoJetty from "@/assets/lifestyle-jetty-boat.jpeg.asset.json";
import soleAnticoCliff from "@/assets/lifestyle-cliff.jpeg.asset.json";
import pigmentoBoat from "@/assets/pigmento-boat.jpeg.asset.json";
import pigmentoShore from "@/assets/pigmento-shore.jpeg.asset.json";
import correnteShore from "@/assets/corrente-shore.jpeg.asset.json";
import correnteSky from "@/assets/corrente-sky.jpeg.asset.json";
import belvedereArch from "@/assets/belvedere-arch.jpeg.asset.json";
import belvedereRock from "@/assets/belvedere-rock.jpeg.asset.json";
import monogramArch from "@/assets/monogram-arch.jpeg.asset.json";
import monogramDock from "@/assets/monogram-dock.jpeg.asset.json";
import { TraceJourney } from "@/components/TraceJourney";
import { Display, Eyebrow, PillButton, PillLink, Shell } from "@/components/ui-kit";
import { useCart } from "@/lib/cart";
import { formatPrice, getProduct, products, type Product } from "@/lib/products";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Piece not found — Maison Bain" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — Maison Bain` },
        { name: "description", content: product.description },
        { property: "og:title", content: `${product.name} — Maison Bain` },
        { property: "og:description", content: product.description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/product/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/product/${params.slug}` }],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const { add } = useCart();
  const [size, setSize] = useState(product.sizes[0]!);
  const [quantity, setQuantity] = useState(1);
  const [initials, setInitials] = useState("");

  const related = products.filter((p) => p.slug !== product.slug && p.family === product.family).slice(0, 3);

  const isSoleAntico = product.slug === "sole-antico";
  const isPigmento = product.slug === "pigmento";
  const isCorrente = product.slug === "corrente";
  const isBelvedere = product.slug === "belvedere";
  const isMonogramTowel = product.slug === "monogram-bath-towel";
  const heroImage = isPigmento
    ? { url: pigmentoBoat.url, alt: "Pigmento beach towel held open on the deck of a sailboat above turquoise water" }
    : { url: product.image, alt: `${product.name} — ${product.caption}` };
  const lifestyleOne = isMonogramTowel
    ? { url: monogramArch.url, alt: "Monogrammed Maison Bain towel wrapped at the waist beneath a terracotta arch" }
    : isBelvedere
    ? { url: belvedereArch.url, alt: "Belvedere beach towel wrapped at the waist beneath a terracotta arch" }
    : isCorrente
    ? { url: correnteShore.url, alt: "Corrente beach towel wrapped over the shoulders at the shoreline" }
    : isPigmento
    ? { url: pigmentoShore.url, alt: "Pigmento beach towel wrapped around the shoulders at the water's edge" }
    : isSoleAntico
    ? { url: soleAnticoJetty.url, alt: "Sole Antico beach towel wrapped around the shoulders on a wooden jetty above a calm bay" }
    : { url: lifestyleJetty.url, alt: "Beach towel draped over a teak deck chair beside a poolside terrace" };
  const lifestyleTwo = isMonogramTowel
    ? { url: monogramDock.url, alt: "Monogrammed Maison Bain towel folded on a jetty beside a yellow and white swim ring" }
    : isBelvedere
    ? { url: belvedereRock.url, alt: "Belvedere beach towel draped over the shoulder against a sunlit limestone cliff" }
    : isCorrente
    ? { url: correnteSky.url, alt: "Corrente beach towel held open against a clear blue sky" }
    : isPigmento
    ? { url: product.image, alt: `${product.name} — ${product.caption}` }
    : isSoleAntico
    ? { url: soleAnticoCliff.url, alt: "Sole Antico beach towel held open beside a rocky Mediterranean coastline" }
    : { url: lifestyleCove.url, alt: "Beach towel hung on a line above a rocky Mediterranean cove" };

  return (
    <div className="bg-snow pb-32 pt-32">
      <Shell className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div className="space-y-3">
          <img
            src={heroImage.url}
            alt={heroImage.alt}
            className="w-full bg-parchment object-contain"
          />
          <img
            src={lifestyleOne.url}
            alt={lifestyleOne.alt}
            loading="lazy"
            className="w-full object-cover"
          />
          <img
            src={lifestyleTwo.url}
            alt={lifestyleTwo.alt}
            loading="lazy"
            className="w-full object-cover"
          />
        </div>

        <div className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>{product.family === "monogram" ? "Monogram Collection" : "Artistic Collection"}</Eyebrow>
          <Display as="h1" className="mt-5 text-slate">
            {product.name}
          </Display>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate">{product.description}</p>
          <p className="mt-8 text-lg text-slate">{formatPrice(product.price)}</p>

          <div className="mt-10">
            <p className="text-[0.6875rem] uppercase tracking-[0.167em] text-stone">Size</p>
            <div className="mt-4 flex flex-wrap gap-6">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={cn(
                    "border-b pb-1 text-[0.6875rem] uppercase tracking-[0.167em] transition-colors",
                    s === size ? "border-slate text-slate" : "border-transparent text-stone hover:text-slate",
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {product.personalisable && (
            <div className="mt-10">
              <label htmlFor="pdp-initials" className="text-[0.6875rem] uppercase tracking-[0.167em] text-stone">
                Monogram (optional)
              </label>
              <input
                id="pdp-initials"
                value={initials}
                maxLength={3}
                placeholder="ABC"
                onChange={(e) => setInitials(e.target.value.replace(/[^a-zA-Z]/g, "").toUpperCase())}
                className="mt-3 block w-40 border-b border-slate/30 bg-transparent pb-2 font-display text-2xl uppercase tracking-[0.2em] text-slate placeholder:text-stone/50 focus:border-slate focus:outline-none"
              />
            </div>
          )}

          <div className="mt-10">
            <p className="text-[0.6875rem] uppercase tracking-[0.167em] text-stone">Quantity</p>
            <div className="mt-4 inline-flex items-center gap-5 border border-slate/20 px-4 py-2">
              <button aria-label="Decrease quantity" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                −
              </button>
              <span className="tabular-nums text-sm text-slate">{quantity}</span>
              <button aria-label="Increase quantity" onClick={() => setQuantity((q) => q + 1)}>
                +
              </button>
            </div>
          </div>

          <div className="mt-12">
            <PillButton
              onClick={() =>
                add(
                  {
                    slug: product.slug,
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    size,
                    ...(product.personalisable && initials ? { monogram: initials } : {}),
                  },
                  quantity,
                )
              }
            >
              Add to bag
            </PillButton>
          </div>

          <dl className="mt-16 border-t border-slate/15">
            <Row term="The Story" detail={product.story} />
            <Row term="Material" detail="100% organic cotton." />
            <Row term="Craft" detail="Artisanal textile production in India; hems and fringes finished by hand." />
            <Row term="Origin" detail="Woven, dyed and finished in India. Batch details recorded per production run." />
            <Row term="Care" detail="Machine wash cool with like colours. Tumble dry low. No bleach, no softener." />
            <Row
              term="Traceability"
              detail="Seven stages from cotton to your home, documented per batch. Representative content until batch data is verified."
            />
          </dl>

          <div className="mt-10">
            <PillLink to="/traceability">Trace your piece</PillLink>
          </div>
        </div>
      </Shell>

      <div className="mt-32 bg-parchment py-24">
        <Shell>
          <Eyebrow>Know your piece</Eyebrow>
          <div className="mt-10">
            <TraceJourney />
          </div>
        </Shell>
      </div>

      {related.length > 0 && (
        <Shell className="mt-28">
          <Eyebrow>Also in this collection</Eyebrow>
          <div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} to="/product/$slug" params={{ slug: p.slug }} className="group block">
                <div className="overflow-hidden bg-parchment">
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.caption}`}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-contain transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                  />
                </div>
                <h2 className="mt-4 font-display text-lg text-slate">{p.name}</h2>
              </Link>
            ))}
          </div>
        </Shell>
      )}
    </div>
  );
}

function Row({ term, detail }: { term: string; detail: string }) {
  return (
    <div className="border-b border-slate/15 py-6">
      <dt className="text-[0.6875rem] uppercase tracking-[0.167em] text-stone">{term}</dt>
      <dd className="mt-3 max-w-md text-sm leading-relaxed text-slate">{detail}</dd>
    </div>
  );
}