import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { CheckIcon } from "@/components/icons";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "A small studio of one, focused exclusively on websites for Nepal's doctors, clinics and hospitals.",
};

const principles = [
  {
    title: "Healthcare-only, on purpose",
    body: "I do not build for restaurants, e-commerce, crypto or anyone else. Every project is medical. That focus is the reason I can ask the right questions on day one — about referral patterns, OPD flow, prescription handling, language preferences — instead of learning your world from scratch on your time.",
  },
  {
    title: "One project at a time",
    body: "I take a small number of clients each quarter and finish each one before starting the next. You will not be juggled against four other projects. You will know the person writing every line of your website by their first name.",
  },
  {
    title: "Calm communication",
    body: "Short, clear updates. Quick replies during clinic hours. No design-by-Slack-message. Decisions are documented so nothing gets lost.",
  },
  {
    title: "Honest pricing",
    body: "Fixed quotes, written before work begins. If the scope changes, you see the new number first. No hourly billing surprises, no retainer lock-ins.",
  },
  {
    title: "Built to outlast me",
    body: "Plain, well-documented code on standard tools (Next.js, Tailwind, PostgreSQL). If, one day, you choose to work with someone else, your website will still make sense to them.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            A small studio of one.
            <br />
            <span className="italic text-accent">Built for Nepal&rsquo;s medical professionals.</span>
          </>
        }
        lede="I write code. I read medical papers for fun. I believe a clinic's website should feel as calm and considered as the consultation room itself. This page explains how I work — and why."
      />

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
                  Walk into any clinic in Kathmandu and you will see the same
                  thing: a doctor who is excellent at medicine, a front desk
                  that is excellent at people, and a website (if there is one
                  at all) that is neither.
                </p>
                <p>
                  Patients today verify before they trust. They Google your
                  name on the way to the appointment. They ask their friends
                  to send your link on WhatsApp. The first impression is no
                  longer at the reception desk &mdash; it is on a phone,
                  fifty milliseconds after a search result loads.
                </p>
                <p className="italic text-accent">
                  I built this studio so the digital part of your clinic
                  feels as careful as the clinical part. That is the entire
                  brief.
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
