import { extendPartialBy } from '@nju33/create-__helpers'

export const configAroundReact = {
  dependencies: [
    'eslint-config-standard-react',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks'
  ],
  settings: {
    extends: ['standard-react'],
    plugins: ['react-hooks'],
    overrides: [
      {
        files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
        rules: {
          'react/prop-types': 'off'
        }
      }
    ]
  }
}

export const useReact = extendPartialBy(configAroundReact)