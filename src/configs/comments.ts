// @ts-expect-error - no type declaration file
import commentsPlugin from "@eslint-community/eslint-plugin-eslint-comments";

import { Linter } from "eslint";
import { createConfigName } from "../utils";

export function createCommentsConfig(): Linter.Config[] {
  return [
    {
      name: createConfigName("comments/setup"),
      plugins: {
        "eslint-comments": commentsPlugin,
      },
    },
    {
      name: createConfigName("comments/rules"),
      rules: {
        "eslint-comments/no-aggregating-enable": "error",
        "eslint-comments/no-duplicate-disable": "error",
        "eslint-comments/no-unlimited-disable": "error",
        "eslint-comments/no-unused-enable": "error",
      },
    },
  ];
}
