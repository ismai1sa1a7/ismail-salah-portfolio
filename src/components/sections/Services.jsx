import { Code2, Palette, Sparkles } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { services } from "../../data/site";

const icons = {
  "web-development": Code2,
  "ui-implementation": Palette,
  "ai-solutions": Sparkles,
};

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-bg-raised/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="capabilities" title="What I Can Do" />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.id] ?? Code2;
            return (
              <Reveal key={service.id} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-bg-card p-7 hover:border-accent/40 transition-colors">
                  <div className="h-11 w-11 rounded-xl bg-accent-soft flex items-center justify-center">
                    <Icon className="text-accent" size={20} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink mt-5">{service.title}</h3>
                  <p className="text-sm text-ink-muted mt-2 leading-relaxed">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
