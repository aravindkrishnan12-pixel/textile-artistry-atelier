export interface Stage {
  index: string;
  title: string;
  body: string;
}

/**
 * Representative provenance content. Each stage is shaped so verified,
 * product-specific supplier data can replace the body text later.
 */
export const journey: Stage[] = [
  {
    index: "01",
    title: "Cotton",
    body: "Organic cotton, grown in India. Farm and region details are recorded per production batch and published here once verified.",
  },
  {
    index: "02",
    title: "Spinning",
    body: "Fibre is cleaned, carded and spun into yarn. Mill details are recorded per batch and will be listed with the piece.",
  },
  {
    index: "03",
    title: "Weaving",
    body: "Yarn is woven into terry and flat-weave cloth by our textile partner in India.",
  },
  {
    index: "04",
    title: "Dyeing",
    body: "Colour is applied to the finished cloth. Dyehouse and process details are documented per batch; no claims are made here until they are confirmed.",
  },
  {
    index: "05",
    title: "Craft",
    body: "Artwork is applied, hems are closed and fringes are knotted by hand.",
  },
  {
    index: "06",
    title: "Finishing",
    body: "Each piece is washed, inspected, folded and packed without plastic.",
  },
  {
    index: "07",
    title: "Your home",
    body: "Shipped from Europe to your door, with a batch reference that links back to this journey.",
  },
];