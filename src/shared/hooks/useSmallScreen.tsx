import { useTheme, useMediaQuery } from '@mui/material'

export const useSmallScreen = () => {
  const { breakpoints } = useTheme()

  const isSmallScreen = useMediaQuery(() => breakpoints.down('md'))
  const isVerySmallScreen = useMediaQuery(() => breakpoints.down('sm'))

  return { isSmallScreen, isVerySmallScreen }
}
