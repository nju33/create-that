import { Box, Text } from 'ink'
import React from 'react'

export interface PreviewProps {
  filename: string
  code: string
  installCommand: string
  active: 'code' | 'installCommand'
}

export function Preview({
  active,
  code,
  filename,
  installCommand
}: PreviewProps): React.ReactElement {
  return (
    <Box flexDirection="column" marginTop={1} flexGrow={1}>
      <Box marginLeft={1}>
        <Text
          {...(active === 'code'
            ? { backgroundColor: 'green', bold: true }
            : {})}>{` ${filename} `}</Text>
        <Text
          {...(active === 'installCommand'
            ? { backgroundColor: 'green', bold: true }
            : {})}>
          {' '}
          Terminal{' '}
        </Text>
      </Box>
      <Box
        flexDirection="column"
        paddingRight={1}
        paddingLeft={1}
        borderStyle="single"
        flexGrow={1}>
        {(active === 'code' ? code : installCommand).split('\n').map((line, i) => {
          return <Text wrap="truncate" key={i}>{line}</Text>
        })}
      </Box>
      <Box borderStyle="single" paddingRight={1} paddingLeft={1}>
        <Text wrap="truncate">Hit enter to save and execute those.</Text>
      </Box>
    </Box>
  )
}
