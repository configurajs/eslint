import { Linter } from 'eslint'
import { createConfigName } from '../utils'

export interface CreateIgnoresConfigOptions {
  ignores?: string[]
}

export function createIgnoresConfig(options: CreateIgnoresConfigOptions = {}): Linter.Config[] {
  const { ignores = [] } = options

  return [
    {
      name: createConfigName('ignores'),
      ignores: [
        '**/node_modules',
        '**/dist',
        '**/package-lock.json',
        '**/yarn.lock',
        '**/pnpm-lock.yaml',
        '**/bun.lockb',
        '**/output',
        '**/coverage',
        '**/temp',
        '**/.temp',
        '**/tmp',
        '**/.tmp',
        '**/.history',
        '**/.vitepress/cache',
        '**/.nuxt',
        '**/.next',
        '**/.svelte-kit',
        '**/.vercel',
        '**/.changeset',
        '**/.idea',
        '**/.vscode',
        '**/.cache',
        '**/.output',
        '**/.vite-inspect',
        '**/.yarn',
        '**/vite.config.*.timestamp-*',
        '**/CHANGELOG*.md',
        '**/*.min.*',
        '**/LICENSE*',
        '**/__snapshots__',
        '**/auto-import?(s).d.ts',
        '**/components.d.ts',
        ...ignores,
      ],
    },
  ]
}
