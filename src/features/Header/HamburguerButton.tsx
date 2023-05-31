import { FC } from 'react'
import { Box } from '@mui/material'

import { useSmallScreen } from 'src/shared/hooks/useSmallScreen'

export const HamburguerButton: FC = () => {
  const { isSmallScreen, isVerySmallScreen } = useSmallScreen()

  return (
    <Box>
      {isSmallScreen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            marginTop: 7,
            marginRight: isVerySmallScreen ? 8 : 19,
          }}
        >
          <path
            d="M23.0625 11.0625H0.9375C0.419719 11.0625 0 11.4822 0 12C0 12.5178 0.419719 12.9375 0.9375 12.9375H23.0625C23.5803 12.9375 24 12.5178 24 12C24 11.4822 23.5803 11.0625 23.0625 11.0625Z"
            fill="black"
          />
          <path
            d="M23.0625 3.5625H0.9375C0.419719 3.5625 0 3.98222 0 4.5C0 5.01778 0.419719 5.4375 0.9375 5.4375H23.0625C23.5803 5.4375 24 5.01778 24 4.5C24 3.98222 23.5803 3.5625 23.0625 3.5625Z"
            fill="black"
          />
          <path
            d="M23.0625 18.5625H0.9375C0.419719 18.5625 0 18.9822 0 19.5C0 20.0178 0.419719 20.4375 0.9375 20.4375H23.0625C23.5803 20.4375 24 20.0178 24 19.5C24 18.9822 23.5803 18.5625 23.0625 18.5625Z"
            fill="black"
          />
        </svg>
      ) : null}
    </Box>
  )
}
