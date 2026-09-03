import { motion } from "framer-motion";

/**
 * Fades + slides content up as it enters the viewport.
 * Wrap any block of content: <Reveal><Card /></Reveal>
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  once = true,
  className = "",
  as = "div",
}) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
