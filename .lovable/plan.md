# Maison Bain catalogue and product experience enhancements

## Planned files

- `src/lib/products.ts` — extend the existing product model with `bed-linen`, structured quality, care, delivery, returns, and recommendation metadata; enrich every current product without adding invented products, prices, sizes, or images.
- `src/lib/faq.ts` — add one reusable, carefully qualified FAQ data source covering products, craft, monogramming, shipping, and returns.
- `src/components/FaqSection.tsx` — present the FAQ through the existing accessible accordion and Maison Bain typography/tokens.
- `src/components/WhyMaisonBain.tsx` — create a reusable editorial brand-differentiator section using the approved four themes.
- `src/components/MonogramStudio.tsx` — retain product choice, initials, treatment, preview, and add-to-bag behavior while refining its atelier presentation, labels, selection states, and made-to-order/gift wording.
- `src/routes/collection.tsx` — add the ordered filters All, Artistic, Bath, Beach, Bed Linen, Bathrobes, Monogram, and Gifting; show restrained Bed Linen and Gifting placeholders when those empty categories are selected; keep every current product filter working.
- `src/routes/product.$slug.tsx` — add structured quality specifications near price, subtle purchase trust information, data-driven care/delivery/returns copy, and context-ranked recommendations while preserving imagery, sizing, monogramming, quantity, cart, traceability, and canonical metadata.
- `src/routes/index.tsx` — integrate Bed Linen, Why Maison Bain, the strengthened monogram atelier, Gifting, and FAQ into the current editorial sequence without removing existing sections.
- `src/components/Footer.tsx` — expose Bed Linen and Gifting through the existing collection navigation.
- Existing content routes with incomplete leaf metadata (`index`, `collection`, `story`, `craft`, `traceability`, and journal routes as needed) — add route-level `og:type` and `twitter:card` only where missing, preserving all current titles, descriptions, canonicals, and URLs.

## Implementation approach

1. **Product architecture**
   - Extend `Use` with `bed-linen`; add optional typed fields such as `gsm`, `material`, `features`, `care`, `recommendationTags`, `deliveryInfo`, and `returnInfo`.
   - Store the requested 600 GSM and quality claims once per current product rather than repeating them in page markup.
   - Keep the current `Family`, slugs, pricing, image assets, cart shape, and lookup API compatible.

2. **Collection framework**
   - Retain one product system and URL-search filtering.
   - Empty Bed Linen and Gifting states will be intentional editorial placeholders, with no fake SKU, price, image, specification, or availability promise.
   - Collection metadata will acknowledge the expanded home-textile direction without pretending products already exist.

3. **Product detail hierarchy**
   - Keep the existing two-column image/sticky-information composition.
   - Insert a compact editorial specification treatment after price, then preserve size, monogram, quantity, and Add to Bag.
   - Place six understated trust items beside the purchase flow; exact timelines and return windows remain qualified.
   - Continue detailed story, care, origin, and traceability content below.

4. **Recommendations**
   - Rank products by shared use, family, recommendation tags, and personalisation compatibility.
   - Exclude the current product, return up to three items, and use same-family products only as the fallback.

5. **Homepage and reusable editorial content**
   - Place Why Maison Bain near the existing material/craft narrative.
   - Introduce Bed Linen and Gifting as concise future-category moments within the existing flow.
   - Reframe the current `MonogramStudio` as “Made Personal,” not as a duplicate experience.
   - Add the reusable FAQ near the closing editorial content, with concise answers and no unsupported certification, delivery, or return claims.

6. **Accessibility and responsive behavior**
   - Preserve semantic headings, labels, keyboard-operable accordion and controls, visible focus states, alt text, and reduced-motion handling.
   - Keep two-column product layouts only at large widths; specifications, trust content, filters, recommendations, FAQ, and monogram controls will collapse without horizontal overflow.

## Validation

- Verify `/`, `/collection`, every current `/product/$slug`, and existing content routes still render.
- Test collection filters, empty Bed Linen/Gifting treatments, product selection, quantity controls, monogram choices/preview, Add to Bag, cart updates, accordion keyboard behavior, and recommendation links.
- Check at approximately 375px, 430px, 768px, and 1440px.
- Use the project’s automated type/build checks and run the configured lint command; resolve all introduced errors before completion.
