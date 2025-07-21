import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      js,
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // JS rules
      ...js.configs.recommended.rules,
      // React rules
      ...pluginReact.configs.recommended.rules,
      // Modern React (no need to import React in scope)
      "react/react-in-jsx-scope": "off",
      "react/jsx-no-target-blank": ["warn", { enforceDynamicLinks: "always" }],
    },
  },
]);
