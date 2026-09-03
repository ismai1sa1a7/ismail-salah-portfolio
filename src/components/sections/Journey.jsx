import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import journey from "../../data/journey";

export default function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-32 bg-bg-raised/40">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="timeline" title="My Journey" />

        <div className="relative mt-14 pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />

          <ol className="space-y-10">
            {journey.map((item, i) => (
              <Reveal as="li" key={item.id} delay={i * 0.05} className="relative">
                <span className="absolute -left-8 sm:-left-10 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg" />
                <span className="font-mono text-xs text-accent">{item.year}</span>
                <h3 className="mt-1 font-display text-xl font-semibold text-ink">{item.title}</h3>
                <p className="text-sm text-ink-muted mt-0.5">{item.org}</p>
                <p className="mt-2 text-ink-muted leading-relaxed max-w-xl">{item.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
