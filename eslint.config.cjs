const {defineConfig} = require("eslint/config");
const importPlugin = require("eslint-plugin-import");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const simpleImportSort = require("eslint-plugin-simple-import-sort");
const tseslint = require("typescript-eslint");

module.exports = defineConfig([
  react.configs.flat.recommended,
  reactHooks.configs.flat.recommended,
  {
    ignores: [
      "node_modules/**",
      ".expo/**",
      "dist/**",
      "build/**",
      "coverage/**",
    ],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
      globals: {
        console: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
      },
    },
    settings: {
      react: {version: "detect"},
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react,
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "react-hooks/set-state-in-effect": "warn",
      quotes: ["error", "double"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
]);
