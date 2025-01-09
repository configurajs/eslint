import { Linter } from 'eslint'
import {
  createCommentsConfig,
  createIgnoresConfig,
  createJsConfig,
  createJsxConfig,
  createPrettierConfig,
  createReactConfig,
  createTsConfig,
  createVueConfig,
  type CreateVueConfigOptions,
} from './configs'
import { createRulesConfig } from './configs/rules'

export type DefineConfigOptionsVue = Partial<Pick<CreateVueConfigOptions, 'version'>>

export interface DefineConfigOptions {
  ts?: boolean
  jsx?: boolean
  vue?: boolean | DefineConfigOptionsVue
  react?: boolean
  comments?: boolean
  rules?: Linter.RulesRecord
  ignores?: string[]
  overrides?: Linter.Config[]
}

export function defineConfig(options: DefineConfigOptions = {}): Linter.Config[] {
  const {
    ts = true,
    jsx = true,
    vue = true,
    react = false,
    comments = true,
    ignores = [],
    rules = {},
    overrides = [],
  } = options

  const configs: Linter.Config[] = [...createIgnoresConfig({ ignores }), ...createJsConfig(), ...createPrettierConfig()]

  if (comments) {
    configs.push(...createCommentsConfig())
  }

  if (ts) {
    configs.push(...createTsConfig({ exts: vue ? ['vue'] : [] }))
  }

  if (jsx) {
    configs.push(...createJsxConfig())
  }

  if (vue) {
    configs.push(...createVueConfig({ ts, version: vue === true ? 3 : (vue.version ?? 3) }))
  }

  if (react) {
    configs.push(...createReactConfig())
  }

  return [...configs, ...createRulesConfig(rules), ...overrides]
}
