import deepmerge from 'deepmerge'
import { PartialGenerator } from './interfaces'

export const configAroundBrowser = {
  dependencies: [],
  settings: {
    env: {
      browser: true
    }
  }
}

export const useBrowser: PartialGenerator = (previous) => {
  return deepmerge(previous, configAroundBrowser)
}
