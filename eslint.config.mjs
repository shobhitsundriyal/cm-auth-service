// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    ignores: [
      "**/dist/**",
      "**/node_modules/**",
      "./eslint.config.mjs",
      "./jest.config.js",
      "./tsconfig.json",
    ],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    // plugins: {
    //   "eslint-comments": (await import("eslint-plugin-eslint-comments"))
    //     .default,
    // },
    rules: {
      "trailing-comma": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      // "eslint-comments/no-unused-disable": "warn",
      // "dot-notation": "error",
    },
  }
);
