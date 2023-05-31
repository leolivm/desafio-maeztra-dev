import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { FC, useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

import { useSmallScreen } from 'src/shared/hooks/useSmallScreen'

import { items, mobileItems } from './items'
import styles from './styles.module.css'

export const BannerCarousel: FC = () => {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null)
  const { isSmallScreen } = useSmallScreen()

  const sliderSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dotsClass: `${styles.customDots} slick-dots`,
  }

  return (
    <Box position="relative">
      <Box>
        <Button
          onClick={sliderRef?.slickPrev}
          sx={{
            left: 0,
            top: isSmallScreen ? 140 : 280,
            zIndex: 2,
            position: 'absolute',
          }}
        >
          <ChevronLeft fontSize="large" />
        </Button>

        <Button
          onClick={sliderRef?.slickNext}
          sx={{
            top: isSmallScreen ? 140 : 280,
            right: 0,
            zIndex: 2,
            position: 'absolute',
          }}
        >
          <ChevronRight fontSize="large" />
        </Button>
      </Box>

      <Slider ref={(ref) => setSliderRef(ref)} {...sliderSettings}>
        {!isSmallScreen
          ? items.map((item) => (
              <Box key={item.id} position="relative">
                <Box component="img" src={item.photo} />

                <Stack position="absolute" top={140} left={300} gap={4}>
                  <Typography variant="h1" fontWeight={700}>
                    {item.title}
                  </Typography>
                  <Typography variant="h2" maxWidth={460}>
                    {item.description}
                  </Typography>

                  <Button variant="contained">
                    <Typography fontWeight={700} variant="h2" fontSize={16}>
                      Conferir
                    </Typography>
                  </Button>
                </Stack>
              </Box>
            ))
          : mobileItems.map((item) => (
              <Stack
                key={item.id}
                display="flex !important"
                alignItems="center !important"
                justifyContent="center !important"
              >
                <Box component="img" src={item.photo} />

                <Box position="relative">
                  <Stack position="absolute" top={-300} left={-140} gap={2}>
                    <Typography
                      variant="h1"
                      fontSize={30}
                      fontWeight={700}
                      maxWidth={223}
                      lineHeight="37px"
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="h2" maxWidth={239} fontSize={14}>
                      {item.description}
                    </Typography>

                    <Button variant="contained">
                      <Typography fontWeight={700} variant="h2" fontSize={16}>
                        Conferir
                      </Typography>
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            ))}
      </Slider>
    </Box>
  )
}
