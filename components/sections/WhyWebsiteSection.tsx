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
