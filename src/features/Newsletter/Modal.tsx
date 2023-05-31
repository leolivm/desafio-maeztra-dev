import { FC } from 'react'
import { Send } from '@mui/icons-material'
import {
  Box,
  Fade,
  Stack,
  Button,
  useTheme,
  TextField,
  Typography,
  Modal as MuiModal,
} from '@mui/material'

import sport from 'public/images/sport.png'
import { MailIcon } from 'src/shared/base/icons'
import { useSmallScreen } from 'src/shared/hooks/useSmallScreen'

type Props = {
  open: boolean
  onClose: () => void
}

export const Modal: FC<Props> = (props) => {
  const { open, onClose } = props
  const { palette } = useTheme()

  const { isSmallScreen } = useSmallScreen()

  return (
    <MuiModal
      open={open}
      onClose={onClose}
      disableAutoFocus
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: {
            backdropFilter: 'blur(2.5px)',
            bgcolor: 'rgba(0, 0, 0, 0.7)',
          },
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            width: isSmallScreen ? 298 : 848,
            height: isSmallScreen ? 307 : 529,
            top: isSmallScreen ? 'calc(50% - 149px)' : 'calc(50% - 264.5px)',
            left: isSmallScreen ? 'calc(50% - 153.5px)' : 'calc(50% - 424px)',
            bgcolor: palette.common.white,
            position: 'absolute',
          }}
        >
          <Box position="relative">
            <Button
              onClick={onClose}
              sx={{
                position: 'absolute',
                right: -25,
                top: -35,
                ':hover': {
                  bgcolor: 'unset',
                },
              }}
            >
              <Typography
                color={palette.common.white}
                fontFamily="Lato"
                fontSize={12}
                lineHeight="20px"
              >
                FECHAR
              </Typography>
            </Button>

            {!isSmallScreen && <Box component="img" src={sport.src} />}

            <Stack
              position="absolute"
              top={isSmallScreen ? 20 : '25%'}
              justifyContent="center"
              alignItems="center"
              right="6%"
            >
              <MailIcon />
              <Typography
                my={3}
                fontSize={12}
                lineHeight="20px"
                textTransform="uppercase"
              >
                Bem Vindo à MAEZTRA
              </Typography>

              <Typography color="#787D83" fontFamily="Lato">
                Receba em Primeira mão
              </Typography>
              <Typography color="#787D83" fontFamily="Lato" fontWeight={700}>
                desconto e ofertas exclusivas
              </Typography>

              <TextField
                placeholder="Digite seu e-mail"
                sx={{
                  mt: 3,
                  mb: 2,
                  width: isSmallScreen ? 258 : 322,
                  height: 40,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2.5,
                  },
                }}
              />

              <Button
                variant="contained"
                sx={{
                  width: isSmallScreen ? 258 : 322,
                  height: 40,
                  display: 'flex',
                  gap: 1,
                }}
              >
                <Typography fontWeight={700} color={palette.common.white}>
                  ENVIAR
                </Typography>

                <Send
                  sx={{
                    width: 12,
                    height: 20,
                  }}
                />
              </Button>
            </Stack>
          </Box>
        </Box>
      </Fade>
    </MuiModal>
  )
}
