import { Download } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { profile } from "../../data/site";
import profilePhoto from "../../assets/profile/profile-photo.jpeg";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] items-center">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-3xl border border-border/60 -z-10" aria-hidden="true" />
          <div className="aspect-[4/5] w-full rounded-2xl border border-border bg-bg-card relative overflow-hidden">
            <img
              src={profilePhoto}
              alt={`${profile.name}, ${profile.role}`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 rounded-xl border border-border bg-bg-card px-4 py-3 font-mono text-xs text-ink-muted shadow-lg">
            <span className="text-cyan">const</span> role ={" "}
            <span className="text-accent">"CS &amp; AI"</span>
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow="about-me" title="About Me" />
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4">
              {profile.about.map((paragraph) => (
                <p key={paragraph} className="text-ink-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {profile.quickFacts.map((fact) => (
                <li
                  key={fact}
                  className="flex items-center gap-2 rounded-lg border border-border bg-bg-card px-4 py-3 text-sm text-ink"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {fact}
                </li>
              ))}
            </ul>
          </Reveal>

          {profile.resumeUrl && (
            <Reveal delay={0.2}>
              <Button href={profile.resumeUrl} icon={Download} iconPosition="left" className="mt-8">
                Download CV
              </Button>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
