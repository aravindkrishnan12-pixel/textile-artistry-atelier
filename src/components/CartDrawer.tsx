import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import { PillButton, pillLight } from "@/components/ui-kit";
import { cn } from "@/lib/utils";

export function CartDrawer() {
  const { isOpen, close, lines, subtotal, setQuantity, remove } = useCart();
  const panelRef = useRef<HTMLDivElement>(null);
  const [checkoutNote, setCheckoutNote] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  return (
    <div className={cn("fixed inset-0 z-60", isOpen ? "" : "pointer-events-none")} aria-hidden={!isOpen}>
      <button
        tabIndex={isOpen ? 0 : -1}
        aria-label="Close bag"
        onClick={close}
        className={cn(
          "absolute inset-0 bg-slate/40 transition-opacity duration-500",
          isOpen ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-label="Shopping bag"
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-[26rem] flex-col bg-snow transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-slate/15 px-6 py-5">
          <p className="text-[0.6875rem] uppercase tracking-[0.167em] text-slate">
            Bag ({lines.reduce((n, l) => n + l.quantity, 0)})
          </p>
          <button
            onClick={close}
            className="text-[0.6875rem] uppercase tracking-[0.167em] text-stone hover:text-slate"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          {lines.length === 0 ? (
            <p className="py-16 font-display text-2xl text-slate">Your bag is empty.</p>
          ) : (
            <ul>
              {lines.map((line) => (
                <li key={line.id} className="flex gap-4 border-b border-slate/10 py-6">
                  <img
                    src={line.image}
                    alt={line.name}
                    loading="lazy"
                    className="h-28 w-20 bg-parchment object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-lg text-slate">{line.name}</p>
                    <p className="mt-1 text-[0.6875rem] uppercase tracking-[0.167em] text-stone">{line.size}</p>
                    {line.monogram && (
                      <p className="mt-1 text-[0.6875rem] uppercase tracking-[0.167em] text-stone">
                        Monogram · {line.monogram}
                      </p>
                    )}
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-3 border border-slate/20 px-3 py-1">
                        <button
                          aria-label={`Decrease quantity of ${line.name}`}
                          onClick={() => setQuantity(line.id, line.quantity - 1)}
                          className="text-slate"
                        >
                          −
                        </button>
                        <span className="text-xs tabular-nums text-slate">{line.quantity}</span>
                        <button
                          aria-label={`Increase quantity of ${line.name}`}
                          onClick={() => setQuantity(line.id, line.quantity + 1)}
                          className="text-slate"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm text-slate">{formatPrice(line.price * line.quantity)}</span>
                    </div>
                    <button
                      onClick={() => remove(line.id)}
                      className="mt-3 text-[0.625rem] uppercase tracking-[0.167em] text-stone underline underline-offset-4 hover:text-slate"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-slate/15 px-6 py-6">
          <div className="flex items-center justify-between">
            <span className="text-[0.6875rem] uppercase tracking-[0.167em] text-stone">Subtotal</span>
            <span className="font-display text-xl text-slate">{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-stone">
            Shipping and duties calculated at checkout.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <PillButton onClick={() => setCheckoutNote(true)} disabled={lines.length === 0}>
              Checkout
            </PillButton>
            <button onClick={close} className={cn(pillLight, "border-transparent hover:bg-transparent hover:text-stone")}>
              Continue shopping
            </button>
          </div>
          {checkoutNote && (
            <p className="mt-4 text-xs leading-relaxed text-stone">
              Checkout is not yet live. Join{" "}
              <Link to="/story" className="underline underline-offset-4 text-slate">
                Private Notes
              </Link>{" "}
              to be told when the founding collection opens.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}