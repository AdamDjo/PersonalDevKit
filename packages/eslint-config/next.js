import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginNext from "@next/eslint-plugin-next";
import pluginPrettier from "eslint-plugin-prettier";
import { config as baseConfig } from "./base.js";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  ...baseConfig,
  {
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        React: "readonly",
      },
    },
    plugins: {
      "@next/next": pluginNext,
      prettier: pluginPrettier,
      "react-hooks": pluginReactHooks,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
      ...pluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          ts: "never",
          tsx: "never",
          js: "never",
          jsx: "never",
        },
      ],
      "prettier/prettier": "warn",
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        // typescript: {},
        node: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      },
    },
  },
  {
    files: ["app/**/*.tsx"],
    rules: {
      "react/function-component-definition": "off",
    },
  },
];
