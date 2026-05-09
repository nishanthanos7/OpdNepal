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
              Your patients are already searching for you online.
              <span className="block text-mute">
                <em className="not-italic text-accent">Let&rsquo;s make sure</em>{" "}
                they find a clinic they trust.
              </span>
            </h1>

            <p className="anim-rise anim-rise-3 mt-7 max-w-xl text-lg leading-8 text-mute">
              I build calm, fast, professional websites for doctors, clinics
              and hospitals in Nepal — from a one-page portfolio to a full
              appointment-booking system. No agency overhead. No bloated
              templates. Just one developer, focused on healthcare.
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

          {/* Editorial "card" — the visual anchor. Pure CSS, no images. */}
          <aside className="md:col-span-5 lg:col-span-5">
            <div className="anim-rise anim-rise-3 relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-4xl bg-linear-to-br from-accent-soft via-transparent to-transparent blur-2xl"
              />
              <article className="relative rounded-3xl border border-line bg-paper p-7 shadow-[0_1px_0_rgba(11,18,32,0.04),0_24px_48px_-24px_rgba(11,18,32,0.18)] sm:p-9">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-mute">
                  <span>Case note</span>
                  <span>№ 001</span>
                </div>
                <p className="mt-5 font-serif text-2xl italic leading-9 text-ink-soft">
                  &ldquo;Patients form an opinion of your website in
                  <span className="not-italic font-medium text-accent">
                    {" "}fifty milliseconds
                  </span>
                  . That is faster than the time it takes to say
                  &lsquo;namaste&rsquo;.&rdquo;
                </p>
                <p className="mt-4 text-sm text-mute">
                  &mdash; Lindgaard et al., <em>Behaviour &amp; IT</em>, 2006
                </p>
                <hr className="my-7 border-line" />
                <dl className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.16em] text-mute">
                      Focus
                    </dt>
                    <dd className="mt-1 font-serif text-base text-ink">
                      Healthcare
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.16em] text-mute">
                      Region
                    </dt>
                    <dd className="mt-1 font-serif text-base text-ink">
                      Nepal
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.16em] text-mute">
                      Studio
                    </dt>
                    <dd className="mt-1 font-serif text-base text-ink">
                      Of one
                    </dd>
                  </div>
                </dl>
              </article>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
