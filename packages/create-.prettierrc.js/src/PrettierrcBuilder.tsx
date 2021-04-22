import { Template } from '@nju33/create-__components'
import { format, PartialObject } from '@nju33/create-__helpers'
import { render } from 'ink'
import React, { useMemo, useState } from 'react'
import {
  postprocess,
  preprocess,
  useEslint,
  useTailwindcss,
} from './partials'

const defaultFlags = [
  {
    name: 'useEslint',
    focused: true,
    choosed: true
  },
  {
    name: 'useTailwindcss',
    focused: false,
    choosed: false
  },
]

function Builder(): React.ReactElement {
  const [flags, setFlags] = useState(defaultFlags)

  const flagNames = flags
    .filter((flag) => flag.choosed)
    .map((flag) => flag.name)
  const { code, installCommand } = useMemo(() => {
    let fns = flagNames.map((name) => {
      switch (name) {
        case 'useEslint': {
          return useEslint
        }
        case 'useTailwindcss': {
          return useTailwindcss
        }
        default: {
          throw new Error('unknown flag name')
        }
      }
    })

    fns = [preprocess, ...fns, postprocess]

    const generated = fns.reduce<PartialObject>(
      (acc, fn) => {
        return fn(acc)
      },
      { settings: {}, dependencies: [] as string[] }
    )

    const code = format(`
module.exports = ${JSON.stringify(generated.settings)}
    `)

    const installCommand = [
      'yarn add --dev \\',
      generated.dependencies.map((dependencyName, i) => {
        return `  ${dependencyName}${i < generated.dependencies.length - 1 ? ' \\' : ''}`
      }).join('\n')
    ].join('\n')

    return {code, installCommand}
  }, [flagNames.join()])

  return (
    <Template
      flags={flags}
      filename=".prettierrc.js"
      installCommand={installCommand}
      code={code}
      onChooseFlag={(index) => {
        setFlags((flags) => {
          flags[index].choosed = !flags[index].choosed

          return [...flags]
        })
      }}
      onChangeFocused={(index) => {
        setFlags((flags) => {
          return [
            ...flags.map((flag, currentIndex) => {
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
