# Maison Bain — Luxury Home Textile D2C Site

A quiet, editorial, photography-led brand site where the eight uploaded towel artworks are the only colour. Design tokens come straight from the uploaded style reference; nothing is reinterpreted into generic e-commerce.

## Design system (from DESIGN.md)

- Colours: Mountain Slate `#193741` (dominant structure and dark surfaces), Deep Teal `#1d414d` (borders and hover only), Honey Gold `#eac486` (decorative only — monogram and small marks, never a CTA fill), Snow White `#ffffff`, Warm Parchment `#ebe7e1`, Stone Gray `#8c9ba0`.
- Type: Cormorant Garamond (substitute for ITC Giovanni) for display headlines 28px and above only; Nunito Sans (Avenir substitute) for all UI, navigation, body, buttons and metadata. Uppercase always tracked 0.125–0.167em. Fonts loaded via a `<link>` in the root route.
- Shape: 80px pill radius on buttons and badges only. No shadows anywhere — depth via colour contrast and 1px hairlines. Section rhythm 80–160px. 1200px max content width. Clamp-based responsive type.
- Buttons: outlined teal pill on light surfaces, ghost white pill on dark. No filled colour buttons.
- Surface rhythm: white → parchment → slate bands, alternating.

## Product and image assets

- The 8 uploaded towel images become the real catalogue, referenced as CDN asset pointers — never redrawn, recoloured or cropped into.
- Founding capsule (focused, per the strategy doc): Mediterranean Terrace, Amalfi Balustrade, Sun & Palm, Tidal Shore, Deep Current, Pink Arcadia, Bloom, Pigment Study — split across ARTISTIC / BEACH / BATH / BATHROBE plus a MONOGRAM family.
- Art-directed imagery generated for: hero architectural setting, coastal-home lifestyle, workshop and loom, artisan hands, cotton macro, dyeing, journal covers. Warm natural light, limewash, travertine, linen — no resort stock look, no green "eco" imagery.
- Monogram: an original typographic mark — Cormorant initials in Honey Gold on a plain organic-cotton towel. No existing brand's marks.

## Pages

1. **Home** — the 14 specified sections: hero, brand statement, founding collection, textiles as art, lifestyle, textile-heritage (slate), the people with the 01–05 numbered sequence, organic cotton triad, responsible colour, interactive 7-stage traceability, certification, monogram personalisation, journal, final statement, footer.
2. **Collection** — editorial header, filter row (ALL / ARTISTIC / MONOGRAM / BATH / BEACH / BATHROBE), sparse grid with hairline separators, quiet hover (slow image scale plus caption shift).
3. **Product detail** — large sticky gallery left, restrained information right (name, editorial line, price, design, size, quantity, ADD TO BAG), then hairline-divided sections: The Story, Material, Craft, Origin, Care, Traceability, with a "Trace Your Piece" entry point.
4. **Our Story**, **Craft & People**, **Traceability** (full interactive journey), **Journal** (index plus article template).
5. **Cart drawer** — slides from the right; thumbnails, quantity, subtotal, CONTINUE SHOPPING / CHECKOUT (prototype notice, no payment). Persists in localStorage.
6. **Header** — transparent over the hero, fading to parchment on scroll; desktop Menu / Collection / Story left, wordmark centre, Search and Bag (0) right. Mobile: hamburger, centred wordmark, bag, full-screen overlay menu.

## Content honesty

Pricing bands come from the strategy document (towel 35–45€, set 110–140€, bathrobe 120–160€, beach towel 45–65€). Certifications are labelled **CERTIFICATION PATHWAY / TARGET STANDARD** (GOTS, OEKO-TEX) because the document lists them as positioning goals rather than obtained status. No invented dye claims, water figures, artisan names or factory names — traceability stages use clearly marked representative placeholder copy, structured so real per-product provenance can attach later.

## Technical notes

- TanStack Start routes: `/`, `/collection`, `/product/$slug`, `/story`, `/craft`, `/traceability`, `/journal`, `/journal/$slug`. The placeholder index is replaced by the home page.
- Tokens defined in `src/styles.css` via `@theme inline`; no hardcoded colour utilities in components.
- Cart state in a React context provider mounted in `__root.tsx`; the product catalogue is a typed local data module shaped so provenance data can attach per SKU later.
- Motion: fade and slow reveal on scroll via IntersectionObserver, 600–900ms ease-out, respecting `prefers-reduced-motion`. No parallax.
- Per-route `head()` with unique title, description and og tags; semantic landmarks, one H1 per page, alt text, visible focus rings, keyboard-operable drawer, menu and disclosures; below-fold images lazy-loaded.