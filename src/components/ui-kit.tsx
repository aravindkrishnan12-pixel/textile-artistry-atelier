import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

const pill =
  "inline-flex items-center justify-center rounded-[80px] border px-7 py-3 text-[0.6875rem] uppercase tracking-[0.167em] transition-colors duration-500";

export const pillLight = cn(pill, "border-slate text-slate hover:bg-slate hover:text-snow");
export const pillDark = cn(pill, "border-snow text-snow hover:bg-snow hover:text-slate");

export function PillLink({
  tone = "light",
  className,
  ...props
}: ComponentProps<typeof Link> & { tone?: "light" | "dark" }) {
  return <Link {...props} className={cn(tone === "dark" ? pillDark : pillLight, className)} />;
}

export function PillButton({
  tone = "light",
  className,
  ...props
}: ComponentProps<"button"> & { tone?: "light" | "dark" }) {
  return <button {...props} className={cn(tone === "dark" ? pillDark : pillLight, className)} />;
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-[0.6875rem] uppercase tracking-[0.167em] text-stone", className)}>{children}</p>
  );
}

export function Display({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "font-display font-normal leading-[1.1] text-[clamp(2rem,4.4vw,3.75rem)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Shell({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-6 md:px-10", className)}>{children}</div>;
}