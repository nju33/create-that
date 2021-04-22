import { extendPartialBy } from '@nju33/create-__helpers'

export const configAroundBrowser = {
  dependencies: [],
  settings: {
    env: {
      browser: true
    }
  }
}

export const useBrowser = extendPartialBy(configAroundBrowser)