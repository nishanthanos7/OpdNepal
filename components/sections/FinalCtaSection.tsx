import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons";
import { primaryCta, siteConfig } from "@/lib/site";

export function FinalCtaSection() {
  const slotsLeft =
    siteConfig.foundingSlotsTotal - siteConfig.foundingSlotsTaken;
  return (
    <section className="bg-ink text-paper">
      <Container>
        <div className="grid gap-10 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.18em] text-paper/60">
              The next step
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.1] tracking-tight text-paper sm:text-5xl">
              See exactly what your clinic looks like online today.
              <br />
              <span className="text-gold italic">Free, in seven minutes.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-paper/80">
              Send me your clinic name. Within 24 hours, you&rsquo;ll get a
              short, honest report of how your clinic appears on Google,
              Facebook and the open web — with the three highest-impact things
              you can fix this week. No commitment. No sales pitch.
            </p>
          </div>

          <div className="flex flex-col justify-end gap-4 md:col-span-5 md:items-end">
            <LinkButton href={primaryCta.href} size="lg" variant="secondary" className="bg-paper text-ink hover:bg-gold hover:text-paper">
              {primaryCta.label}
              <ArrowRightIcon aria-hidden className="h-4 w-4" />
            </LinkButton>
            <p className="text-sm text-paper/65">
              {slotsLeft} of {siteConfig.foundingSlotsTotal} founding-client
              slots open this month.
            </p>
            <p className="text-sm text-paper/65">
              Or write directly:&nbsp;
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-paper underline underline-offset-4 hover:text-gold"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
