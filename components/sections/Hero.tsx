import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRightIcon, HeartPulseIcon } from "@/components/icons";
import { primaryCta, secondaryCta, siteConfig } from "@/lib/site";

export function Hero() {
  const slotsLeft =
    siteConfig.foundingSlotsTotal - siteConfig.foundingSlotsTaken;

  return (
    <section className="relative overflow-hidden border-b border-line bg-paper-grain">
      <Container>
        <div className="grid gap-16 py-20 md:grid-cols-12 md:py-28 lg:py-32">
          <div className="md:col-span-7 lg:col-span-7">
            <div className="anim-rise anim-rise-1">
              <Badge tone="accent">
                <HeartPulseIcon className="h-3.5 w-3.5" aria-hidden />
                For Nepal&rsquo;s doctors, clinics &amp; hospitals
              </Badge>
            </div>

            <h1 className="anim-rise anim-rise-2 mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-[3.5rem] lg:text-[4rem]">
              Your patients are searching for you online.
              <span className="block text-mute">
                <em className="not-italic text-accent">Let&rsquo;s make sure</em>{" "}
                they find a clinic they trust.
              </span>
            </h1>

            <p className="anim-rise anim-rise-3 mt-7 max-w-xl text-lg leading-8 text-mute">
              I&rsquo;m <span className="text-ink-soft">Nishan Poudel</span> — a
              Kathmandu developer building calm, fast websites for doctors and
              clinics in Nepal. Starts at{" "}
              <span className="text-ink-soft">NPR 9,999</span>, live in ten days.
              One developer. Healthcare only.
            </p>

            <div className="anim-rise anim-rise-4 mt-9 flex flex-wrap items-center gap-3">
              <LinkButton href={primaryCta.href} size="lg" variant="primary">
                {primaryCta.label}
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </LinkButton>
              <LinkButton href={secondaryCta.href} size="lg" variant="secondary">
                {secondaryCta.label}
              </LinkButton>
            </div>

            <p className="anim-rise anim-rise-5 mt-5 text-sm text-mute">
              Free, no-obligation. Reply within 24 hours.
              <span className="mx-2 text-line">•</span>
              <span className="text-ink-soft">
                {slotsLeft} of {siteConfig.foundingSlotsTotal} founding-client
                slots open this month.
              </span>
            </p>
          </div>

          {/* Editorial card with a stock photograph anchoring the hero. */}
          <aside className="md:col-span-5 lg:col-span-5">
            <div className="anim-rise anim-rise-3 relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-soft via-transparent to-transparent blur-2xl"
              />
              <article className="relative overflow-hidden rounded-3xl border border-line bg-paper shadow-[0_1px_0_rgba(11,18,32,0.04),0_24px_48px_-24px_rgba(11,18,32,0.18)]">
                <div className="relative aspect-4/5 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80"
                    alt="A Nepali doctor in a calm, modern clinic"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <p className="font-serif text-base italic leading-7 text-ink-soft">
                    &ldquo;Patients form an opinion of your website in{" "}
                    <span className="not-italic font-medium text-accent">
                      fifty milliseconds
                    </span>
                    .&rdquo;
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-mute">
                    Lindgaard et al., 2006
                  </p>
                </div>
              </article>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
