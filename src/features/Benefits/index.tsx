import { FC } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { Box, Container, Stack, Typography, useTheme } from '@mui/material'

import { items } from './items'
import { useSmallScreen } from 'src/shared/hooks/useSmallScreen'
import styles from './styles.module.css'

export const Benefits: FC = () => {
  const { palette } = useTheme()
  const { isSmallScreen, isVerySmallScreen } = useSmallScreen()

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1.05,
    draggable: true,
    slidesToScroll: 1,
    autoplay: true,
    className: `${styles.customSlick} slick-slider`,
  }

  return (
    <Box>
      {!isSmallScreen ? (
        <Container
          sx={{
            mt: 3,
            gap: 3,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography textAlign="center" fontWeight={700}>
            Por que comprar na Maeztra?
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            {items.map((item) => (
              <Stack
                py={2}
                px={3}
                flex={1}
                gap={2.75}
                key={item.id}
                maxWidth={307}
                direction="row"
                borderRadius={1}
                alignItems="center"
                bgcolor={palette.background.paper}
              >
                <Image
                  src={item.picture}
                  alt={item.title}
                  width={32}
                  height={32}
                />

                <Stack>
                  <Typography
                    variant="subtitle1"
                    lineHeight="18px"
                    fontWeight={700}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    lineHeight="18px"
                    fontSize="12px"
                    width="103%"
                    maxWidth={200}
                  >
                    {item.description}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Container>
      ) : (
        <Container
          sx={{
            mt: 3,
            gap: 3,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography textAlign="center" fontWeight={700}>
            Por que comprar na Maeztra?
          </Typography>

          <Slider {...sliderSettings}>
            {items.map((item) => (
              <Stack
                py={2}
                px={3}
                paddingLeft={0}
                flex={1}
                gap={2.75}
                key={item.id}
                direction="row"
                borderRadius={1}
                alignItems="center"
                bgcolor={palette.background.paper}
              >
                <Stack
                  mr={isVerySmallScreen ? 2 : 20}
                  py={2}
                  px={3}
                  flex={1}
                  gap={2.75}
                  key={item.id}
                  direction="row"
                  alignItems="center"
                  justifyContent={isVerySmallScreen ? 'unset' : 'center'}
                  bgcolor={palette.background.paper}
                >
                  <Image
                    src={item.picture}
                    alt={item.title}
                    width={32}
                    height={32}
                  />

                  <Stack>
                    <Typography
                      variant="subtitle1"
                      lineHeight="18px"
                      fontWeight={700}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      lineHeight="18px"
                      fontSize="10px"
                      width="103%"
                      maxWidth={200}
                    >
                      {item.description}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </Slider>
        </Container>
      )}
    </Box>
  )
}
