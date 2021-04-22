import deepmerge from 'deepmerge'

export interface PartialObject {
  dependencies: string[]
  settings: object
}

export type ExtendPartial = (previous: PartialObject) => PartialObject

export type ExtendPartialBy = (object: PartialObject) => ExtendPartial

export const extendPartialBy = (object: PartialObject) => {
  return (previous: PartialObject) => {
    return deepmerge(previous, object)
  }
}
