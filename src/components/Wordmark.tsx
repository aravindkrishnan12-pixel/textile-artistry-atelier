import { cn } from "@/lib/utils";

/** Typographic brand lockup: serif wordmark with a Honey Gold decorative mark. */
export function Wordmark({ className, tone = "slate" }: { className?: string; tone?: "slate" | "snow" }) {
  return (
    <span className={cn("flex flex-col items-center leading-none", className)}>
      <span
        className={cn(
          "font-display text-[1.35rem] tracking-[0.18em] md:text-[1.5rem]",
          tone === "snow" ? "text-snow" : "text-slate",
        )}
      >
        MAISON<span className="text-gold"> · </span>BAIN
      </span>
      <span
        className={cn(
          "mt-1 text-[0.5rem] uppercase tracking-[0.3em]",
          tone === "snow" ? "text-snow/70" : "text-stone",
        )}
      >
        Textiles
      </span>
    </span>
  );
}