import deepmerge from 'deepmerge'
import { PartialGenerator } from './interfaces'

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

export const useReact: PartialGenerator = (previous) => {
  return deepmerge(previous, configAroundReact)
}
