import deepmerge from 'deepmerge'
import { PartialGenerator } from './interfaces'

export const configAroundJest = {
  dependencies: ['eslint-plugin-jest'],
  settings: {
    env: {
      jest: true
    },
    plugins: ['testing-library']
  }
}

export const useJest: PartialGenerator = (previous) => {
  return deepmerge(previous, configAroundJest)
}
