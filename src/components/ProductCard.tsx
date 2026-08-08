import { Link } from "@tanstack/react-router";

import { formatPrice, type Product } from "@/lib/products";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className="group block"
      aria-label={`${product.name} — discover`}
    >
      <div className="overflow-hidden bg-parchment">
        <img
          src={product.image}
          alt={`${product.name} — ${product.caption}`}
          loading={priority ? "eager" : "lazy"}
          className="aspect-[3/4] w-full object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-5 transition-transform duration-700 ease-out group-hover:translate-x-1">
        <h3 className="font-display text-xl text-slate">{product.name}</h3>
        <p className="mt-1 max-w-sm text-sm leading-relaxed text-stone">{product.caption}</p>
        <p className="mt-3 text-[0.6875rem] uppercase tracking-[0.167em] text-slate">
          {formatPrice(product.price)}
          <span className="ml-4 text-stone group-hover:text-slate">Discover</span>
        </p>
      </div>
    </Link>
  );
}