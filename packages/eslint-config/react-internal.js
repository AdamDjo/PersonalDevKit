import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReact from 'eslint-plugin-react';
import parserTs from '@typescript-eslint/parser';
import globals from 'globals';
import { config as baseConfig } from './base.js';
 import pluginPrettier from 'eslint-plugin-prettier'; // Importez le plugin Prettier

/**
 * A custom ESLint configuration for libraries that use React.
 *
 * @type {import("eslint").Linter.Config}
 */
export default  [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier, // Désactive les règles ESLint qui entrent en conflit avec Prettier
  ...tseslint.configs.recommended,
  // pluginReact.configs.flat.recommended,
  
    {
      languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
        globals: {
          ...globals.browser,
          ...globals.serviceworker,
        },
      },
  },
  {
    plugins: {
      'react-hooks': pluginReactHooks,
       prettier: pluginPrettier, // ✅ Correct
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      'react/react-in-jsx-scope': 'off',
       'prettier/prettier': 'warn', // Active Prettier en tant que règle ESLint
    },
  },
];
