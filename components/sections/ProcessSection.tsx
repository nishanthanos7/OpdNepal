import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content-extra";

export function ProcessSection() {
  return (
    <section className="border-b border-line bg-paper-2/40 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Five steps. No black boxes.
              <br className="hidden sm:block" />
              <span className="italic text-accent">No hourly billing surprises.</span>
            </>
          }
          lede="The same calm, structured process you would expect from a clinical workflow — applied to building your website."
        />

        <ol className="mt-14 space-y-4">
          {processSteps.map((step, i) => (
            <li
              key={step.step}
              className="grid gap-6 rounded-2xl border border-line bg-paper p-7 transition-colors hover:border-ink/40 sm:grid-cols-[auto_1fr] sm:items-start sm:p-9"
            >
              <div className="flex items-baseline gap-3 sm:w-44 sm:flex-col sm:gap-1">
                <span className="font-serif text-3xl text-gold sm:text-4xl">
                  {step.step}
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-mute">
                  Step {i + 1} of {processSteps.length}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-xl text-ink sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-mute">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
