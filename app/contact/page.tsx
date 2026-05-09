import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { LeadForm } from "@/components/forms/LeadForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Nishan Poudel at OpdNepal. Email, phone or a short brief — replies within 24 hours, Sunday to Friday.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell me about your clinic.
            <br />
            <span className="italic text-accent">I&rsquo;ll reply within 24 hours.</span>
          </>
        }
        lede="No automated funnel, no sales agent. Your message goes straight to my inbox — and I write back, in plain language, the same week."
      />

      <section className="border-b border-line py-20 md:py-28">
        <Container size="md">
          <div className="grid gap-12 md:grid-cols-12 md:items-start">
            <aside className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.18em] text-mute">
                Other ways to reach me
              </p>

              <ul className="mt-6 space-y-6">
                <li>
                  <p className="text-xs uppercase tracking-[0.18em] text-gold">Email</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="mt-1 block font-serif text-xl text-ink hover:text-accent"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-[0.18em] text-gold">Phone</p>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="mt-1 block font-serif text-xl text-ink hover:text-accent"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-[0.18em] text-gold">Studio</p>
                  <p className="mt-1 font-serif text-xl text-ink">
                    {siteConfig.contact.location}
                  </p>
                  <p className="text-sm text-mute">{siteConfig.contact.hours}</p>
                </li>
              </ul>

              <p className="mt-10 max-w-sm text-sm leading-7 text-mute">
                If you&rsquo;d rather start with a free, no-commitment look at
                your clinic&rsquo;s online presence,{" "}
                <a
                  href="/audit"
                  className="text-ink underline underline-offset-4 hover:text-accent"
                >
                  start with the audit
                </a>{" "}
                instead — it takes you about a minute.
              </p>
            </aside>

            <div className="md:col-span-7">
              <LeadForm
                intent="contact"
                submitLabel="Send message"
                successTitle="Message ready to send."
                successBody="Your email client should have opened with everything pre-filled. Hit send, and I will reply within 24 hours."
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
