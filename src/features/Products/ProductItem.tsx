import { FC } from 'react'
import { Box, Stack, Button, useTheme, Typography } from '@mui/material'

type Props = {
  product: {
    price: string
    id: number
    name: string
    image: string
    description: string
    colors: {
      id: number
      selected: boolean
      hex: string
    }[]
  }
}

export const ProductItem: FC<Props> = ({ product }) => {
  const { palette } = useTheme()

  return (
    <Box gap={1}>
      <Stack
        component="img"
        src={product.image}
        width="100%"
        maxWidth={292}
        height="100%"
        position="relative"
      />
      <Stack gap={0.5} mt={1} ml={1} position="relative">
        <Stack direction="row" gap={1}>
          {product.colors.map((color) => (
            <Box
              key={color.id}
              bgcolor={color.hex}
              width={27}
              height={27}
              borderRadius={1}
              border={color.selected ? '1px solid #353535' : 'none'}
              sx={{
                ':hover': {
                  cursor: 'pointer',
                },
              }}
            />
          ))}
        </Stack>

        <Typography
          variant="subtitle1"
          fontSize={20}
          lineHeight="30.42px"
          fontWeight={700}
        >
          {product.price}
        </Typography>

        <Typography
          variant="subtitle1"
          fontSize={16}
          lineHeight="24px"
          color={palette.common.black}
        >
          {product.name}
        </Typography>

        <Typography
          variant="subtitle1"
          lineHeight="18.25px"
          color={palette.common.black}
          sx={{
            opacity: 0.5,
          }}
          maxWidth={292}
        >
          {product.description}
        </Typography>

        <Button
          variant="contained"
          sx={{
            width: '100%',
            maxWidth: 254,
            position: 'absolute',
            top: 160,
          }}
        >
          Adicionar
        </Button>
      </Stack>
    </Box>
  )
}
