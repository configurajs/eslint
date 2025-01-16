import vitestPlugin from '@vitest/eslint-plugin'
import { Linter } from 'eslint'
import { createConfigName } from '../utils'

export function createVitestConfig(): Linter.Config[] {
  return [
    {
      name: createConfigName('vitest/setup'),
      plugins: {
        vitest: vitestPlugin,
      },
    },
    {
      name: createConfigName('vitest/rules'),
      rules: {
        'vitest/expect-expect': 'error',
        'vitest/no-commented-out-tests': 'warn',
        'vitest/no-identical-title': 'error',
        'vitest/no-import-node-test': 'warn',
        'vitest/require-local-test-context-for-concurrent-snapshots': 'warn',
        'vitest/valid-describe-callback': 'error',
        'vitest/valid-expect': 'error',
        'vitest/valid-title': 'error',
      },
    },
  ]
}
