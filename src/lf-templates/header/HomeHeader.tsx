'use client'

import { Header } from '@/lf-components/Header'
import { Image } from '@/lf-components/Image'
import { useTheme } from 'next-themes'
import { ReactNode } from 'react'

type HomeHeaderProps = {
  left?: ReactNode
  right?: ReactNode
}

export const HomeHeader = (props: HomeHeaderProps) => {
  const { left, right } = props
  const { theme } = useTheme()
  return (
    <Header
      left={left}
      center={
        theme === 'dark' ? (
          <Image
            src='https://sekigahara-idolwars.net/images/2025/logo_dark.png'
            alt='logo'
            cName='h-full'
          />
        ) : (
          <Image
            src='https://sekigahara-idolwars.net/images/2025/logo.png'
            alt='logo'
            cName='h-full'
          />
        )
      }
      right={right}
    />
  )
}
