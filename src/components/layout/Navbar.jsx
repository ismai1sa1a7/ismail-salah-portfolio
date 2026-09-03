import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import useScrolled from "../../hooks/useScrolled";
import useActiveSection from "../../hooks/useActiveSection";
import Button from "../ui/Button";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const scrolled = useScrolled(20);
  const active = useActiveSection(links.map((l) => l.id));
  const [open, setOpen] = useState(false);

  const handleNavigate = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "glass border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => handleNavigate("home")}
          className="font-display text-lg font-bold tracking-tight text-ink"
          aria-label="Go to home section"
        >
          ISMAIL SALAH<span className="text-accent animate-blink">_</span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavigate(link.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  active === link.id ? "text-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/5 border border-border"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button onClick={() => handleNavigate("contact")} className="text-sm">
            Let's Talk
          </Button>
        </div>

        <button
          className="md:hidden text-ink p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavigate(link.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                      active === link.id ? "bg-white/5 text-ink" : "text-ink-muted"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <Button onClick={() => handleNavigate("contact")} className="w-full">
                  Let's Talk
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
