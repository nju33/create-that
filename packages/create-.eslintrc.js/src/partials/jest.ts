import { extendPartialBy } from '@nju33/create-__helpers'


export const configAroundJest = {
  dependencies: ['eslint-plugin-jest'],
  settings: {
    env: {
      jest: true
    },
    plugins: ['testing-library']
  }
}

export const useJest = extendPartialBy(configAroundJest)