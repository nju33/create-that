/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  env: {
    jest: true,
    browser: true
  },
  extends: ['standard-with-typescript', 'prettier'],
  plugins: [
    'testing-library',
    'simple-import-sort',
    'sort-destructure-keys',
    'tsdoc'
  ],
  rules: {
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^\\u0000', '^@?\\w', '^[^.]', '^\\.']]
      }
    ]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'tsdoc/syntax': 'warn'
      }
    },
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'react/prop-types': 'off',
        'sort-destructure-keys/sort-destructure-keys': [
          'error',
          { caseSensitive: false }
        ]
      }
    }
  ]
}
