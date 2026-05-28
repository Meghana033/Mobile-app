import baseJs from "@eslint/js";
import browserGlobals from "globals";
import hooksPlugin from "eslint-plugin-react-hooks";
import refreshPlugin from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["dist", "build"]
  },

  {
    files: ["src/**/*.{js,jsx}"],

    extends: [
      baseJs.configs.recommended,
      hooksPlugin.configs.flat.recommended,
      refreshPlugin.configs.vite
    ],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },

      globals: {
        ...browserGlobals.browser
      }
    },

    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ]
    }
  }
]);
