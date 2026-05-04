/*
 * cn — className merge utility.
 *
 * What: Combines clsx (conditional class joining) with tailwind-merge
 * (conflict resolution — e.g. `px-4 px-6` becomes just `px-6`).
 *
 * Why: Components frequently accept className overrides. Without conflict
 * resolution, callers can't reliably override spacing/color utilities. cn()
 * is the one-stop helper used everywhere a className is composed.
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
