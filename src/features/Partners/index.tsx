import { FC } from 'react'
import Slider from 'react-slick'
import { Box, Container, Stack, Typography } from '@mui/material'

import { items } from './items'
import { useSmallScreen } from 'src/shared/hooks/useSmallScreen'
import styles from './styles.module.css'

export const Partners: FC = () => {
  const { isSmallScreen } = useSmallScreen()

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    draggable: true,
    slidesToScroll: 1,
    autoplay: false,
    className: `${styles.partners} slick-slider`,
  }

  return (
    <Box>
      {!isSmallScreen ? (
        <Container
          sx={{
            mt: 9.25,
            gap: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            textAlign="center"
            fontWeight={700}
            fontSize={32}
            lineHeight="48.67px"
          >
            Marcas Parceiras
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            {items.map((item) => (
              <Stack key={item.id} maxWidth={307} maxHeight={64}>
                <Stack
                  component="img"
                  width="100%"
                  src={item.picture}
                  height="100"
                />
              </Stack>
            ))}
          </Stack>
        </Container>
      ) : (
        <Container
          sx={{
            mt: 8,
            gap: 3,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            textAlign="center"
            fontWeight={700}
            fontSize={32}
            lineHeight="48.67px"
          >
            Marcas Parceiras
          </Typography>

          <Slider {...sliderSettings}>
            {items.map((item) => (
              <Stack key={item.id} maxWidth={307} maxHeight={64}>
                <Stack
                  component="img"
                  width="100%"
                  src={item.picture}
                  height="100%"
                />
              </Stack>
            ))}
          </Slider>
        </Container>
      )}
    </Box>
  )
}
