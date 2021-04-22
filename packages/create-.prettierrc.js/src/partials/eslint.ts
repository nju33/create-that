import { extendPartialBy } from '@nju33/create-__helpers'

export const configAroundEslint = {
  dependencies: ['eslint-config-prettier'],
  settings: {}
}

export const useEslint = extendPartialBy(configAroundEslint)
