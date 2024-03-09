/** @type { import("eslint").Linter.Config } */
module.exports = {
  rules: {
    semi: ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "no-else-return": ["error", {allowElseIf: false}],
    "no-lonely-if": "error",
    "no-tabs": "error",
    "eol-last": ["error", "always"],
  },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
};
