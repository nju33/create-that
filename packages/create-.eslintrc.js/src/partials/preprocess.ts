import deepmerge from 'deepmerge'
import { PartialGenerator } from './interfaces'

export const previousSettings = {
  dependencies: [
    'eslint',
    '@types/eslint',
    'eslint-import-resolver-node',
    'eslint-config-standard',
    'eslint-plugin-import',
    'eslint-plugin-node',
    'eslint-plugin-promise',
    'eslint-plugin-simple-import-sort'
  ],
  settings: {
  plugins: [
    'simple-import-sort',
    'sort-destructure-keys',
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
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'sort-destructure-keys/sort-destructure-keys': [
          'error',
          { caseSensitive: false }
        ]
      }
    }
  ],
}
}

export const  preprocess: PartialGenerator = (previous) => {
  return deepmerge(previous, previousSettings)
}
