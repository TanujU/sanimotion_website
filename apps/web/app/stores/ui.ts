/*
 * UI store (Zustand) — client-only global UI state.
 *
 * What: Holds ephemeral UI flags — currently only the mobile-menu open state.
 * Exposes simple actions (open / close / toggle).
 *
 * Why: Centralizing the mobile-menu flag lets the Navbar trigger and the
 * MobileMenu overlay stay in sync without prop drilling, and lets us add
 * further client UI flags (e.g. theme toggle later) without restructuring.
 *
 * Non-goal: server data. Anything fetched lives in TanStack Query.
 */
import { create } from "zustand";

type UiState = {
  mobileMenuOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;
};

export const useUiStore = create<UiState>((set) => ({
  mobileMenuOpen: false,
  openMobileMenu: () => set({ mobileMenuOpen: true }),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
  toggleMobileMenu: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
}));
