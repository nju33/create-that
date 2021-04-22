import deepmerge from 'deepmerge'
import { PartialGenerator } from './interfaces'

export const laterSettings = {
  dependencies: [],
  settings: {
  extends: ['prettier'],
  }
}

export const postprocess: PartialGenerator = (previous) => {
  return deepmerge(previous, laterSettings)
}
