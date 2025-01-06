import { Linter } from 'eslint'
import { createConfigName } from '../utils'

export function createJsxConfig(): Linter.Config[] {
  return [
    {
      name: createConfigName('jsx/setup'),
      files: ['**/*.?([cm])jsx', '**/*.?([cm])tsx'],
    },
  ]
}
