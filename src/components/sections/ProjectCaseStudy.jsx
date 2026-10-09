import { ExternalLink, FileText } from "lucide-react";
import Modal from "../ui/Modal";
import PlaceholderPreview from "../ui/PlaceholderPreview";
import Tag from "../ui/Tag";
import Button from "../ui/Button";

const steps = [
  { key: "problem", num: "01", label: "The Problem" },
  { key: "research", num: "02", label: "Research" },
  { key: "idea", num: "03", label: "The Idea" },
  { key: "solution", num: "04", label: "The Solution" },
];

export default function ProjectCaseStudy({ project, onClose }) {
  if (!project) return null;
  const { caseStudy } = project;

  return (
    <Modal open={Boolean(project)} onClose={onClose} labelledBy="case-study-title">
      <h3 id="case-study-title" className="font-display text-2xl sm:text-3xl font-bold text-ink">
        {project.name}
      </h3>

      {project.image ? (
        <img
          src={project.image}
          alt={`${project.name} preview`}
          className="w-full rounded-xl mt-6 mb-8"
        />
      ) : (
        <PlaceholderPreview label="Project Preview" className="w-full rounded-xl aspect-video mt-6 mb-8" />
      )}

      <div className="space-y-7">
        {steps.map((step) =>
          caseStudy?.[step.key] ? (
            <div key={step.key}>
              <p className="font-mono text-xs text-accent">{`${step.num} — ${step.label}`}</p>
              <p className="mt-2 text-ink-muted leading-relaxed">{caseStudy[step.key]}</p>
            </div>
          ) : null
        )}

        {caseStudy?.technology?.length > 0 && (
          <div>
            <p className="font-mono text-xs text-accent">05 — Technology</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {caseStudy.technology.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>
        )}

        {caseStudy?.role && (
          <div>
            <p className="font-mono text-xs text-accent">06 — My Role</p>
            <p className="mt-2 text-ink-muted leading-relaxed">{caseStudy.role}</p>
          </div>
        )}

        {caseStudy?.outcome && (
          <div>
            <p className="font-mono text-xs text-accent">07 — Outcome</p>
            <p className="mt-2 text-ink-muted leading-relaxed">{caseStudy.outcome}</p>
          </div>
        )}
      </div>

      <div className="mt-9 flex flex-wrap gap-3">
        {project.demo && (
          <Button href={project.demo} icon={ExternalLink}>
            Live Demo
          </Button>
        )}
        {project.document && (
          <Button
            href={project.document}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            icon={FileText}
            iconPosition="left"
          >
            {project.documentLabel ?? "View Document"}
          </Button>
        )}
        <Button variant="link" onClick={onClose}>
          Back to Projects
        </Button>
      </div>
    </Modal>
  );
}
