import { Linter } from 'eslint'
import {
  createCommentsConfig,
  createIgnoresConfig,
  createJsConfig,
  createJsxConfig,
  createPrettierConfig,
  createReactConfig,
  createTsConfig,
  createVitestConfig,
  createVueConfig,
  type CreateVueConfigOptions,
} from './configs'
import { createRulesConfig } from './configs/rules'

export type DefineConfigOptionsVue = Partial<Pick<CreateVueConfigOptions, 'version'>>

export interface DefineConfigOptions {
  /**
   * Enable TypeScript support
   * @default true
   */
  ts?: boolean
  /**
   * Enable JSX support
   * @default true
   */
  jsx?: boolean
  /**
   * Enable Vue support, version 3 by default
   * @default true
   */
  vue?: boolean | DefineConfigOptionsVue
  /**
   * Enable React support
   * @default false
   */
  react?: boolean
  /**
   * Enable Vitest support
   * @default false
   */
  vitest?: boolean
  /**
   * Enable eslint comments support
   * @default true
   */
  comments?: boolean
  /**
   * Custom rules
   */
  rules?: Linter.RulesRecord
  /**
   * Ignore files
   */
  ignores?: string[]
  /**
   * Override eslint configs
   */
  overrides?: Linter.Config[]
}

export function defineConfig(options: DefineConfigOptions = {}): Linter.Config[] {
  const {
    ts = true,
    jsx = true,
    vue = true,
    react = false,
    vitest = false,
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

  if (vitest) {
    configs.push(...createVitestConfig())
  }

  return [...configs, ...createRulesConfig(rules), ...overrides]
}
