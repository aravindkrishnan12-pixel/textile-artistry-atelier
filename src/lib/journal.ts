import loom from "@/assets/craft-loom.jpg";
import hands from "@/assets/craft-hands.jpg";
import cotton from "@/assets/cotton-macro.jpg";

export interface Story {
  slug: string;
  title: string;
  standfirst: string;
  image: string;
  alt: string;
  body: string[];
}

export const stories: Story[] = [
  {
    slug: "the-land-of-textile-heritage",
    title: "The Land of Textile Heritage",
    standfirst: "Where cotton, colour and craft have been shaped by generations of textile knowledge.",
    image: loom,
    alt: "Wooden handloom strung with cotton warp threads",
    body: [
      "India has woven cotton for longer than most nations have existed. What survives is not only technique but a way of judging cloth by hand — weight, drape, the sound it makes when folded.",
      "Our production sits inside that lineage rather than beside it. We work with textile partners whose looms and finishing are already tuned to fine organic cotton, and design to what they do best.",
      "This piece will be expanded with photography and interviews from our production partners once those relationships are documented and cleared for publication.",
    ],
  },
  {
    slug: "the-art-of-the-towel",
    title: "The Art of the Towel",
    standfirst: "On treating the most-touched object in a home as a surface worth designing.",
    image: cotton,
    alt: "Macro study of raw cotton fibre and spun yarn",
    body: [
      "A towel is handled more often than any painting on the wall. It is the object of the first minute after swimming and the last minute before sleep.",
      "Each Maison Bain design begins as an artwork — painted, then carried onto cloth without correction. The composition is fitted to the proportions of the piece, never cropped to fit a print bed.",
      "The result is a functional object that carries the weight of a made image, and softens with every wash.",
    ],
  },
  {
    slug: "from-cotton-to-cloth",
    title: "From Cotton to Cloth",
    standfirst: "Seven stages between a field of organic cotton and a folded piece in your home.",
    image: hands,
    alt: "A weaver's hands working cotton yarn on a loom",
    body: [
      "Fibre, spinning, weaving, dyeing, craft, finishing, home. Each stage changes the material, and each is a place where quality is either built in or lost.",
      "We record what we can verify per production batch and publish it against the piece. Where information is not yet confirmed, we say so rather than fill the gap.",
      "Our traceability page carries the full journey and will grow more specific with every batch we produce.",
    ],
  },
];

export const getStory = (slug: string) => stories.find((s) => s.slug === slug);