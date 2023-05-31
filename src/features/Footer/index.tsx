import { Facebook, LinkedIn, Instagram, YouTube } from '@mui/icons-material'
import {
  Box,
  Stack,
  useTheme,
  Container,
  IconButton,
  Typography,
} from '@mui/material'

import vtex from 'public/images/vtex.png'
import maeztra from 'public/images/maeztra.png'
import { VisaIcon, MasterIcon } from 'src/shared/base/icons'
import { useSmallScreen } from 'src/shared/hooks/useSmallScreen'

const Footer = () => {
  const { palette } = useTheme()
  const { isSmallScreen } = useSmallScreen()

  return (
    <Box
      component="footer"
      bgcolor={palette.primary.dark}
      color={palette.common.white}
      py={3}
      sx={{
        color: '#fff',
      }}
    >
      <Container>
        <Stack
          direction={isSmallScreen ? 'column' : 'row'}
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap={isSmallScreen ? 4 : 'unset'}
        >
          <Stack direction="row" gap={2.75}>
            <IconButton
              color="primary"
              sx={{
                padding: 0,
              }}
            >
              <Facebook fontSize="large" />
            </IconButton>

            <IconButton
              color="primary"
              sx={{
                padding: 0,
              }}
            >
              <LinkedIn fontSize="large" />
            </IconButton>

            <IconButton
              color="primary"
              sx={{
                padding: 0,
              }}
            >
              <Instagram fontSize="large" />
            </IconButton>

            <IconButton
              color="primary"
              sx={{
                padding: 0,
              }}
            >
              <YouTube fontSize="large" />
            </IconButton>
          </Stack>

          <Stack direction="row" gap={2.75}>
            <VisaIcon />
            <MasterIcon />
            <VisaIcon />
            <MasterIcon />
          </Stack>

          <Stack direction="row" gap={2.75}>
            <Stack gap={1}>
              <Typography
                color={palette.common.white}
                fontSize={10}
                fontWeight="13.62px"
              >
                Powered by
              </Typography>

              <Box component="img" src={vtex.src} />
            </Stack>

            <Stack gap={1}>
              <Typography
                color={palette.common.white}
                fontSize={10}
                fontWeight="13.62px"
              >
                Developed by
              </Typography>

              <Box component="img" src={maeztra.src} />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
