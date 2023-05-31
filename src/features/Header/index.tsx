import { FC } from 'react'
import { Box, Container, Stack } from '@mui/material'

import { SearchBar } from './SearchBar'
import { MyAccount } from './MyAccount'
import { MaeztraLogo } from './MaeztraLogo'
import { HamburguerButton } from './HamburguerButton'

export const Header: FC = () => (
  <Box boxShadow="0px 4px 6px rgba(0, 0, 0, 0.08)" py={4}>
    <Container>
      <Stack direction="row" alignItems="center">
        <HamburguerButton />
        <MaeztraLogo />

        <SearchBar />

        <MyAccount />
      </Stack>
    </Container>
  </Box>
)
