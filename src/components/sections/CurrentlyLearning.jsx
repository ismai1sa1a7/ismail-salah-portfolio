import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { currentlyLearning } from "../../data/site";

export default function CurrentlyLearning() {
  return (
    <section id="currently-learning" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="in-progress" title="Currently Learning" />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {currentlyLearning.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-bg-card px-5 py-4">
                <span className="font-mono text-xs text-accent mt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-ink">{item.name}</h3>
                  <p className="text-sm text-ink-muted mt-1">{item.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
