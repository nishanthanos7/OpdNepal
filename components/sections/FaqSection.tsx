import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlusIcon } from "@/components/icons";
import { faqs } from "@/lib/content-extra";

export function FaqSection() {
  // Native <details> — zero JS, zero hydration cost, fully accessible.
  return (
    <section id="faq" className="border-b border-line py-20 md:py-28">
      <Container size="md">
        <SectionHeading
          eyebrow="Common questions"
          title="The questions doctors actually ask before we start."
        />

        <div className="mt-12 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 text-left">
                <span className="font-serif text-lg text-ink sm:text-xl">
                  {f.q}
                </span>
                <PlusIcon
                  aria-hidden
                  className="faq-chev h-5 w-5 flex-none text-mute"
                />
              </summary>
              <p className="mt-3 max-w-2xl pr-10 text-[15px] leading-7 text-mute">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
