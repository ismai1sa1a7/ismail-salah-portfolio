import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

/**
 * Reusable, accessible modal: traps scroll, closes on Escape/backdrop click,
 * and returns focus to the trigger element on close.
 */
export default function Modal({ open, onClose, children, labelledBy }) {
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (open) {
      triggerRef.current = document.activeElement;
      document.body.style.overflow = "hidden";
      dialogRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      triggerRef.current?.focus?.();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-bg-card shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="sticky top-4 float-right mr-4 z-10 rounded-full border border-border bg-bg-raised p-2 text-ink-muted hover:text-ink hover:border-border-hover transition-colors"
            >
              <X size={18} />
            </button>
            <div className="p-6 sm:p-8">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
