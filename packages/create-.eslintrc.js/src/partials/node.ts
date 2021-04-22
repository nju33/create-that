import deepmerge from 'deepmerge'
import { PartialGenerator } from './interfaces'

export const configAroundNode = {
  dependencies: [],
  settings: {
  env: {
    node: true
  }
}
}

export  const useNode: PartialGenerator = (previous) => {
  return deepmerge(previous, configAroundNode)
}
