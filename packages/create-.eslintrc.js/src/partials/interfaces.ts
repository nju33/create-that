export interface PartialObject {
  settings: object
  dependencies: string[]
}

export type PartialGenerator = (previous: PartialObject) => PartialObject
