import globals from "globals";
import js from "@eslint/js";
import { Linter } from "eslint";

export interface DefineConfigOptions {
  overrides?: Linter.Config[];
}

export function defineConfig(
  options: DefineConfigOptions = {},
): Linter.Config[] {
  const { overrides = [] } = options;

  return [
    {
      name: "configurajs/js/setup",
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 2022,
          sourceType: "module",
        },
        sourceType: "module",
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
    },
    js.configs.recommended,
    {
      rules: {
        eqeqeq: ["error", "always", { null: "ignore" }],
        curly: "error",
        "default-param-last": "error",
        "max-params": ["error", 3],
        "no-caller": "error",
        "no-empty": ["error", { allowEmptyCatch: true }],
      },
    },
    ...overrides,
  ];
}
