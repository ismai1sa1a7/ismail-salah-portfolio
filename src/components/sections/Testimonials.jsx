import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { testimonials, testimonialsEnabled } from "../../data/site";

/**
 * Hidden entirely until `testimonialsEnabled` is set to true in
 * src/data/site.js with real testimonials added to `testimonials`.
 * Never fill this with invented quotes.
 */
export default function Testimonials() {
  if (!testimonialsEnabled || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-bg-raised/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="testimonials" title="What People Say" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <blockquote className="h-full rounded-2xl border border-border bg-bg-card p-6">
                <p className="text-ink-muted leading-relaxed">"{t.quote}"</p>
                <footer className="mt-4 font-mono text-xs text-ink-dim">
                  {t.name} — {t.role}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
