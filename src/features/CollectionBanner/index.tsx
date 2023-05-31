import { FC } from 'react'
import { Box, Container, Stack, Typography, useTheme } from '@mui/material'

import collection from 'public/images/collection.png'
import { useSmallScreen } from 'src/shared/hooks/useSmallScreen'

export const CollectionBanner: FC = () => {
  const { palette } = useTheme()
  const { isSmallScreen } = useSmallScreen()

  return (
    <Container>
      <Stack
        direction="row"
        flexWrap="wrap"
        alignItems="center"
        gap={isSmallScreen ? 3 : 8}
      >
        <Stack maxWidth={420} width="100%" gap={2}>
          <Typography
            variant="body1"
            fontWeight={700}
            fontSize={24}
            lineHeight="36.5px"
          >
            Lorem ipsum
          </Typography>

          <Typography variant="subtitle1" color={palette.common.black}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
            mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim
            dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris
            integer. Nibh sagittis in lobortis sed cursus condimentum velit
            pharetra. Amet luctus ut vulputate scelerisque placerat consequat.
            Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique.
            Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue
            eget convallis volutpat aliquet. Sed sed pellentesque porttitor
            phasellus donec condimentum sit sapien.
          </Typography>
        </Stack>

        <Box
          component="img"
          src={collection.src}
          width="100%"
          maxWidth={1050}
        />
      </Stack>
    </Container>
  )
}
