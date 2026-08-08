import towel1 from "@/assets/towel-1.png.asset.json";
import towel2 from "@/assets/towel-2.png.asset.json";

import towel4 from "@/assets/pigmento-product.png.asset.json";
import towel5 from "@/assets/towel-5.png.asset.json";
import towel6 from "@/assets/towel-6.png.asset.json";

import towel8 from "@/assets/towel-8.png.asset.json";
import monogramBlank from "@/assets/monogram-blank.jpg";
import monogramTowel from "@/assets/monogram-towel.png.asset.json";
import robeProduct from "@/assets/robe-product.png.asset.json";

export type Family = "artistic" | "monogram";
export type Use = "bath" | "beach" | "bathrobe";

export interface Product {
  slug: string;
  name: string;
  family: Family;
  uses: Use[];
  price: number;
  image: string;
  caption: string;
  description: string;
  story: string;
  sizes: string[];
  personalisable?: boolean;
}

/** Indicative retail bands are taken from the brand's launch pricing guardrails. */
export const products: Product[] = [
  {
    slug: "sole-antico",
    name: "Sole Antico",
    family: "artistic",
    uses: ["beach"],
    price: 58,
    image: towel1.url,
    caption: "Sun, rays and palm",
    description:
      "A rising sun held between palm fronds and still water — drawn in terracotta, sand and deep sea blue.",
    story:
      "Sole Antico began as a study of late light falling across a shoreline: the sun low and heavy, the water gone dark beneath it. The composition is printed on a long organic cotton ground and finished with a hand-knotted fringe.",
    sizes: ["90 × 180 cm"],
  },
  {
    slug: "terrazza",
    name: "Terrazza",
    family: "artistic",
    uses: ["beach"],
    price: 62,
    image: towel2.url,
    caption: "Lemon tree and coast",
    description:
      "A painted terrace above the sea, lemons overhead and whitewashed houses stepping down to the water.",
    story:
      "Painted as a single view held from a shaded terrace at midday, Terrazza carries the deep cobalt of the Mediterranean against clay-washed stone.",
    sizes: ["90 × 180 cm"],
  },
  {
    slug: "pigmento",
    name: "Pigmento",
    family: "artistic",
    uses: ["beach", "bath"],
    price: 58,
    image: towel4.url,
    caption: "Abstract pigment study",
    description:
      "Broad strokes of indigo, sea green and burnt orange laid across an unbleached ground.",
    story:
      "A pigment study made with a palette knife and kept exactly as it was painted — no repetition, no correction, the movement of the hand left visible.",
    sizes: ["90 × 180 cm"],
  },
  {
    slug: "belvedere",
    name: "Belvedere",
    family: "artistic",
    uses: ["beach"],
    price: 64,
    image: towel5.url,
    caption: "Balustrade and bougainvillea",
    description:
      "A stone balustrade opening onto a painted coastline of sails, terracotta roofs and flowering vines.",
    story:
      "Belvedere is the most detailed piece in the founding collection — a full painted landscape carried edge to edge, finished with a striped fringe.",
    sizes: ["90 × 180 cm"],
  },
  {
    slug: "corrente",
    name: "Corrente",
    family: "artistic",
    uses: ["beach", "bath"],
    price: 56,
    image: towel6.url,
    caption: "Currents in indigo",
    description:
      "Ribbons of indigo, teal and sand moving in long waves across the length of the cloth.",
    story:
      "Corrente reduces water to its motion alone. The banded artwork was drawn to be read from any direction, folded or unfolded.",
    sizes: ["90 × 180 cm"],
  },
  {
    slug: "rosa-arcadia",
    name: "Rosa Arcadia",
    family: "artistic",
    uses: ["bath", "beach"],
    price: 44,
    image: towel8.url,
    caption: "Pink arch and pool",
    description:
      "A rose-plaster arch, a single palm and the flat blue of a pool at the hour before dusk.",
    story:
      "Rosa Arcadia is the quietest of the artistic pieces — an architectural composition in blush plaster, stone and water.",
    sizes: ["70 × 140 cm", "90 × 180 cm"],
  },
  {
    slug: "monogram-bath-towel",
    name: "Monogram Bath Towel",
    family: "monogram",
    uses: ["bath"],
    price: 42,
    image: monogramTowel.url,
    caption: "Undyed organic cotton",
    description:
      "An undyed organic cotton towel with hand-knotted fringe, finished with initials of your choosing.",
    story:
      "The plain counterpart to the artistic pieces: nothing on the cloth but weave, fringe and a quiet signature at the hem.",
    sizes: ["50 × 100 cm", "70 × 140 cm"],
    personalisable: true,
  },
  {
    slug: "monogram-bathrobe",
    name: "Monogram Bathrobe",
    family: "monogram",
    uses: ["bathrobe"],
    price: 140,
    image: robeProduct.url,
    caption: "Organic cotton robe",
    description:
      "A full-length organic cotton robe, cut generously, with initials placed at the chest.",
    story:
      "Made to order in the same organic cotton as the towels, in a weight intended to soften with each wash rather than wear thin.",
    sizes: ["S / M", "L / XL"],
    personalisable: true,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: 0 }).format(value);