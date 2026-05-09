import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  tone?: "neutral" | "accent" | "gold";
  className?: string;
};

const tones = {
  neutral:
    "bg-paper-2 text-ink-soft border-line",
  accent:
    "bg-accent-soft text-accent border-[color-mix(in_oklab,var(--color-accent)_30%,transparent)]",
  gold: "bg-[color-mix(in_oklab,var(--color-gold)_15%,transparent)] text-gold border-[color-mix(in_oklab,var(--color-gold)_45%,transparent)]",
} as const;

export function Badge({ children, tone = "neutral", className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
