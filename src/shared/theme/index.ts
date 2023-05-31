import { createTheme } from '@mui/material'

export const overrides = createTheme({
  typography: {
    fontFamily: ['Titillium Web', 'Montserrat'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 950,
      lg: 1200,
      xl: 1598,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Titillium Web';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: '#fff';
      }
      `,
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1578px !important',
          paddingLeft: '20px !important',
          paddingRight: '20px !important',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          color: '#000',
        },
        body2: {
          color: '#fff',
        },
        subtitle1: {
          color: '#353535',
          fontSize: '14px',
          lineHeight: '21px',
        },
        subtitle2: {
          color: '#FAA500',
          fontWeight: 700,
        },
        h1: {
          fontFamily: 'Montserrat',
          fontSize: '40px',
          lineHeight: '49px',
          color: '#fff',
        },
        h2: {
          fontFamily: 'Montserrat',
          fontSize: '20px',
          lineHeight: '24px',
          color: '#fff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: 0,
          width: 100,
          height: 40,
          borderRadius: 8,
          boxShadow: 'none',
          color: '#353535',
          textTransform: 'none',
          backdropColor: '#fff',
        },
        contained: {
          color: '#fff',
          backgroundColor: '#FAA500',
          '&:hover': {
            backgroundColor: '#FAA500',
            opacity: 0.9,
          },
        },
        outlined: {
          borderColor: '#FAA500',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
          '& .MuiOutlinedInput-root': {
            height: 40,
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#FAFAFA',
      dark: '#353535',
      light: '#fff',
    },
    background: {
      paper: '#EFEFEF',
    },
    text: {
      secondary: '#FAA500',
    },
  },
})
