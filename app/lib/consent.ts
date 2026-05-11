/*
 * Consent store — gates analytics on the user's choice.
 *
 * Three states: "unset" (banner shows), "granted" (GA4 loads),
 * "denied" (no scripts ever loaded). Persisted in localStorage so the
 * choice survives reloads, mirroring the locale store. SSR renders
 * "unset"; on hydration the real value lands and the banner unmounts
 * if a choice was already made.
 */
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ConsentStatus = "unset" | "granted" | "denied";

type ConsentState = {
  status: ConsentStatus;
  setStatus: (status: Exclude<ConsentStatus, "unset">) => void;
  reset: () => void;
};

export const useConsentStore = create<ConsentState>()(
  persist(
    (set) => ({
      status: "unset",
      setStatus: (status) => set({ status }),
      reset: () => set({ status: "unset" }),
    }),
    { name: "sanimotion-consent" },
  ),
);
