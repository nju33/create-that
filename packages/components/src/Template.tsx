import {execSync} from 'child_process'
import fs from 'fs'
import { Box, useInput } from 'ink'
import path from 'path'
import React, { useMemo, useState } from 'react'
import termSize from 'term-size'
import { FlagList, FlagListProps } from './FlagList'
// import { Help } from './Help'
import { Preview, PreviewProps } from './Preview'

export interface TemplateProps
  extends Pick<FlagListProps, 'flags'>,
    Pick<PreviewProps, 'installCommand' | 'code' | 'filename'> {
  onChangeFocused: (index: number) => void
  onChooseFlag: (index: number) => void
}

export function Template({
  code,
  filename,
  flags,
  installCommand,
  onChangeFocused,
  onChooseFlag
}: TemplateProps): React.ReactElement {
  const [size] = useState(() => termSize())
  const [maxCodeLineNumber] = useState(() => code.split('\n').length)
  const [codeOffset, setCodeOffset] = useState(0)
  const [previewActive, setPreviewActive] = useState<'code' | 'installCommand'>(
    'code'
  )
  const [mode, setMode] = useState<'focusedFlags' | 'focusedFile'>(
    'focusedFlags'
  )

  useInput((input, key) => {
    if (mode === 'focusedFlags' && (input === 'j' || key.downArrow)) {
      const currentIndex = flags.findIndex((flag) => flag.focused)
      if (currentIndex > -1 && currentIndex !== flags.length - 1) {
        onChangeFocused(currentIndex + 1)
      }
    }

    if (mode === 'focusedFile' && (input === 'j' || key.downArrow)) {
      setCodeOffset(
        codeOffset < maxCodeLineNumber ? codeOffset + 1 : maxCodeLineNumber
      )
    }

    if (mode === 'focusedFlags' && (input === 'k' || key.upArrow)) {
      const currentIndex = flags.findIndex((flag) => flag.focused)
      if (currentIndex > -1 && currentIndex !== 0) {
        onChangeFocused(currentIndex - 1)
      }
    }

    if (mode === 'focusedFile' && (input === 'k' || key.upArrow)) {
      setCodeOffset(codeOffset > 0 ? codeOffset - 1 : 0)
    }

    if (mode === 'focusedFlags' && input === ' ') {
      const currentIndex = flags.findIndex((flag) => flag.focused)
      if (currentIndex > -1) {
        onChooseFlag(currentIndex)
      }
    }

    if (input === 'l') {
      setMode('focusedFile')
    }

    if (input === 'h') {
      setMode('focusedFlags')
      setCodeOffset(0)
    }

    if (input === '‘' /* option+] */) {
      setPreviewActive('installCommand')
    }

    if (input === '“' /* option+[ */) {
      setPreviewActive('code')
    }

    if (key.return) {
      fs.writeFileSync(path.join('/tmp', '.eslintrc.js'), code, 'utf-8')
      process.chdir('/tmp')
      execSync(`bash -c '${installCommand}'`)
      process.exit()
    }
  })

  const modifiedCode = useMemo(() => {
    const minHeight = size.rows - 3 // lines which is tab, border-top, border-bottom and around context
    const visibleCodeLines = [
      ...code.split('\n'),
      ...Array.from(Array(minHeight)).map(() => '')
    ].slice(codeOffset, minHeight + codeOffset)
    return visibleCodeLines.join('\n')
  }, [code, codeOffset])

  return (
    <Box flexDirection="column" width={size.columns} height={size.rows}>
      <Box flexGrow={1}>
        <FlagList flags={flags} focused={mode === 'focusedFlags'} />
        <Preview
          filename={filename}
          code={modifiedCode}
          installCommand={installCommand}
          active={previewActive}
        />
      </Box>
      {/* <Help /> */}
    </Box>
  )
}
