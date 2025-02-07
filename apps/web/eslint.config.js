import { nextJsConfig } from "@repo/eslint-config/next-js";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  ...nextJsConfig,
  {
    settings: {
      react: {
        version: "detect", // Détecte automatiquement la version de React
      },
    },
  },
];