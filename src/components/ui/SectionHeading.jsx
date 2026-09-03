import Reveal from "./Reveal";

/**
 * Consistent section header: a code-comment style eyebrow, a bold
 * display title, and an optional subtitle.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="font-mono text-sm text-accent">{`// ${eyebrow}`}</span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="text-ink-muted text-base sm:text-lg max-w-xl">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
