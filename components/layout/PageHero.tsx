import type { ReactNode } from "react";
import { Container } from "./Container";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
};

export function PageHero({ eyebrow, title, lede }: Props) {
  return (
    <section className="border-b border-line bg-paper-grain">
      <Container>
        <div className="max-w-3xl py-20 md:py-24">
          <p className="text-xs uppercase tracking-[0.18em] text-mute">
            <span className="rule-gold mr-3" />
            {eyebrow}
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-[3.25rem]">
            {title}
          </h1>
          {lede ? (
            <p className="mt-6 text-lg leading-8 text-mute">{lede}</p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
