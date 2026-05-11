import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problems } from "@/lib/content";

export function ProblemSection() {
  return (
    <section className="border-b border-line py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="The reality"
          title={
            <>
              Most clinics in Nepal are{" "}
              <span className="italic text-accent">invisible</span> when a
              patient opens their phone.
            </>
          }
          lede="Search for clinics in Kathmandu, Pokhara or Biratnagar. The same pattern shows up everywhere."
        />

        <figure className="mt-14 overflow-hidden rounded-3xl border border-line">
          <div className="relative aspect-16/6 w-full">
            <Image
              src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1600&q=80"
              alt="A patient checking a clinic on a mobile phone"
              fill
              sizes="(max-width: 768px) 100vw, 1100px"
              className="object-cover"
              priority={false}
            />
          </div>
        </figure>

        <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
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
          Clinics with proper websites are not better clinics. They are simply
          the ones a patient sees{" "}
          <span className="text-accent">first</span>.
        </p>
      </Container>
    </section>
  );
}
