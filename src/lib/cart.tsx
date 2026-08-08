import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export interface CartLine {
  id: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  size: string;
  monogram?: string;
  quantity: number;
}

interface CartValue {
  lines: CartLine[];
  isOpen: boolean;
  count: number;
  subtotal: number;
  open: () => void;
  close: () => void;
  add: (line: Omit<CartLine, "id" | "quantity">, quantity?: number) => void;
  setQuantity: (id: string, quantity: number) => void;
  remove: (id: string) => void;
}

const CartContext = createContext<CartValue | null>(null);
const STORAGE_KEY = "maison-bain-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw) as CartLine[]);
    } catch {
      /* ignore malformed storage */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* storage unavailable */
    }
  }, [lines]);

  const add = useCallback<CartValue["add"]>((line, quantity = 1) => {
    const id = [line.slug, line.size, line.monogram ?? ""].join("|");
    setLines((current) => {
      const existing = current.find((l) => l.id === id);
      if (existing) {
        return current.map((l) => (l.id === id ? { ...l, quantity: l.quantity + quantity } : l));
      }
      return [...current, { ...line, id, quantity }];
    });
    setIsOpen(true);
  }, []);

  const setQuantity = useCallback<CartValue["setQuantity"]>((id, quantity) => {
    setLines((current) =>
      quantity <= 0
        ? current.filter((l) => l.id !== id)
        : current.map((l) => (l.id === id ? { ...l, quantity } : l)),
    );
  }, []);

  const remove = useCallback((id: string) => {
    setLines((current) => current.filter((l) => l.id !== id));
  }, []);

  const value = useMemo<CartValue>(
    () => ({
      lines,
      isOpen,
      count: lines.reduce((n, l) => n + l.quantity, 0),
      subtotal: lines.reduce((n, l) => n + l.quantity * l.price, 0),
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      add,
      setQuantity,
      remove,
    }),
    [lines, isOpen, add, setQuantity, remove],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}