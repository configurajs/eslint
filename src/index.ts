import { Linter } from 'eslint'
import {
  createJsConfig,
  createJsxConfig,
  createTsConfig,
  createCommentsConfig,
  createPrettierConfig,
  createVueConfig,
} from './configs'

export interface DefineConfigOptions {
  ts?: boolean
  jsx?: boolean
  vue?: boolean
  comments?: boolean
  overrides?: Linter.Config[]
}

export function defineConfig(options: DefineConfigOptions = {}): Linter.Config[] {
  const { ts = true, jsx = true, vue = true, comments = true, overrides = [] } = options

  const configs: Linter.Config[] = [...createJsConfig(), ...createPrettierConfig()]

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
