import { FC } from 'react'
import { Button, Stack, Typography } from '@mui/material'

type Props = {
  // eslint-disable-next-line react/require-default-props
  Icon?: FC
  highlighted: boolean
  text: string
}

export const CategoryItem: FC<Props> = ({ highlighted, text, Icon }) => (
  <Stack
    direction="row"
    gap={1}
    width="100%"
    maxWidth={146}
    alignItems="center"
    justifyContent="center"
  >
    <Button
      sx={{
        gap: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {Icon && <Icon />}
      <Typography variant={highlighted ? 'subtitle2' : 'subtitle1'}>
        {text}
      </Typography>
    </Button>
  </Stack>
)
