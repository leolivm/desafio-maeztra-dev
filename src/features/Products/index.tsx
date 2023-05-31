import Slider from 'react-slick'
import { FC, useState } from 'react'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { Box, Button, Container, Typography } from '@mui/material'

import { products } from './products'
import styles from './styles.module.css'
import { ProductItem } from './ProductItem'
import { useSmallScreen } from 'src/shared/hooks/useSmallScreen'

export const Products: FC = () => {
  const { isSmallScreen, isVerySmallScreen } = useSmallScreen()
  const [sliderRef, setSliderRef] = useState<Slider | null>(null)

  function SliderSettings() {
    switch (true) {
      case isVerySmallScreen: {
        return {
          dots: false,
          arrows: false,
          slidesToShow: 1.01,
          slidesToScroll: 1,
          infinite: true,
          className: `${styles.products} slick-slider`,
        }
      }
      case isSmallScreen: {
        return {
          dots: false,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          className: `${styles.products} slick-slider`,
        }
      }

      default:
        return {
          dots: false,
          arrows: false,
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          className: `${styles.products} slick-slider`,
        }
    }
  }

  const settings = SliderSettings()

  const productsWithFormattedCurrency = products.map((product) => {
    const price = product.price.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })

    return {
      ...product,
      price,
    }
  })

  return (
    <Container
      sx={{
        my: isSmallScreen ? 3 : 9.25,
        position: 'relative',
      }}
    >
      <Typography
        textAlign="center"
        fontWeight={700}
        fontSize={32}
        lineHeight="48.67px"
        mb={3}
      >
        As Mais Pedidas
      </Typography>

      {!isSmallScreen ? (
        <Box position="relative">
          <Button
            onClick={sliderRef?.slickPrev}
            sx={{
              top: 260,
              left: -20,
              zIndex: 2,
              position: 'absolute',
            }}
          >
            <ChevronLeft fontSize="large" />
          </Button>

          <Button
            onClick={sliderRef?.slickNext}
            sx={{
              top: 260,
              zIndex: 2,
              right: -20,
              position: 'absolute',
            }}
          >
            <ChevronRight fontSize="large" />
          </Button>
        </Box>
      ) : null}

      <Slider ref={(ref) => setSliderRef(ref)} {...settings}>
        {productsWithFormattedCurrency.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Slider>
    </Container>
  )
}
