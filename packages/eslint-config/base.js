
// import pluginPrettier from 'eslint-plugin-prettier'; // Importez le plugin Prettier
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import turboPlugin from "eslint-plugin-turbo";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginPrettier from "eslint-plugin-prettier";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const config= [
  js.configs.recommended, // Règles recommandées par ESLint
  eslintConfigPrettier, // Désactive les règles ESLint qui entrent en conflit avec Prettier
  ...tseslint.configs.recommended, // Règles TypeScript recommandées
  {
    plugins: {
      turbo: turboPlugin, // Plugin pour TurboRepo
      react: pluginReact, // Plugin pour React
      "react-hooks": pluginReactHooks, // Plugin pour les hooks React
      import: pluginImport, // Plugin pour les imports
      "jsx-a11y": pluginJsxA11y, // Plugin pour l'accessibilité JSX
      prettier: pluginPrettier, // Intègre Prettier en tant que plugin ESLint
    },
    rules: {
      // Règles de base Airbnb
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".js", ".jsx", ".ts", ".tsx"] }, // Autorise JSX dans les fichiers .tsx et .jsx
      ],
      "react/react-in-jsx-scope": "off", // Désactive la règle React scope (inutile avec React 17+)
      "react/jsx-props-no-spreading": "off", // Autorise le spreading des props
      "react/function-component-definition": [
        "error",
        { namedComponents: "arrow-function" }, // Force les composants fonctionnels en arrow functions
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        { ts: "never", tsx: "never" }, // Ignore les extensions pour TypeScript
      ],
      "no-param-reassign": [
        "error",
        { props: true, ignorePropertyModificationsFor: ["state"] }, // Autorise la réassignation de paramètres pour Redux/Immer
      ],

      // Règles strictes supplémentaires
      "no-console": "warn", // Avertit lors de l'utilisation de console.log
      "no-unused-vars": "warn", // Avertit pour les variables non utilisées
      "prefer-const": "error", // Force l'utilisation de `const` lorsque c'est possible
      "no-shadow": "error", // Interdit l'ombre de variables
      "no-undef": "error", // Interdit l'utilisation de variables non définies
      "no-unreachable": "error", // Interdit le code inaccessible
      "no-extra-boolean-cast": "error", // Interdit les casts booléens inutiles
      "no-useless-return": "error", // Interdit les retours inutiles
      "no-duplicate-imports": "error", // Interdit les imports en double
      "no-var": "error", // Interdit l'utilisation de `var`

      // Règles Prettier
      "prettier/prettier": ["error", { endOfLine: "auto" }], // Active Prettier en tant que règle ESLint

      // Règles spécifiques à TurboRepo
      "turbo/no-undeclared-env-vars": "warn", // Avertit pour les variables d'environnement non déclarées
    },
  },
  {
    ignores: ["dist/**", "node_modules/**"], // Ignore certains dossiers
  },
];
