import { FC } from 'react'
import { Button, Typography, useTheme } from '@mui/material'

type Props = {
  variant: 'text' | 'outlined'
  text: string
  Icon: FC
}

export const MyAccountItems: FC<Props> = ({ text, variant, Icon }) => {
  const { palette } = useTheme()

  return (
    <Button
      sx={{
        gap: 1,

        width: 134,
        height: 46,
        display: 'flex',
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        border:
          variant === 'outlined'
            ? `1px solid ${palette.text.secondary}`
            : 'none',
        borderRadius: variant === 'outlined' ? 2 : 'none',
      }}
    >
      <Icon />
      <Typography variant="subtitle1">{text}</Typography>
    </Button>
  )
}
