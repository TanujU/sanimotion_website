/*
 * Sanimotion — ESLint flat config (ESLint 9)
 *
 * What: Lints TypeScript + React + JSX-a11y across the project. Disables
 * rules that conflict with Prettier (eslint-config-prettier last).
 *
 * Why: Quality gate #2 in the CI pipeline. Catching type-aware issues, a11y
 * regressions, and React hook misuse before they hit a PR.
 */
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  // Ignore generated and vendored output — never lint these.
  {
    ignores: [
      "build/**",
      ".react-router/**",
      "node_modules/**",
      "public/**",
      "*.config.{js,ts,mjs,cjs}",
    ],
  },

  // Base recommended sets (JS + TS).
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // React + hooks + a11y for source files.
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // RR7 / React 19 — the new JSX runtime makes the React import unneeded.
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      // Hooks correctness — non-negotiable.
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // a11y — recommended set, surfaced as warnings so CI can fail on them.
      ...jsxA11y.configs.recommended.rules,
      // Allow `_args` style for unused-but-required parameters (e.g., RR7 meta).
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },

  // Prettier compat — must come last to disable conflicting stylistic rules.
  prettier,
);
