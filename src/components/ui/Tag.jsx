/**
 * Renders a label styled like a self-closing JSX tag, e.g. <Web Developer />
 * Ties tech/skill tags back to the developer-focused visual identity.
 */
export default function Tag({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-lg border border-border bg-bg-raised px-3 py-1.5 font-mono text-xs text-ink-muted whitespace-nowrap ${className}`}
    >
      <span className="text-ink-dim">{"<"}</span>
      {children}
      <span className="text-ink-dim">{"/>"}</span>
    </span>
  );
}
