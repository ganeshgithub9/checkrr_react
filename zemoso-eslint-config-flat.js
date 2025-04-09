import js from '@eslint/js';
import babelEslintParser from 'babel-eslint';

export default [
  js.configs.recommended, // ESLint recommended rules
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'], // Linting targets
    languageOptions: {
      globals: {
        MyGlobal: true // Global variable
      },
      parser: babelEslintParser, // Babel parser
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      semi: 'error',
      curly: 'error',
      'no-console': 'error',
      'array-callback-return': 2,
      eqeqeq: 2,
      'max-statements-per-line': [2, { max: 1 }],
      'max-nested-callbacks': [2, 2],
      'max-depth': [2, { max: 5 }],
      'no-eval': 2,
      'no-return-assign': 2,
      'no-param-reassign': 2,
      'no-var': 2,
      'prefer-const': 2
    }
  }
];
