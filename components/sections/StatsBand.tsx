import { Container } from "@/components/layout/Container";
import { heroStats } from "@/lib/content";

export function StatsBand() {
  return (
    <section
      aria-label="Why a website matters — research"
      className="border-b border-line bg-ink text-paper"
    >
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-3 md:py-16">
          {heroStats.map((stat) => (
            <div key={stat.label} className="md:px-2">
              <p className="font-serif text-5xl tracking-tight text-paper md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-7 text-paper/80 md:text-base">
                {stat.label}
              </p>
              {stat.source ? (
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-paper/50">
                  {stat.source}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
