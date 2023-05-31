import { FC } from 'react'
import { Box, Stack } from '@mui/material'

import { CategoryItem } from './CategoryItem'
import { DressIcon } from 'src/shared/base/icons'
import { useSmallScreen } from 'src/shared/hooks/useSmallScreen'

type CategoryItems = {
  id: number
  text: string
  icon?: FC
  highlighted: boolean
}[]

export const Category: FC = () => {
  const { isSmallScreen } = useSmallScreen()

  const categoryItems: CategoryItems = [
    {
      id: 1,
      text: 'Novidades',
      icon: DressIcon,
      highlighted: true,
    },
    {
      id: 2,
      text: 'Vestidos',
      highlighted: false,
    },
    {
      id: 3,
      text: 'Roupas',
      highlighted: false,
    },
    {
      id: 4,
      text: 'Sapatos',
      highlighted: false,
    },
    {
      id: 5,
      text: 'Lingerie',
      highlighted: false,
    },
    {
      id: 6,
      text: 'Acessórios',
      highlighted: false,
    },
    {
      id: 7,
      text: 'OUTLET',
      highlighted: false,
    },
  ]

  return (
    <Box>
      {!isSmallScreen ? (
        <Stack
          height={48}
          width="100%"
          gap={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          {categoryItems.map((item) => (
            <CategoryItem
              key={item.id}
              highlighted={item.highlighted}
              text={item.text}
              Icon={item.icon}
            />
          ))}
        </Stack>
      ) : null}
    </Box>
  )
}
