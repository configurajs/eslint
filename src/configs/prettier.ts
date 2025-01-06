import prettierPlugin from 'eslint-plugin-prettier'
import { Linter } from 'eslint'
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
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
      },
    },
  ]
}
