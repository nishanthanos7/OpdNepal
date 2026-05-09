import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuoteIcon } from "@/components/icons";
import { testimonials } from "@/lib/content-extra";

export function TestimonialsSection() {
  return (
    <section className="border-b border-line bg-paper-2/40 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="In their words"
          title={
            <>
              What clinics say after we&rsquo;ve worked together.
            </>
          }
          lede="Currently working with a small group of pilot clinics. Names will appear here as each one launches."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex h-full flex-col rounded-2xl border border-line bg-paper p-7"
            >
              <QuoteIcon aria-hidden className="h-6 w-6 text-gold" />
              <blockquote className="mt-4 flex-1 font-serif text-lg italic leading-8 text-ink-soft">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-5 text-sm">
                <div className="font-medium text-ink">{t.name}</div>
                <div className="text-mute">
                  {t.role} · {t.location}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
