import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import PlaceholderPreview from "../ui/PlaceholderPreview";
import Button from "../ui/Button";
import CertificateModal from "./CertificateModal";
import certificates, { categories } from "../../data/certificates";

export default function Certificates() {
  const [filter, setFilter] = useState("ALL");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () => (filter === "ALL" ? certificates : certificates.filter((c) => c.category === filter)),
    [filter]
  );

  return (
    <section id="certificates" className="py-24 sm:py-32 bg-bg-raised/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="certificates" title="Certificates" subtitle="Learning. Building. Growing." />

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter certificates by category">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`font-mono text-xs px-4 py-2 rounded-full border transition-colors ${
                filter === cat
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-ink-muted hover:text-ink hover:border-border-hover"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 0.05}>
              <motion.div layout className="group rounded-2xl border border-border bg-bg-card overflow-hidden h-full flex flex-col">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={`${cert.name} certificate`}
                    loading="lazy"
                    className="aspect-video w-full object-cover object-top"
                  />
                ) : (
                  <PlaceholderPreview label="Certificate" className="aspect-video w-full" />
                )}
                <div className="p-5 flex flex-col flex-1">
                  <span className="font-mono text-xs text-accent">{cert.category}</span>
                  <h3 className="font-display font-semibold text-ink mt-2 leading-snug">{cert.name}</h3>
                  <p className="text-sm text-ink-muted mt-1">{cert.org}</p>
                  <p className="font-mono text-xs text-ink-dim mt-3">{cert.date}</p>
                  <Button
                    variant="ghost"
                    onClick={() => setSelected(cert)}
                    className="mt-5 w-full text-sm"
                  >
                    View Certificate
                  </Button>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-ink-muted font-mono text-sm">
            No certificates in this category yet.
          </p>
        )}
      </div>

      <CertificateModal certificate={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
