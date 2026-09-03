import { useState } from "react";
import { ExternalLink, FileSearch } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import PlaceholderPreview from "../ui/PlaceholderPreview";
import Tag from "../ui/Tag";
import Button from "../ui/Button";
import ProjectCaseStudy from "./ProjectCaseStudy";
import projects from "../../data/projects";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="projects"
          title="Featured Projects"
          subtitle="Things I've built and worked on."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <article className="group h-full rounded-2xl border border-border bg-bg-card overflow-hidden flex flex-col hover:border-border-hover transition-colors">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    loading="lazy"
                    className="aspect-video w-full object-cover object-top"
                  />
                ) : (
                  <PlaceholderPreview label="Project Preview" className="aspect-video w-full" />
                )}
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">{project.name}</h3>
                  <p className="mt-3 text-ink-muted leading-relaxed flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tech.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-6">
                    {project.demo && (
                      <Button href={project.demo} variant="ghost" icon={ExternalLink} className="text-sm">
                        Live Demo
                      </Button>
                    )}
                    {project.caseStudy && (
                      <Button
                        onClick={() => setActive(project)}
                        icon={FileSearch}
                        iconPosition="left"
                        className="text-sm"
                      >
                        Case Study
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectCaseStudy project={active} onClose={() => setActive(null)} />
    </section>
  );
}
