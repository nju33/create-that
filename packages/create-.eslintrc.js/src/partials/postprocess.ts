import { extendPartialBy } from '@nju33/create-__helpers'

export const laterSettings = {
  dependencies: [],
  settings: {
  extends: ['prettier'],
  }
}

export const postprocess = extendPartialBy(laterSettings)