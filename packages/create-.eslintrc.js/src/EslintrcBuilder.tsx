import { Template } from '@nju33/create-__components'
// import {compose} from 'ramda'
import { format } from '@nju33/create-__helpers'
import { render } from 'ink'
import React, { useMemo, useState } from 'react'
import {
  postprocess,
  preprocess,
  useBrowser,
  useJest,
  useNode,
  useReact,
  useTypeScript,
  useWorker
} from './partials'
import { PartialObject } from './partials/interfaces'

const defaultFlags = [
  {
    name: 'useTypeScript',
    focused: true,
    choosed: false
  },
  {
    name: 'useReact',
    focused: false,
    choosed: false
  },
  {
    name: 'useJest',
    focused: false,
    choosed: false
  },
  {
    name: 'useBrowser',
    focused: false,
    choosed: false
  },
  {
    name: 'useNode',
    focused: false,
    choosed: false
  },
  {
    name: 'useWorker',
    focused: false,
    choosed: false
  }
]

function Builder(): React.ReactElement {
  const [flags, setFlags] = useState(defaultFlags)

  const flagNames = flags
    .filter((flag) => flag.choosed)
    .map((flag) => flag.name)
  const { code, installCommand } = useMemo(() => {
    let fns = flagNames.map((name) => {
      switch (name) {
        case 'useBrowser': {
          return useBrowser
        }
        case 'useJest': {
          return useJest
        }
        case 'useNode': {
          return useNode
        }
        case 'useReact': {
          return useReact
        }
        case 'useTypeScript': {
          return useTypeScript
        }
        case 'useWorker': {
          return useWorker
        }
        default: {
          throw new Error('unknown flag name')
        }
      }
    })

    fns = [preprocess, ...fns, postprocess]

    const generated = fns.reduce<PartialObject>(
      (acc, fn) => {
        return fn(acc as any)
      },
      { settings: {}, dependencies: [] as string[] }
    )

    const code = format(`
/**
 * @type {import('eslint').Linter.Config}
 */
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
      filename=".eslintrc.js"
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
