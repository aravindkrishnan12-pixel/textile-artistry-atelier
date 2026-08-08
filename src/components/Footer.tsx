import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { Wordmark } from "@/components/Wordmark";
import { Shell } from "@/components/ui-kit";

export function Footer() {
  const [signed, setSigned] = useState(false);

  return (
    <footer className="bg-parchment py-20">
      <Shell>
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_1.4fr]">
          <FooterColumn title="Collection">
            <Link to="/collection" search={{ filter: "artistic" }} className={linkClass}>
              Artistic Collection
            </Link>
            <Link to="/collection" search={{ filter: "monogram" }} className={linkClass}>
              Monogram Collection
            </Link>
            <Link to="/collection" search={{ filter: "bath" }} className={linkClass}>
              Bath
            </Link>
            <Link to="/collection" search={{ filter: "beach" }} className={linkClass}>
              Beach
            </Link>
            <Link to="/collection" search={{ filter: "bathrobe" }} className={linkClass}>
              Bathrobes
            </Link>
          </FooterColumn>
          <FooterColumn title="The Brand">
            <FooterLink to="/story">Our Story</FooterLink>
            <FooterLink to="/craft">Craft & People</FooterLink>
            <FooterLink to="/traceability">Traceability</FooterLink>
            <FooterLink to="/journal">Journal</FooterLink>
          </FooterColumn>
          <FooterColumn title="Help">
            <FooterLink to="/story">Contact</FooterLink>
            <FooterLink to="/story">Shipping</FooterLink>
            <FooterLink to="/craft">Care</FooterLink>
            <FooterLink to="/traceability">FAQ</FooterLink>
          </FooterColumn>
          <FooterColumn title="Social">
            <a className="block py-1.5 text-sm text-slate hover:text-stone" href="https://instagram.com" rel="noreferrer noopener" target="_blank">Instagram</a>
            <a className="block py-1.5 text-sm text-slate hover:text-stone" href="https://pinterest.com" rel="noreferrer noopener" target="_blank">Pinterest</a>
          </FooterColumn>

          <div>
            <p className="text-[0.6875rem] uppercase tracking-[0.167em] text-stone">Private Notes</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate">
              Sign up for stories from the world of textile, craft and design.
            </p>
            <form
              className="mt-6 flex items-center gap-4 border-b border-slate/25 pb-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSigned(true);
              }}
            >
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="Email address"
                className="w-full bg-transparent text-sm text-slate placeholder:text-stone focus:outline-none"
              />
              <button type="submit" className="text-[0.6875rem] uppercase tracking-[0.167em] text-slate hover:text-stone">
                Sign up
              </button>
            </form>
            {signed && <p className="mt-3 text-xs text-stone">Thank you — we will write soon.</p>}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center gap-6 border-t border-slate/15 pt-10 md:flex-row md:justify-between">
          <Wordmark />
          <p className="text-[0.625rem] uppercase tracking-[0.167em] text-stone">
            © {new Date().getFullYear()} Maison Bain · Made in India
          </p>
        </div>
      </Shell>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-[0.6875rem] uppercase tracking-[0.167em] text-stone">{title}</h2>
      <div className="mt-5">{children}</div>
    </div>
  );
}

const linkClass = "block py-1.5 text-sm text-slate transition-colors hover:text-stone";

function FooterLink(props: React.ComponentProps<typeof Link>) {
  return <Link {...props} className={linkClass} />;
}