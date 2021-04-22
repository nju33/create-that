import { extendPartialBy } from '@nju33/create-__helpers'

export const configAroundTypescript = {
  dependencies: [
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'eslint-config-standard-with-typescript',
    'eslint-plugin-tsdoc'
  ],
  settings: {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json'
    },
    extends: ['standard-with-typescript'],
    plugins: ['tsdoc'],
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        rules: {
          'tsdoc/syntax': 'warn'
        }
      }
    ]
  }
}

export const useTypeScript = extendPartialBy(configAroundTypescript)