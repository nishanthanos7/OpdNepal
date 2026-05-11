import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { services } from "@/lib/content";

export function ServicesSection() {
  return (
    <section id="services" className="border-b border-line py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="What I build"
          title={
            <>
              Four things, done properly.
              <br className="hidden sm:block" />
              Nothing else, on purpose.
            </>
          }
          lede="Solo studio. Healthcare only. Each project is fixed-priced, scoped and delivered end to end."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.name}
                className="group flex flex-col rounded-2xl border border-line bg-paper p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink"
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    aria-hidden
                    className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-paper"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-serif text-xs uppercase tracking-[0.18em] text-mute">
                    Service
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl text-ink">{s.name}</h3>
                <p className="mt-2 text-[15px] leading-7 text-mute">{s.summary}</p>
                <ul className="mt-5 space-y-2.5 text-[15px] text-ink-soft">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <CheckIcon
                        aria-hidden
                        className="mt-0.5 h-4 w-4 flex-none text-accent"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-accent"
                >
                  Read more
                  <ArrowRightIcon
                    aria-hidden
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
