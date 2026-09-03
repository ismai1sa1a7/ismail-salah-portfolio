import { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { LinkedinIcon } from "../ui/icons";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import { socials } from "../../data/site";

const contactLinks = [
  { icon: Mail, label: "Email", href: `mailto:${socials.email}` },
  { icon: LinkedinIcon, label: "LinkedIn", href: socials.linkedin },
  { icon: MessageCircle, label: "WhatsApp", href: socials.whatsapp },
];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sent
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired up yet — replace with a real submit handler
    // (form service, API route, etc.) when ready.
    setStatus("sent");
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 grid gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="font-mono text-sm text-accent">{"// get-in-touch"}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] mt-4">
              LET'S BUILD
              <br />
              SOMETHING
              <br />
              <span className="text-gradient">TOGETHER.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-ink-muted max-w-sm">Have an idea, project, or opportunity?</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-2.5 text-sm text-ink-muted hover:text-ink hover:border-border-hover transition-colors"
                >
                  <link.icon size={16} />
                  {link.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-bg-card p-6 sm:p-8 space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm text-ink-muted mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-bg-raised px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus-visible:outline-2 focus-visible:outline-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-ink-muted mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-bg-raised px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus-visible:outline-2 focus-visible:outline-accent"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-ink-muted mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-border bg-bg-raised px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus-visible:outline-2 focus-visible:outline-accent resize-none"
                placeholder="Tell me about your idea or project"
              />
            </div>

            <Button type="submit" icon={Send} className="w-full">
              Send Message
            </Button>

            <p role="status" className="text-sm text-center text-cyan h-5">
              {status === "sent" && "Thanks — I'll get back to you soon."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
