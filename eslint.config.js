import typeScriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typeScriptEslintParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default [
  {
    // ✅ Apply ESLint rules to all JS, JSX, TS, and TSX files
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],

    plugins: {
      '@typescript-eslint': typeScriptEslintPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin
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
        ...globals.browser // Includes window, document, etc.
      },
      env: {
        browser: true,
        node: true,
        es6: true
      }
    },

    settings: {
      react: {
        version: 'detect' // Auto-detect React version
      }
    },

    extends: [prettierConfig],

    rules: {
      // ✅ React Rules
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      // ✅ Hooks Rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // ✅ Prettier Integration
      'prettier/prettier': 'error'
    }
  }
];
