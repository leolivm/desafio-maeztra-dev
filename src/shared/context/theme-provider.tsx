import { FC, ReactNode } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'

import { overrides } from '../theme'

type AppProviderProps = {
  children: ReactNode
}

export const ThemeProvider: FC<AppProviderProps> = ({ children }) => (
  <MuiThemeProvider theme={overrides}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
)
