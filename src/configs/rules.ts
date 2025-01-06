import { Linter } from 'eslint'
import { createConfigName } from '../utils'

export function createRulesConfig(rules: Linter.RulesRecord): Linter.Config[] {
  return [
    {
      name: createConfigName('rules'),
      rules,
    },
  ]
}
