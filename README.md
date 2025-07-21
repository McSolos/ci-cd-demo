✅ Step 1: Set Up a Vite React Project
🔧 What I Did:
Use Vite to scaffold a React app

Install basic linting tools

Prepare the app for deployment



add base: '/ci-cd-demo/', to vite.config.js
npm install --save-dev eslint
npx eslint --init

update eslintconfig.js to:
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


"npx eslint src" to test
"npx eslint src --fix" to fix

✅ Step 2: Push to GitHub
Create a public GitHub repo and push your code

✅ Step 3: Set Up GitHub Actions Workflow
Lint (e.g., eslint)

Optional: Run tests

Deploy using peaceiris/actions-gh-pages

✅ Step 3: Set Up GitHub Actions Workflow
We'll now:

Create a GitHub Actions workflow to:

Install dependencies

Lint the code using ESLint

(Optional) Run tests

Build the Vite app

Deploy the build to GitHub Pages

