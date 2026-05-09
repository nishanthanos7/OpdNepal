import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { CheckIcon } from "@/components/icons";
import { pricingTiers } from "@/lib/content-extra";

export function PricingSection() {
  return (
    <section id="pricing" className="border-b border-line py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Honest, fixed pricing"
          title={
            <>
              Most doctors start at{" "}
              <span className="italic text-accent">NPR 9,999</span>.
              <br className="hidden sm:block" />
              No retainers, no hourly billing, no surprises.
            </>
          }
          lede="Three engagement sizes. Most doctors begin with the Portfolio — it is the smallest possible step that still produces a real, professional, fast site. You can always upgrade later."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => {
            const isHero = tier.highlighted;
            return (
              <article
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-200 ${
                  isHero
                    ? "border-ink bg-ink text-paper lg:-translate-y-2 lg:scale-[1.02] shadow-[0_28px_56px_-28px_rgba(11,18,32,0.45)]"
                    : "border-line bg-paper text-ink hover:-translate-y-0.5 hover:border-ink"
                }`}
              >
                {tier.badge ? (
                  <div className="absolute -top-3 left-8">
                    <Badge tone="gold">{tier.badge}</Badge>
                  </div>
                ) : null}

                <h3 className={`font-serif text-2xl ${isHero ? "text-paper" : "text-ink"}`}>
                  {tier.name}
                </h3>
                <p className={`mt-2 text-sm ${isHero ? "text-paper/75" : "text-mute"}`}>
                  {tier.pitch}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className={`font-serif text-4xl tracking-tight ${isHero ? "text-paper" : "text-ink"}`}>
                    {tier.price}
                  </span>
                  <span className={`text-sm ${isHero ? "text-paper/65" : "text-mute"}`}>
                    {tier.priceNote}
                  </span>
                </div>

                <hr className={`my-7 ${isHero ? "border-paper/15" : "border-line"}`} />

                <ul className={`flex-1 space-y-3 text-[15px] ${isHero ? "text-paper/90" : "text-ink-soft"}`}>
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckIcon
                        aria-hidden
                        className={`mt-0.5 h-4 w-4 flex-none ${isHero ? "text-gold" : "text-accent"}`}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.ctaHref}
                  className={`mt-8 inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-medium transition-colors ${
                    isHero
                      ? "bg-paper text-ink hover:bg-gold hover:text-paper"
                      : "bg-ink text-paper hover:bg-accent"
                  }`}
                >
                  {tier.ctaLabel}
                </Link>
              </article>
            );
          })}
        </div>

        <p className="mt-10 max-w-2xl text-sm text-mute">
          Prefer to talk first?{" "}
          <Link href="/audit" className="text-ink underline underline-offset-4 hover:text-accent">
            Start with the free 7-minute audit
          </Link>{" "}
          — no commitment, no sales pitch.
        </p>
      </Container>
    </section>
  );
}
