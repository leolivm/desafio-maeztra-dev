import { FC } from 'react'
import { Button, Stack, useTheme, TextField, Typography } from '@mui/material'

import { useSmallScreen } from 'src/shared/hooks/useSmallScreen'

export const Newsletter: FC = () => {
  const { palette } = useTheme()
  const { isSmallScreen } = useSmallScreen()

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      gap={isSmallScreen ? 1 : 5}
      mt={isSmallScreen ? 5 : 10}
      direction="row"
      height={120}
      bgcolor={palette.primary.main}
      flexWrap="wrap"
      p={3}
      border={`1px solid ${palette.divider}`}
    >
      <Typography
        variant="body1"
        fontWeight={700}
        fontSize={24}
        lineHeight="36.5px"
      >
        Recebe Nossa Newsletter
      </Typography>

      <Stack direction="row" maxWidth={630} width="100%">
        <TextField
          fullWidth
          placeholder="Digite seu e-mail"
          sx={{
            flex: 1,
            border: `1px solid ${palette.primary.dark}`,
            borderRadius: 1,
            backgroundColor: palette.primary.light,
            height: 40,
            color: palette.primary.dark,
          }}
          InputProps={{
            sx: {
              '& fieldset': { border: 'none' },
              '& .MuiOutlinedInput-input': {
                color: palette.primary.dark,
                fontSize: 14,
                lineHeight: 18,
              },
            },
          }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            maxWidth: 119,
            ml: -2,
            borderRadius: 1,
            height: isSmallScreen ? 'unset' : 41,
            border: `1px solid ${palette.text.secondary}`,
          }}
        >
          Enviar
        </Button>
      </Stack>
    </Stack>
  )
}
