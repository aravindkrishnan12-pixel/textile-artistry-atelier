export interface FaqGroup {
  category: string;
  items: Array<{ question: string; answer: string }>;
}

export const faqGroups: FaqGroup[] = [
  {
    category: "Products",
    items: [
      { question: "What is Maison Bain made from?", answer: "Maison Bain textiles are made from 100% organic cotton, chosen for softness, comfort and everyday use." },
      { question: "What does 600 GSM mean?", answer: "GSM measures textile weight. At 600 GSM, our current pieces have a dense, substantial feel designed for softness and absorbency." },
      { question: "Are the products soft and absorbent?", answer: "Yes. The cotton and considered weave are selected to feel soft while absorbing efficiently." },
      { question: "Do Maison Bain towels dry quickly?", answer: "The weave is designed to dry comfortably between uses when hung with space for air to circulate." },
      { question: "How should I care for my Maison Bain textiles?", answer: "Machine wash cool with like colours, tumble dry low, and avoid bleach and fabric softener." },
      { question: "Are the products machine washable?", answer: "Yes. Follow the care instructions shown on the product page and sewn label." },
    ],
  },
  {
    category: "Craft & Origin",
    items: [
      { question: "Where are Maison Bain textiles made?", answer: "Our current textiles are woven, dyed and finished in India with artisanal textile partners." },
      { question: "What does artisanal craftsmanship mean?", answer: "It means thoughtful textile-making, with details such as hems and fringes finished by skilled hands." },
      { question: "Are Maison Bain products made from organic cotton?", answer: "Yes. Our current collection is made from 100% organic cotton. We do not claim certifications that have not been confirmed." },
    ],
  },
  {
    category: "Monogram",
    items: [
      { question: "Can I personalise my product?", answer: "Selected pieces can be personalised with a monogram. Eligible products are clearly marked on their product page." },
      { question: "How many initials can I add?", answer: "The current monogram service accepts up to three letters." },
      { question: "Are personalised pieces made to order?", answer: "Yes. Personalised pieces are made to order for a distinctly personal finish." },
    ],
  },
  {
    category: "Shipping",
    items: [
      { question: "Do you ship worldwide?", answer: "Worldwide delivery is available. Destination availability and charges are confirmed at checkout." },
      { question: "How long does delivery take?", answer: "Delivery estimates are provided at checkout and may vary by destination and whether a piece is made to order." },
    ],
  },
  {
    category: "Returns",
    items: [
      { question: "Can I return my order?", answer: "Returns are available subject to the applicable return terms shown before purchase." },
      { question: "Are personalised items eligible for return?", answer: "Personalised pieces are made to order. Please review the applicable return terms before purchasing." },
    ],
  },
];