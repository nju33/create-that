import { Template } from '@nju33/create-__components'
import { format } from '@nju33/create-__helpers'
import { render } from 'ink'
import React, { useMemo, useState } from 'react'

const defaultFlags = [] as any

function Builder(): React.ReactElement {
  const [flags, setFlags] = useState(defaultFlags)

  const flagNames = flags
    .filter((flag: any) => flag.choosed)
    .map((flag: any) => flag.name)
  const { code, installCommand } = useMemo(() => {
    const code = format(`
module.exports = {
  extends: ['@commitlint/config-conventional']
}
`)

    const dependencies = [
      '@commitlint/cli',
      '@commitlint/config-conventional',  
    ]

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
      filename=".commitlintrc.js"
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
