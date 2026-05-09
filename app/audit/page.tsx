import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { CheckIcon } from "@/components/icons";
import { LeadForm } from "@/components/forms/LeadForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free 7-minute audit",
  description:
    "A short, honest report of how your clinic appears online today — and the three highest-impact things you can fix this week. Free, no commitment.",
};

const includes = [
  "How your clinic shows up on Google for your name and specialty",
  "Mobile speed score and biggest performance leak",
  "Top 3 trust signals you are missing right now",
  "How your Facebook / Maps listing compares to nearby clinics",
  "A short, written summary you can share with your team",
];

export default function AuditPage() {
  const slotsLeft =
    siteConfig.foundingSlotsTotal - siteConfig.foundingSlotsTaken;

  return (
    <>
      <PageHero
        eyebrow="Free audit"
        title={
          <>
            See exactly what your clinic looks like online today.
            <br />
            <span className="italic text-accent">In about seven minutes.</span>
          </>
        }
        lede="Tell me a little about your clinic and I will send back a short, honest report — what works, what doesn't, and the three highest-impact things you can fix this week. No commitment, no sales call."
      />

      <section className="border-b border-line py-20 md:py-28">
        <Container size="md">
          <div className="grid gap-12 md:grid-cols-12 md:items-start">
            <aside className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.18em] text-mute">
                What you receive
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
                A short, written report &mdash; <span className="italic text-accent">written by a human</span>.
              </h2>
              <ul className="mt-7 space-y-3.5 text-[15px] text-ink-soft">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckIcon
                      aria-hidden
                      className="mt-0.5 h-4 w-4 flex-none text-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl border border-line bg-paper-2/60 p-6">
                <p className="font-serif text-xs uppercase tracking-[0.18em] text-gold">
                  This month
                </p>
                <p className="mt-2 text-[15px] leading-7 text-ink-soft">
                  <span className="font-medium text-ink">
                    {slotsLeft} of {siteConfig.foundingSlotsTotal} founding-client slots
                  </span>{" "}
                  are still open. Founding clients receive a 20% discount on
                  their first project and lifetime priority support.
                </p>
              </div>

              <p className="mt-6 text-sm text-mute">
                Prefer to write directly?{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-ink underline underline-offset-4 hover:text-accent"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </aside>

            <div className="md:col-span-7">
              <LeadForm
                intent="audit"
                submitLabel="Send my free audit request"
                successTitle="Thanks — I have everything I need."
                successBody="I will reply with your audit within 24 hours, Sun–Fri. If you sent this on a Friday or Saturday, expect it on Sunday morning."
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
