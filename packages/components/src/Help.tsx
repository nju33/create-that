import { Box, Spacer, Text } from 'ink'
import React from 'react'

export function Help(): React.ReactElement {
  return (
    <Box marginLeft={1} marginRight={1}>
      <Text>focus (l)eft</Text>
      <Spacer />
      <Text>focus (r)ight</Text>
      <Spacer />
      <Text>(s)ave file</Text>
      <Spacer />
      {/* <Text>install (p)rod</Text>
        <Spacer />
        <Text>install (d)ev</Text>
        <Spacer />
        <Text>install (p)eer</Text> */}
    </Box>
  )
}
