import globals from "globals";
import js from "@eslint/js";
import { createConfigName } from "../utils";
import { Linter } from "eslint";

export function createJsRules(): Linter.RulesRecord {
  return {
    ...js.configs.recommended.rules,
    eqeqeq: ["error", "always", { null: "ignore" }],
    curly: "error",
    "default-param-last": "error",
    "max-params": ["error", 3],
    "no-caller": "error",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-with": "off",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "require-await": "error",
    "symbol-description": "error",
    yoda: "error",
  };
}

export function createJsConfig(): Linter.Config[] {
  return [
    {
      name: createConfigName("js/setup"),
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
    {
      name: createConfigName("js/rules"),
      rules: createJsRules(),
    },
  ];
}
