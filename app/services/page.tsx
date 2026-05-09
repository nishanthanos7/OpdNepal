import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { CheckIcon } from "@/components/icons";
import { services } from "@/lib/content";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Doctor portfolio sites, full clinic websites, online appointment booking and clinic management — built for Nepal's medical professionals.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Four engagements.
            <br />
            <span className="italic text-accent">Each one fully scoped.</span>
          </>
        }
        lede="A small studio, on purpose. I work on one project at a time, end to end. Below is exactly what is included in each engagement — and what is not."
      />

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <div className="space-y-16">
            {services.map((s, i) => {
              const Icon = s.icon;
              const reverse = i % 2 === 1;
              return (
                <article
                  key={s.name}
                  className={`grid gap-10 md:grid-cols-12 md:items-start ${
                    reverse ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="md:col-span-5">
                    <span
                      aria-hidden
                      className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-paper"
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-5 font-serif text-xs uppercase tracking-[0.18em] text-gold">
                      Engagement № 0{i + 1}
                    </p>
                    <h2 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
                      {s.name}
                    </h2>
                    <p className="mt-4 text-[15px] leading-7 text-mute">
                      {s.summary}
                    </p>
                  </div>

                  <div className="md:col-span-7">
                    <div className="rounded-2xl border border-line bg-paper p-7 sm:p-9">
                      <h3 className="text-xs uppercase tracking-[0.18em] text-mute">
                        What&rsquo;s included
                      </h3>
                      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                        {s.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2.5 text-[15px] text-ink-soft"
                          >
                            <CheckIcon
                              aria-hidden
                              className="mt-0.5 h-4 w-4 flex-none text-accent"
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <ProcessSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
