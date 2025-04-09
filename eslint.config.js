import typeScriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typeScriptEslintParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from './globals.json' with { type: 'json' };
import zemosoConfig from './zemoso-eslint-config-flat.js';
import jest from 'eslint-plugin-jest';

export default [
  prettierConfig,
  ...zemosoConfig,
  {
    // ✅ Apply ESLint rules to all JS, JSX, TS, and TSX files
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],

    plugins: {
      '@typescript-eslint': typeScriptEslintPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      jest,
      prettier: prettierPlugin
    },

    languageOptions: {
      parser: typeScriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser, // Includes window, document, etc.
        ...jest.configs.recommended.languageOptions?.globals,
        jest: 'true',
        describe: 'true',
        test: 'true',
        expect: 'true',
        beforeEach: 'true',
        afterEach: 'true'
      }
    },

    settings: {
      react: {
        version: 'detect' // Auto-detect React version
      }
    },

    rules: {
      ...jest.configs.recommended.rules,
      // ✅ React Rules
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      // ✅ Hooks Rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // ✅ Prettier Integration
      'prettier/prettier': 'error',
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error'
    }
  }
];
