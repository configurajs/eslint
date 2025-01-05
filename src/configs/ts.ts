import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { createConfigName } from "../utils";
import { Linter } from "eslint";
import { createJsRules } from "./js";

export function createTsConfig(): Linter.Config[] {
  const files = ["**/*.?([cm])ts", "**/*.?([cm])tsx"];

  return [
    {
      name: createConfigName("ts/setup"),
      plugins: {
        "@typescript-eslint": tsPlugin as any,
      },
    },
    {
      name: createConfigName("ts/parser"),
      files,
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          sourceType: "module",
        },
      },
    },
    {
      name: createConfigName("ts/rules"),
      files,
      rules: {
        ...createJsRules(),
        ...tsPlugin.configs.recommended.rules,
        "@typescript-eslint/ban-ts-comment": [
          "error",
          { "ts-expect-error": "allow-with-description" },
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-for-in-array": "off",
        "@typescript-eslint/no-empty-object-type": "off",
      },
    },
  ];
}
