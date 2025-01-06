import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import { createConfigName } from '../utils'
import { Linter } from 'eslint'

export interface CreateTsConfigOptions {
  exts?: string[]
}

export function createTsConfig(options: CreateTsConfigOptions = {}): Linter.Config[] {
  const { exts = [] } = options

  const files = ['**/*.?([cm])ts', '**/*.?([cm])tsx', ...exts.map((ext) => `**/*.${ext}`)]

  return [
    {
      name: createConfigName('ts/setup'),
      plugins: {
        '@typescript-eslint': tsPlugin as any,
      },
    },
    {
      name: createConfigName('ts/parser'),
      files,
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          sourceType: 'module',
          extraFileExtensions: exts.map((ext) => `.${ext}`),
        },
      },
    },
    {
      name: createConfigName('ts/rules'),
      files,
      rules: {
        'no-array-constructor': 'off',
        'no-unused-vars': 'off',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/no-unsafe-declaration-merging': 'error',
        '@typescript-eslint/no-unsafe-function-type': 'error',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-wrapper-object-types': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-for-in-array': 'off',
        '@typescript-eslint/no-empty-object-type': 'off',
      },
    },
  ]
}
