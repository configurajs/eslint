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
        ...tsPlugin.configs.recommended.rules,
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-for-in-array': 'off',
        '@typescript-eslint/no-empty-object-type': 'off',
      },
    },
  ]
}
