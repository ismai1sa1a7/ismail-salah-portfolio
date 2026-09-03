import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import Tag from "../ui/Tag";
import skills from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="skills"
          title="What I Work With"
          subtitle="Grouped by area — no invented proficiency scores, just what I actually use."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.06}>
              <div className="rounded-2xl border border-border bg-bg-card p-6 h-full">
                <h3 className="font-mono text-sm text-ink-dim mb-4">{`// ${group.label}`}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <Tag key={item.name}>{item.name}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
