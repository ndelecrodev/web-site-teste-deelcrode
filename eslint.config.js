import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import astro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default defineConfig(
  globalIgnores(['dist', '.astro', 'node_modules', 'playwright-report', 'test-results', '.lighthouse']),
  js.configs.recommended,
  tseslint.configs.strict,
  astro.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
    },
  },
  {
    files: ['integrations/**', '*.config.*'],
    languageOptions: { globals: { process: 'readonly', URL: 'readonly' } },
  },
);
