import { FC } from 'react'
import { Box, Typography, useTheme } from '@mui/material'

export const TopBar: FC = () => {
  const { palette } = useTheme()

  return (
    <Box bgcolor={palette.primary.dark} textAlign="center" height={24}>
      <Typography variant="body2">
        Acompanhe as melhores promoções disponíveis aqui na Maeztra.
      </Typography>
    </Box>
  )
}
