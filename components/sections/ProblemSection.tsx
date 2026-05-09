import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problems } from "@/lib/content";

export function ProblemSection() {
  return (
    <section className="border-b border-line py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="The reality, on the ground"
          title={
            <>
              Most clinics in Nepal are{" "}
              <span className="italic text-accent">invisible</span> the moment a
              patient picks up their phone.
            </>
          }
          lede="This is not an opinion. Spend ten minutes searching for clinics in any city — Kathmandu, Pokhara, Biratnagar — and the same pattern shows up everywhere."
        />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {problems.map((p, i) => (
            <li
              key={i}
              className="bg-paper p-7 sm:p-9"
            >
              <span className="font-serif text-sm tracking-[0.18em] text-gold">
                №&nbsp;0{i + 1}
              </span>
              <p className="mt-3 text-lg leading-8 text-ink">{p}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-2xl font-serif text-xl italic leading-9 text-ink-soft">
          The clinics with proper websites are not necessarily better
          clinics. They are simply the ones the patient chose to{" "}
          <span className="text-accent">see first</span>.
        </p>
      </Container>
    </section>
  );
}
