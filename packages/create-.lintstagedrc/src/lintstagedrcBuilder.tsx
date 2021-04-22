import { Template } from '@nju33/create-__components'
import { formatJson } from '@nju33/create-__helpers'
import { render } from 'ink'
import React, { useMemo, useState } from 'react'

const defaultFlags = [] as any

function Builder(): React.ReactElement {
  const [flags, setFlags] = useState(defaultFlags)

  const flagNames = flags
    .filter((flag: any) => flag.choosed)
    .map((flag: any) => flag.name)
  const { code, installCommand } = useMemo(() => {
    const code = formatJson(`
{
  "*.ja.md": [
    "textlint"
  ],
  "*.+(js|ts)?(x)": [
    "eslint --fix && prettier --write"
  ],
  "*.+(html|graphql)": [
    "prettier --write"
  ],
  "*.{png,jpeg,jpg,gif,svg}": [
    "imagemin-lint-staged"
  ]
}
`)

    const dependencies = ['lint-staged', 'imagemin-lint-staged']

    const installCommand = [
      'yarn add --dev \\',
      dependencies
        .map((dependencyName, i) => {
          return `  ${dependencyName}${
            i < dependencies.length - 1 ? ' \\' : ''
          }`
        })
        .join('\n')
    ].join('\n')

    return { code, installCommand }
  }, [flagNames.join()])

  return (
    <Template
      flags={flags}
      filename=".lintstagedrc"
      installCommand={installCommand}
      code={code}
      onChooseFlag={(index) => {
        setFlags((flags: any) => {
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          flags[index].choosed = !flags[index].choosed

          return [...flags]
        })
      }}
      onChangeFocused={(index) => {
        setFlags((flags: any) => {
          return [
            ...flags.map((flag: any, currentIndex: number) => {
              if (index === currentIndex) {
                flag.focused = true
              } else {
                flag.focused = false
              }

              return flag
            })
          ]
        })
      }}
    />
  )
}

export function process(): void {
  render(<Builder />)
}
