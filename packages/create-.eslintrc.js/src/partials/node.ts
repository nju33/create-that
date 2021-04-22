import { extendPartialBy } from '@nju33/create-__helpers'

export const configAroundNode = {
  dependencies: [],
  settings: {
  env: {
    node: true
  }
}
}

export  const useNode = extendPartialBy(configAroundNode)