import { Mail } from "lucide-react";
import { LinkedinIcon } from "../ui/icons";
import { socials } from "../../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <p className="font-display text-lg font-bold text-ink">ISMAIL SALAH</p>
          <p className="text-sm text-ink-muted mt-1">
            Computer Science &amp; AI Student · Web Developer
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-muted hover:text-accent transition-colors"
          >
            <LinkedinIcon size={19} />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Email"
            className="text-ink-muted hover:text-accent transition-colors"
          >
            <Mail size={19} />
          </a>
        </div>

        <p className="font-mono text-xs text-ink-dim">© 2026 Ismail Salah. All rights reserved.</p>
      </div>
    </footer>
  );
}
