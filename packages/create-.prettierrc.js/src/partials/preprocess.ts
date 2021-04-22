import { extendPartialBy } from '@nju33/create-__helpers'

export const previousSettings = {
  dependencies: ['prettier'],
  settings: {
    arrowParens: 'always',
    bracketSpacing: true,
    jsxBracketSameLine: true,
    jsxSingleQuote: false,
    printWidth: 80,
    quoteProps: 'as-needed',
    semi: false,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'none',
    useTabs: false
  }
}

export const preprocess = extendPartialBy(previousSettings)
