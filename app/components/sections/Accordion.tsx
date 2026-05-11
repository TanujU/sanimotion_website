/*
 * Accordion — minimal native <details>/<summary> based.
 *
 * Uses the browser's built-in disclosure widget for a11y guarantees
 * (keyboard, screen reader). Animates open/close with a Framer Motion
 * AnimatePresence wrapper around the answer body.
 *
 * No JS state — `open` lives on the <details> element. We listen for the
 * 'toggle' event to drive the chevron rotation in component state for
 * a smoother visual cue.
 */
"use client";
import { useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { easeApple } from "~/lib/motion";
import { cn } from "~/lib/cn";
import { SmartLink } from "~/components/primitives/SmartLink";

type AccordionItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

// Renders inline `[label](href)` tokens as links so content modules
// (which are plain .ts files) can express FAQ cross-links without JSX.
function renderAnswer(answer: string): ReactNode {
  const nodes: ReactNode[] = [];
  let lastIdx = 0;
  let key = 0;
  for (const match of answer.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)) {
    const idx = match.index ?? 0;
    if (idx > lastIdx) nodes.push(answer.slice(lastIdx, idx));
    nodes.push(
      <SmartLink
        key={key++}
        href={match[2]}
        className="text-ink decoration-ink-subtle/50 hover:decoration-accent underline underline-offset-4 transition-colors"
      >
        {match[1]}
      </SmartLink>,
    );
    lastIdx = idx + match[0].length;
  }
  if (lastIdx < answer.length) nodes.push(answer.slice(lastIdx));
  return nodes.length > 0 ? <>{nodes}</> : answer;
}

export function AccordionItem({
  question,
  answer,
  defaultOpen = false,
}: AccordionItemProps) {
  const ref = useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = useState(defaultOpen);

  return (
    <details
      ref={ref}
      open={defaultOpen}
      onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}
      className="border-hairline border-b last:border-b-0"
    >
      <summary
        className={cn(
          "flex cursor-pointer list-none items-center justify-between gap-6 py-6",
          "text-heading-md text-ink font-medium tracking-tight",
          "duration-fast hover:text-ink/80 transition-colors",
          "[&::-webkit-details-marker]:hidden",
        )}
      >
        <span>{question}</span>
        <ChevronDown
          size={20}
          aria-hidden
          className={cn(
            "text-ink-subtle ease-apple shrink-0 transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </summary>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: easeApple }}
            className="overflow-hidden"
          >
            <p className="text-body-lg text-ink-muted max-w-[70ch] pb-8">
              {renderAnswer(answer)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </details>
  );
}
