/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import { FC, ReactNode } from 'react'
import {
  Link,
  Table,
  Paper,
  TableRow,
  useTheme,
  Container,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  TableContainer,
} from '@mui/material'

import { useSmallScreen } from 'src/shared/hooks/useSmallScreen'
import { InformationAccordion } from './InformationAccordion'

type CellProps = {
  children?: ReactNode
  bigger?: boolean
}

const CustomCell: FC<CellProps> = ({ children, bigger }) => (
  <TableCell
    sx={{
      border: 'none',
      width: bigger ? '100%' : '50%',
      minWidth: bigger ? 169 : 'unset',
    }}
  >
    {children}
  </TableCell>
)

export const Information: FC = () => {
  const { palette } = useTheme()
  const { isSmallScreen } = useSmallScreen()

  return (
    <Container>
      {isSmallScreen ? (
        <InformationAccordion />
      ) : (
        <TableContainer
          component={Paper}
          sx={{
            background: 'transparent',
            boxShadow: 'none',
            margin: '0 auto',
          }}
        >
          <Table
            sx={{
              width: '80%',
              margin: '0 auto',
              maxWidth: 950,
            }}
          >
            <TableHead>
              <TableRow>
                <CustomCell>
                  <Typography color={palette.primary.dark} fontWeight={700}>
                    Informações
                  </Typography>
                </CustomCell>
                <CustomCell>
                  <Typography color={palette.primary.dark} fontWeight={700}>
                    Minha Conta
                  </Typography>
                </CustomCell>
                <CustomCell bigger>
                  <Typography color={palette.primary.dark} fontWeight={700}>
                    Onde nos Encontrar
                  </Typography>
                </CustomCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <CustomCell>
                  <Link href="/">
                    <Typography
                      sx={{
                        fontSize: 12,
                        ':hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Quem Somos
                    </Typography>
                  </Link>
                </CustomCell>
                <CustomCell>
                  <Link href="/">
                    <Typography
                      sx={{
                        fontSize: 12,
                        ':hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Minha Conta
                    </Typography>
                  </Link>
                </CustomCell>
                <CustomCell>
                  <Link href="/">
                    <Typography
                      sx={{
                        fontSize: 12,
                        ':hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Lojas
                    </Typography>
                  </Link>
                </CustomCell>
              </TableRow>

              <TableRow>
                <CustomCell>
                  <Link href="/">
                    <Typography
                      sx={{
                        fontSize: 12,
                        ':hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Prazo de Envio
                    </Typography>
                  </Link>
                </CustomCell>
                <CustomCell>
                  <Link href="/">
                    <Typography
                      sx={{
                        fontSize: 12,
                        ':hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Meus Pedidos
                    </Typography>
                  </Link>
                </CustomCell>
                <CustomCell>
                  <Link href="/">
                    <Typography
                      sx={{
                        fontSize: 12,
                        ':hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Endereço
                    </Typography>
                  </Link>
                </CustomCell>
              </TableRow>

              <TableRow>
                <CustomCell>
                  <Link href="/">
                    <Typography
                      sx={{
                        fontSize: 12,
                        ':hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Trocas e Devoluções
                    </Typography>
                  </Link>
                </CustomCell>
                <CustomCell>
                  <Link href="/">
                    <Typography
                      sx={{
                        fontSize: 12,
                        ':hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Cadastre-se
                    </Typography>
                  </Link>
                </CustomCell>
                <CustomCell />
              </TableRow>

              <TableRow>
                <CustomCell>
                  <Link href="/">
                    <Typography
                      sx={{
                        fontSize: 12,
                        ':hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Promoções e Cupons
                    </Typography>
                  </Link>
                </CustomCell>
                <CustomCell />
                <CustomCell />
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  )
}
