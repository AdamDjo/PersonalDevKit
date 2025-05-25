import js from '@eslint/js';
// import eslintConfigPrettier from 'eslint-config-prettier';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';
import onlyWarn from 'eslint-plugin-only-warn';
// import pluginPrettier from 'eslint-plugin-prettier'; // Importez le plugin Prettier

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 */
export const config = [
  js.configs.recommended,
  // eslintConfigPrettier, // Désactive les règles ESLint qui entrent en conflit avec Prettier
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
      // prettier: pluginPrettier, // ✅ Correct
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
      // 'prettier/prettier': 'warn', // Active Prettier en tant que règle ESLint
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ['dist/**'],
  },
];
