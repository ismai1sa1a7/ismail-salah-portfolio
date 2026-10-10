import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LinkedinIcon } from "../ui/icons";
import { profile, socials } from "../../data/site";
import Button from "../ui/Button";

function RotatingWord({ words }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
      {words.map((word, i) => (
        <motion.span
          key={word}
          className="absolute left-0 top-0 whitespace-nowrap text-accent"
          initial={false}
          animate={
            i === index
              ? { y: 0, opacity: 1 }
              : { y: i < index || (index === 0 && i === words.length - 1) ? -24 : 24, opacity: 0 }
          }
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
      {/* Reserves layout space using the longest word */}
      <span className="invisible">
        {words.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_35%,black_10%,transparent_70%)]" />
      <div
        className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--color-accent), var(--color-violet) 70%, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-ink-muted mb-5"
        >
          <span className="text-cyan">$</span> whoami{" "}
          <span className="animate-blink text-accent">_</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-mono text-sm sm:text-base tracking-widest text-ink-dim uppercase mb-4"
        >
          Hello, I'm {profile.name}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] max-w-4xl"
        >
          Computer Science &amp; AI Student
          <br />
          &amp; <span className="text-gradient">Web Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-6 max-w-xl text-lg text-ink-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mt-3 font-mono text-sm text-ink-dim"
        >
          {"// currently: "}
          <RotatingWord words={profile.rotatingWords} />
        </motion.p>

        {profile.availability && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-3.5 py-1.5 text-sm text-ink-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan shrink-0" aria-hidden="true" />
            {profile.availability}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            icon={ArrowRight}
          >
            View My Projects
          </Button>
          <Button
            variant="ghost"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex items-center gap-5"
        >
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-ink-muted hover:text-ink transition-colors"
          >
            <LinkedinIcon size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
