import globals from 'globals'
import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import-x'
import { createConfigName } from '../utils'
import { Linter } from 'eslint'

export function createJsConfig(): Linter.Config[] {
  return [
    {
      name: createConfigName('js/setup'),
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 2022,
          sourceType: 'module',
        },
        sourceType: 'module',
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      plugins: {
        'import-x': importPlugin as any,
      },
    },
    {
      name: createConfigName('js/rules'),
      rules: {
        ...js.configs.recommended.rules,
        eqeqeq: ['error', 'always', { null: 'ignore' }],
        curly: 'error',
        'default-param-last': 'error',
        'max-params': ['error', 3],
        'no-caller': 'error',
        'no-empty': ['error', { allowEmptyCatch: true }],
        'no-with': 'off',
        'prefer-const': 'error',
        'prefer-rest-params': 'error',
        'require-await': 'error',
        'symbol-description': 'error',
        yoda: 'error',
        'import-x/first': 'error',
        'import-x/no-duplicates': 'error',
        'import-x/no-mutable-exports': 'error',
        'import-x/no-self-import': 'error',
      },
    },
  ]
}
