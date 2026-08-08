import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Wordmark } from "@/components/Wordmark";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

const links = [
  { to: "/collection", label: "Collection" },
  { to: "/story", label: "Our Story" },
  { to: "/craft", label: "Craft & People" },
  { to: "/traceability", label: "Traceability" },
  { to: "/journal", label: "Journal" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, open } = useCart();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const solid = scrolled || !overHero;
  const text = solid ? "text-slate" : "text-snow";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-700",
        solid ? "bg-parchment/95 backdrop-blur-[2px]" : "bg-transparent",
      )}
    >
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-5 md:px-10">
        <div className={cn("flex min-w-0 items-center gap-8", text)}>
          <button
            onClick={() => setMenuOpen(true)}
            className="flex shrink-0 items-center gap-2 text-[0.6875rem] uppercase tracking-[0.167em] lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" strokeWidth={1.25} />
          </button>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-[0.6875rem] uppercase tracking-[0.167em] hover:opacity-60"
            >
              Menu
            </button>
            <Link to="/collection" className="text-[0.6875rem] uppercase tracking-[0.167em] hover:opacity-60">
              Collection
            </Link>
            <Link to="/story" className="text-[0.6875rem] uppercase tracking-[0.167em] hover:opacity-60">
              Story
            </Link>
          </nav>
        </div>

        <Link to="/" aria-label="Maison Bain — home" className="justify-self-center">
          <Wordmark tone={solid ? "slate" : "snow"} />
        </Link>

        <div className={cn("flex items-center justify-end gap-6", text)}>
          <Link
            to="/collection"
            aria-label="Search the collection"
            className="hidden items-center gap-2 text-[0.6875rem] uppercase tracking-[0.167em] hover:opacity-60 sm:flex"
          >
            <Search className="h-4 w-4" strokeWidth={1.25} />
            <span className="hidden md:inline">Search</span>
          </Link>
          <button
            onClick={open}
            className="text-[0.6875rem] uppercase tracking-[0.167em] hover:opacity-60"
            aria-label={`Open bag, ${count} items`}
          >
            Bag ({count})
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-slate transition-opacity duration-500",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between px-6 py-5 md:px-10">
          <Wordmark tone="snow" />
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-snow"
            tabIndex={menuOpen ? 0 : -1}
          >
            <X className="h-5 w-5" strokeWidth={1.25} />
          </button>
        </div>
        <nav className="mt-12 flex flex-col gap-6 px-6 md:px-10" aria-label="Menu">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              tabIndex={menuOpen ? 0 : -1}
              className="font-display text-[clamp(2rem,7vw,3.5rem)] leading-tight text-snow hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}