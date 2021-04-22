import figures from 'figures'
import { Box, Newline, Spacer, Text } from 'ink'
import React from 'react'

export interface FlagItem {
  name: string
  focused: boolean
  choosed: boolean
}

export interface FlagListProps {
  flags: FlagItem[]
  focused: boolean
}

export function FlagList({
  flags,
  focused
}: FlagListProps): React.ReactElement {
  const flagStringLengths = flags.map(({ name }): number => name.length)
  const maxWidth = Math.max(...flagStringLengths) + 3 + 2 // symbol + margin

  return (
    <Box
      flexDirection="column"
      width={maxWidth}
      marginRight={1}
      marginTop={1}
      marginBottom={1}>
      <Box>
        <Spacer />
        <Text bold>Flags</Text>
        <Spacer />
      </Box>

      <Newline />
      {flags.map((flag) => {
        return (
          <Box key={flag.name}>
            <Box marginLeft={1} marginRight={1}>
              <Text {...(flag.choosed ? { color: 'green' } : {})}>
                {flag.choosed ? figures.circleFilled : figures.circle}
              </Text>
            </Box>
            <Text
              underline={focused && flag.focused}
              {...(flag.choosed ? { color: 'green' } : {})}>
              {flag.name}
            </Text>
          </Box>
        )
      })}
    </Box>
  )
}
