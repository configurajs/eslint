import { Linter } from 'eslint'
import jsdoc from 'eslint-plugin-jsdoc'
import { createConfigName } from '../utils'

export function createJsdocConfig(): Linter.Config[] {
  return [
    {
      name: createConfigName('jsdoc'),
      plugins: {
        jsdoc,
      },
      rules: {
        'jsdoc/check-access': 'warn',
      },
    },
  ]
}
