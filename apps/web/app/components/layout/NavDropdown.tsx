/*
 * NavDropdown — desktop dropdown panel for a top-level nav item.
 *
 * UX:
 *   - Hover-open with a small (120 ms) close delay so the cursor can
 *     comfortably travel from trigger to panel without it snapping shut.
 *   - Click-toggle for touch devices.
 *   - Closes on Escape, on outside click, on route change.
 *   - The trigger itself is a <NavLink> — keyboard users can Tab to it
 *     and press Enter to navigate to the index page (e.g. /produkte),
 *     or use ArrowDown / Space / Enter to open the panel.
 *
 * Visual: glass-morphic panel beneath the trigger, hairline border, soft
 * shadow. Two columns when there are 6+ children, one column otherwise.
 * Children that themselves have `children` open a side flyout on hover.
 */
"use client";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "~/lib/cn";
import { easeApple } from "~/lib/motion";
import { Icon } from "~/components/primitives/Icon";
import { SmartLink } from "~/components/primitives/SmartLink";
import type { NavChild, NavItem } from "~/schemas/content";

const CLOSE_DELAY_MS = 120;

type NavDropdownProps = {
  item: NavItem;
};

export function NavDropdown({ item }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const children = item.children ?? [];
  const twoColumn = children.length >= 6;

  const cancelClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
  };

  // Close on outside click.
  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close on route change.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      {/* Trigger — a NavLink so Enter still navigates to the index page. */}
      <NavLink
        to={item.href}
        aria-haspopup="menu"
        aria-expanded={open}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || (e.key === " " && !open)) {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className={({ isActive }) =>
          cn(
            "text-body-lg duration-fast inline-flex items-center gap-1 font-semibold transition-colors",
            isActive ? "text-ink" : "text-ink-muted hover:text-ink",
          )
        }
      >
        <span>{item.label}</span>
        <ChevronDown
          size={16}
          aria-hidden
          className={cn(
            "ease-apple transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </NavLink>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            aria-label={item.label}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: easeApple }}
            className={cn(
              "absolute top-full left-1/2 z-50 mt-3 -translate-x-1/2",
              "border-hairline bg-canvas rounded-card border p-2",
              "shadow-soft",
              twoColumn ? "w-[38rem]" : "w-80",
            )}
          >
            <ul
              className={cn(
                "grid gap-1",
                twoColumn ? "grid-cols-2" : "grid-cols-1",
              )}
            >
              {children.map((child) => (
                <NavChildRow key={child.href} child={child} />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/*
 * NavChildRow — single row in the parent dropdown panel.
 *
 * If the child has its own `children`, the row becomes a flyout trigger:
 * hovering opens a side panel to the right with the sub-items. The row
 * itself is still a link to the child's index page (e.g. /produkte#orthesen).
 */
function NavChildRow({ child }: { child: NavChild }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const hasChildren = !!child.children?.length;

  const cancelClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(
      () => setOpen(false),
      CLOSE_DELAY_MS,
    );
  };

  return (
    <li
      role="none"
      className="relative"
      onMouseEnter={
        hasChildren
          ? () => {
              cancelClose();
              setOpen(true);
            }
          : undefined
      }
      onMouseLeave={hasChildren ? scheduleClose : undefined}
    >
      <SmartLink
        href={child.href}
        role="menuitem"
        aria-haspopup={hasChildren ? "menu" : undefined}
        aria-expanded={hasChildren ? open : undefined}
        className="duration-fast hover:bg-muted flex items-center gap-2.5 rounded-md px-3 py-2 transition-colors"
      >
        {child.icon && (
          <Icon
            name={child.icon}
            size={16}
            className="text-ink-subtle shrink-0"
          />
        )}
        <span className="min-w-0 flex-1">
          <span className="text-body-md text-ink block font-medium">
            {child.label}
          </span>
          {child.description && (
            <span className="text-caption text-ink-subtle mt-0.5 block">
              {child.description}
            </span>
          )}
        </span>
        {hasChildren && (
          <ChevronRight
            size={14}
            aria-hidden
            className="text-ink-subtle shrink-0"
          />
        )}
      </SmartLink>

      <AnimatePresence>
        {hasChildren && open && (
          <motion.div
            role="menu"
            aria-label={child.label}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -6 }}
            transition={{ duration: 0.16, ease: easeApple }}
            className={cn(
              "absolute top-0 left-full z-50 ml-2 w-72",
              "border-hairline bg-canvas rounded-card border p-2",
              "shadow-soft",
            )}
          >
            <ul className="space-y-0.5">
              {child.children!.map((sub) => (
                <li key={`${child.href}::${sub.label}`} role="none">
                  <SmartLink
                    href={sub.href}
                    role="menuitem"
                    className="duration-fast text-body-md text-ink-muted hover:bg-muted hover:text-ink block rounded-md px-3 py-1.5 transition-colors"
                  >
                    {sub.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
