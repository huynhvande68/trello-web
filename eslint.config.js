import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // 💡 Code quality
      eqeqeq: ["error", "always"], // Luôn dùng === thay vì ==
      "no-console": "warn", // Cảnh báo khi dùng console.log
      "no-debugger": "error", // Không cho phép debugger
      "no-var": "error", // Không dùng var
      "prefer-const": "error", // Ưu tiên dùng const nếu không gán lại
      "no-duplicate-imports": "error", // Không import trùng
      "no-empty-function": "warn",
      "no-magic-numbers": [
        "warn",
        { ignore: [0, 1], ignoreArrayIndexes: true, enforceConst: true },
      ],
      "consistent-return": "warn", // Tất cả branch trong hàm nên return giống nhau

      // 💅 Style / Readability
      indent: ["error", 2], // Thụt lề 2 spaces
      quotes: ["error", "single", { avoidEscape: true }],
      semi: ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "keyword-spacing": ["error", { before: true, after: true }],
      "space-before-blocks": ["error", "always"],
      "eol-last": ["error", "always"],
      "max-len": ["warn", { code: 100 }],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "import", next: "*" },
        { blankLine: "always", prev: "*", next: "return" },
      ],
    },
  },
];
