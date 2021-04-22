import deepmerge from 'deepmerge'
import { PartialGenerator } from './interfaces'

export const configAroundWorker = {
  dependencies: [],
  settings: {
    env: {
      worker: true
    }
  }
}

export const useWorker: PartialGenerator = (previous) => {
  return deepmerge(previous, configAroundWorker)
}
