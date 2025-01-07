import { Linter } from 'eslint'
import prettierPlugin from 'eslint-plugin-prettier'
import { createConfigName } from '../utils'

export function createPrettierConfig(): Linter.Config[] {
  return [
    {
      name: createConfigName('prettier/setup'),
      plugins: {
        prettier: prettierPlugin,
      },
    },
    {
      name: createConfigName('prettier/rules'),
      rules: {
        'prettier/prettier': 'error',
      },
    },
  ]
}
