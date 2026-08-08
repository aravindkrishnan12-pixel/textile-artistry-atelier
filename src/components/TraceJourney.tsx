import { useState } from "react";

import { journey } from "@/lib/journey";
import { cn } from "@/lib/utils";

export function TraceJourney({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [active, setActive] = useState(0);
  const dark = tone === "dark";
  const stage = journey[active]!;

  return (
    <div>
      <ol className={cn("grid grid-cols-2 gap-px sm:grid-cols-4 lg:grid-cols-7", dark ? "bg-snow/20" : "bg-slate/15")}>
        {journey.map((s, i) => (
          <li key={s.index}>
            <button
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-current={i === active}
              className={cn(
                "flex h-full w-full flex-col gap-3 px-4 py-6 text-left transition-colors duration-500",
                dark ? "bg-slate" : "bg-snow",
                i === active
                  ? dark
                    ? "bg-deep-teal text-snow"
                    : "bg-parchment text-slate"
                  : dark
                    ? "text-snow/60"
                    : "text-stone",
              )}
            >
              <span className="text-[0.625rem] tracking-[0.167em]">{s.index}</span>
              <span className="text-[0.6875rem] uppercase tracking-[0.167em]">{s.title}</span>
            </button>
          </li>
        ))}
      </ol>
      <p
        className={cn(
          "mt-10 max-w-2xl text-base leading-relaxed transition-opacity duration-500",
          dark ? "text-snow/80" : "text-slate",
        )}
      >
        {stage.body}
      </p>
      <p className={cn("mt-4 text-[0.625rem] uppercase tracking-[0.167em]", dark ? "text-snow/50" : "text-stone")}>
        Representative content · batch-level provenance to follow
      </p>
    </div>
  );
}