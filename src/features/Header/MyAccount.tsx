import { FC } from 'react'
import { IconButton, Stack } from '@mui/material'

import { MyAccountItems } from './MyAccountItems'
import { useSmallScreen } from 'src/shared/hooks/useSmallScreen'
import { UserIcon, BagIcon, HeartIcon } from 'src/shared/base/icons'

type MyAccountItems = {
  id: number
  text: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: FC<any>
  shouldDisplayIconInMobile: boolean
  variant: 'text' | 'outlined'
}[]

export const MyAccount: FC = () => {
  const { isSmallScreen, isVerySmallScreen } = useSmallScreen()

  const myAccountItems: MyAccountItems = [
    {
      id: 1,
      text: 'Minha Conta',
      icon: UserIcon,
      shouldDisplayIconInMobile: false,
      variant: 'text',
    },
    {
      id: 2,
      text: 'Minha Conta',
      icon: HeartIcon,
      shouldDisplayIconInMobile: false,
      variant: 'text',
    },
    {
      id: 3,
      text: 'Meu Carrinho',
      icon: BagIcon,
      shouldDisplayIconInMobile: true,
      variant: 'outlined',
    },
  ]

  return (
    <Stack direction="row" alignItems="center" justifyContent="center">
      {!isSmallScreen
        ? myAccountItems.map((item) => (
            <MyAccountItems
              key={item.id}
              Icon={item.icon}
              text={item.text}
              variant={item.variant}
            />
          ))
        : myAccountItems.map(
            (item) =>
              item.shouldDisplayIconInMobile && (
                <Stack key={item.id} ml={isVerySmallScreen ? 0 : 4}>
                  <IconButton>
                    <item.icon
                      style={{
                        width: 21,
                        height: 24,
                      }}
                    />
                  </IconButton>
                </Stack>
              )
          )}
    </Stack>
  )
}
