/*
 * Ambient module declarations.
 *
 * What: Tells TypeScript about side-effect imports that ship CSS but no
 * .d.ts (notably the @fontsource-variable/* packages, which we import for
 * their side effect of registering @font-face rules).
 *
 * Why: Without these, TS errors with TS2882 ("Cannot find module or type
 * declarations for side-effect import"). Declaring them as empty modules
 * is the cheapest, safest fix — they have no runtime exports.
 */
declare module "@fontsource-variable/inter";
declare module "@fontsource-variable/jetbrains-mono";
