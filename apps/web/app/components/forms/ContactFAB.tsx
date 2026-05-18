"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { getKontaktContent } from "~/content/pages/kontakt";
import { useLocale } from "~/i18n/locale";
import { easeApple } from "~/lib/motion";

export function ContactFAB() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const content = getKontaktContent(locale);

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: easeApple }}
            className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Slide-in panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: easeApple }}
            className="fixed top-0 right-0 z-50 flex h-full w-full max-w-lg flex-col bg-canvas shadow-2xl"
          >
            {/* Panel header */}
            <div className="border-hairline flex items-center justify-between border-b px-6 py-4">
              <div>
                <p className="text-caption text-ink-subtle font-mono tracking-widest uppercase">
                  {content.form.eyebrow}
                </p>
                <h2 className="text-heading-md text-ink mt-0.5 font-semibold">
                  {content.form.title}
                </h2>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Schließen"
                className="text-ink-muted hover:text-ink hover:bg-muted rounded-full p-2 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable form body */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <ContactForm content={content.form} onSuccess={() => setOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB trigger */}
      <motion.button
        onClick={() => setOpen(true)}
        aria-label="Kontaktformular öffnen"
        className="fixed right-6 bottom-6 z-40 flex items-center gap-2 rounded-pill bg-ink px-5 py-3 text-canvas shadow-lg transition-colors hover:bg-ink/90"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15, ease: easeApple }}
      >
        <MessageCircle size={18} />
        <span className="text-body-md font-medium">Rezept hochladen</span>
      </motion.button>
    </>
  );
}
