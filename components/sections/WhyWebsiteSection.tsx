import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyReasons } from "@/lib/content";

export function WhyWebsiteSection() {
  return (
    <section className="border-b border-line bg-paper-2/40 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why this matters"
          title={
            <>
              A proper website is not a brochure.
              <br className="hidden sm:block" />
              It is a <span className="italic text-accent">second front desk</span>.
            </>
          }
          lede="Six things a real medical website does for a clinic — quietly, every day, while you focus on patients."
        />

        <figure className="mt-14 overflow-hidden rounded-3xl border border-line bg-paper">
          <div className="relative aspect-16/7 w-full">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80"
              alt="A calm clinic consultation — stethoscope on a clean desk"
              fill
              sizes="(max-width: 768px) 100vw, 1100px"
              className="object-cover"
              priority={false}
            />
          </div>
          <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-paper px-6 py-4 text-xs uppercase tracking-[0.18em] text-mute">
            <span>Field note №&nbsp;002</span>
            <span className="font-serif normal-case tracking-normal text-ink-soft italic">
              The clinic that shows up online is the one the patient walks into.
            </span>
          </figcaption>
        </figure>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyReasons.map((r) => {
            const Icon = r.icon;
            return (
              <li
                key={r.title}
                className="group rounded-2xl border border-line bg-paper p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_18px_36px_-24px_rgba(11,18,32,0.18)]"
              >
                <span
                  aria-hidden
                  className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-paper"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-xl text-ink">{r.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-mute">{r.body}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
