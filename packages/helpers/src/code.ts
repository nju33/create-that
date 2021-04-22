import prettier from 'prettier'

export function format(code: string): string {
  return prettier.format(code, {
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
  })
}

export function formatJson(code: string): string {
  return prettier.format(code, {
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
    useTabs: false,
    parser: 'json'
  })
}
