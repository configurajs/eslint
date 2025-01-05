import { Linter } from "eslint";
import {
  createJsConfig,
  createJsxConfig,
  createTsConfig,
  createCommentsConfig,
} from "./configs";

export interface DefineConfigOptions {
  overrides?: Linter.Config[];
}

export function defineConfig(
  options: DefineConfigOptions = {},
): Linter.Config[] {
  const { overrides = [] } = options;

  return [
    ...createJsConfig(),
    ...createJsxConfig(),
    ...createTsConfig(),
    ...createCommentsConfig(),
    ...overrides,
  ];
}
