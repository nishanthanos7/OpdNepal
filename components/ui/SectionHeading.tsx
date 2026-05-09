import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className = "",
}: Props) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow ? (
        <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-mute">
          {align === "center" ? <span className="rule-gold" /> : null}
          <span>{eyebrow}</span>
          <span className="rule-gold" />
        </div>
      ) : null}
      <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {lede ? (
        <p className="mt-5 text-lg leading-8 text-mute">{lede}</p>
      ) : null}
    </div>
  );
}
