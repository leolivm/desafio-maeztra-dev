import { FC } from 'react'
import { Button, IconButton, Stack, TextField, useTheme } from '@mui/material'

import { useSmallScreen } from 'src/shared/hooks/useSmallScreen'
import { SearchIcon } from 'src/shared/base/icons'

export const SearchBar: FC = () => {
  const { palette } = useTheme()
  const { isSmallScreen } = useSmallScreen()

  return (
    <Stack direction="row" width="100%" justifyContent="flex-end">
      {!isSmallScreen ? (
        <Stack direction="row" width="100%">
          <TextField
            fullWidth
            placeholder="O Que você Busca?"
            sx={{
              flex: 1,
              border: 'none',
              maxWidth: '672px',
              borderRadius: 2.5,
              backgroundColor: palette.background.paper,
            }}
            InputProps={{
              sx: {
                '& fieldset': { border: 'none' },
                '& .MuiOutlinedInput-input': {
                  color: palette.primary.dark,
                  fontSize: 12,
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
            }}
          >
            Buscar
          </Button>
        </Stack>
      ) : (
        <IconButton>
          <SearchIcon />
        </IconButton>
      )}
    </Stack>
  )
}
