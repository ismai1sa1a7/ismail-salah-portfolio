import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { workProcess } from "../../data/site";

export default function HowIWork() {
  return (
    <section id="how-i-work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="process" title="How I Work" />

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {workProcess.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.05}>
              <div className="group h-full rounded-xl border border-border bg-bg-card p-5 hover:border-accent/40 hover:-translate-y-1 transition-all duration-200">
                <span className="font-mono text-xs text-accent">{item.step}</span>
                <h3 className="font-display font-semibold text-ink mt-2">{item.title}</h3>
                <p className="text-xs text-ink-muted mt-2 leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
