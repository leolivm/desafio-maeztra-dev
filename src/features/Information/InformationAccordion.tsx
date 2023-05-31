import { FC } from 'react'
import { Add } from '@mui/icons-material'
import {
  Box,
  useTheme,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Link,
} from '@mui/material'

export const InformationAccordion: FC = () => {
  const { palette } = useTheme()

  return (
    <Box py={5}>
      <Accordion
        sx={{
          bgcolor: 'transparent',
          boxShadow: 'none',
          ':before': {
            height: 0,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<Add fontSize="small" fontWeight={700} />}
        >
          <Typography
            color={palette.primary.dark}
            fontSize={16}
            fontWeight={700}
            lineHeight="18px"
          >
            Informações
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
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

          <Link href="/">
            <Typography
              sx={{
                fontSize: 12,
                ':hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Trocas e devoluções
            </Typography>
          </Link>

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
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          bgcolor: 'transparent',
          boxShadow: 'none',
          ':before': {
            height: 0,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<Add fontSize="small" fontWeight={700} />}
        >
          <Typography
            color={palette.primary.dark}
            fontSize={16}
            fontWeight={700}
            lineHeight="18px"
          >
            Minha Conta
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          bgcolor: 'transparent',
          boxShadow: 'none',
          ':before': {
            height: 0,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<Add fontSize="small" fontWeight={700} />}
        >
          <Typography
            color={palette.primary.dark}
            fontSize={16}
            fontWeight={700}
            lineHeight="18px"
          >
            Onde nos Encontrar
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
