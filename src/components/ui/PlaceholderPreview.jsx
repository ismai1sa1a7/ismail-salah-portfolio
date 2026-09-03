import { FileText, Image as ImageIcon } from "lucide-react";

/**
 * Shown in place of a real certificate/project image when none is
 * provided in the data file, instead of a broken <img> tag.
 */
export default function PlaceholderPreview({ label = "Preview", icon = "image", className = "" }) {
  const Icon = icon === "file" ? FileText : ImageIcon;

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden bg-bg-raised ${className}`}
      role="img"
      aria-label={`${label} placeholder`}
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <Icon className="relative text-ink-dim" size={28} strokeWidth={1.5} />
      <span className="relative font-mono text-xs text-ink-dim">{label}</span>
    </div>
  );
}
