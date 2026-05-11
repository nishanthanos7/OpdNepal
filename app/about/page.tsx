import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { CheckIcon } from "@/components/icons";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nishan Poudel runs OpdNepal — a small studio of one, focused exclusively on websites for Nepal's doctors, clinics and hospitals.",
};

const principles = [
  {
    title: "Healthcare-only, on purpose",
    body: "Every project is medical. That focus is why I can ask the right questions on day one — about OPD flow, prescriptions, language — instead of learning your world on your time.",
  },
  {
    title: "One project at a time",
    body: "A few clients each quarter, each one finished before the next begins. You will not be juggled. You will know the person writing every line of your site.",
  },
  {
    title: "Calm communication",
    body: "Short, clear updates. Quick replies in clinic hours. Decisions written down so nothing gets lost.",
  },
  {
    title: "Honest pricing",
    body: "Fixed quotes, written before work begins. Scope changes are agreed first. No hourly billing, no retainer lock-ins.",
  },
  {
    title: "Built to outlast me",
    body: "Plain, well-documented code on standard tools (Next.js, Tailwind, PostgreSQL). If you ever change developer, your site will still make sense.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`About ${siteConfig.studio}`}
        title={
          <>
            I&rsquo;m Nishan Poudel.
            <br />
            <span className="italic text-accent">A studio of one, for Nepal&rsquo;s medical professionals.</span>
          </>
        }
        lede="I write code. I read medical papers for fun. I run OpdNepal — a one-person studio building calm websites for Nepal's doctors and clinics. This page is how I work, and why NPR 9,999 is, for most doctors, the smartest first move."
      />

      <section className="border-b border-line py-20 md:py-28">
        <Container size="md">
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <figure className="relative overflow-hidden rounded-3xl border border-line bg-paper-2">
                <div className="relative aspect-4/5 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80"
                    alt="Nishan Poudel — developer and founder of OpdNepal"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="border-t border-line bg-paper px-5 py-4 text-xs uppercase tracking-[0.18em] text-mute">
                  Nishan Poudel · OpdNepal · Kathmandu
                </figcaption>
              </figure>
            </div>

            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-[0.18em] text-mute">
                A short introduction
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
                One developer. One inbox.
                <br />
                <span className="italic text-accent">No agency between us.</span>
              </h2>
              <div className="mt-5 space-y-5 text-[15px] leading-7 text-ink-soft">
                <p>
                  Write to OpdNepal and the email lands in my own inbox. I
                  read it, I reply, I write the code, I push it live. No
                  account manager, no template factory.
                </p>
                <p>
                  That is why a real Doctor Portfolio is{" "}
                  <span className="font-medium text-ink">NPR 9,999</span> —
                  no agency overhead, no padded retainers.
                </p>
                <p className="font-serif italic text-mute">
                  &ldquo;The doctor patients trust online is often simply the
                  doctor whose website loaded first.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <Container size="md">
          <div className="grid gap-14 md:grid-cols-3">
            <aside className="md:col-span-1">
              <p className="text-xs uppercase tracking-[0.18em] text-mute">
                Studio principles
              </p>
              <p className="mt-3 font-serif text-2xl leading-8 text-ink">
                Five things I will not compromise on — even if it costs me a project.
              </p>
            </aside>

            <ul className="space-y-10 md:col-span-2">
              {principles.map((p, i) => (
                <li key={p.title} className="border-l border-gold pl-6">
                  <p className="font-serif text-xs uppercase tracking-[0.18em] text-gold">
                    Principle № 0{i + 1}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-ink">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-mute">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-paper-2/40 py-20 md:py-28">
        <Container size="md">
          <div className="grid gap-12 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.18em] text-mute">
                A brief, honest note
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
                Why I work only with doctors.
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="space-y-5 font-serif text-lg leading-8 text-ink-soft">
                <p>
                  Walk into any clinic in Kathmandu and you see the same thing:
                  a doctor who is excellent at medicine, a front desk excellent
                  at people, and a website (if any) that is neither.
                </p>
                <p>
                  Patients verify before they trust. They Google your name on
                  the way to the appointment. The first impression is no longer
                  at the reception desk — it is on a phone.
                </p>
                <p className="italic text-accent">
                  I built this studio so the digital side of your clinic feels
                  as careful as the clinical side. That is the whole brief.
                </p>
              </div>

              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {[
                  "Trained in modern web engineering",
                  "Reads medical UX research",
                  "Familiar with Nepal's clinical workflows",
                  "Bilingual: English / नेपाली",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[15px] text-ink-soft"
                  >
                    <CheckIcon aria-hidden className="mt-0.5 h-4 w-4 flex-none text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <FinalCtaSection />
    </>
  );
}
