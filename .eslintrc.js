/** @ts-check @type import('eslint-config-standard-typescript-prettier/types').TsEslintConfig */
const config = require('eslint-config-standard-typescript-prettier')

module.exports = {
  ...config,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],

  // Custom ESLint Rules!
  rules: {
    ...config.rules,
    '@typescript-eslint/no-var-requires': 'off',
    'sort-imports': ['error', { allowSeparatedGroups: true }],
  },
}
