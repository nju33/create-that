import { extendPartialBy } from '@nju33/create-__helpers'

export const configAroundWorker = {
  dependencies: [],
  settings: {
    env: {
      worker: true
    }
  }
}

export const useWorker = extendPartialBy(configAroundWorker)