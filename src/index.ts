import { Linter } from 'eslint'
import {
  createJsConfig,
  createJsxConfig,
  createTsConfig,
  createCommentsConfig,
  createPrettierConfig,
  createVueConfig,
  createIgnoresConfig,
} from './configs'

export interface DefineConfigOptions {
  ts?: boolean
  jsx?: boolean
  vue?: boolean
  comments?: boolean
  ignores?: string[]
  overrides?: Linter.Config[]
}

export function defineConfig(options: DefineConfigOptions = {}): Linter.Config[] {
  const { ts = true, jsx = true, vue = true, comments = true, ignores = [], overrides = [] } = options

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
    configs.push(...createVueConfig({ ts }))
  }

  return [...configs, ...overrides]
}
