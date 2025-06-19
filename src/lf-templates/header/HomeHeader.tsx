'use client'

import { Header } from '@/lf-components/Header'
import { Image } from '@/lf-components/Image'
import { BsBellFill } from 'react-icons/bs'
import { FullModal } from '@/lf-components/FullModal'
import { FaChevronLeft } from 'react-icons/fa6'
import { Setting } from '@/lf-views/home/setting/inde'
import { useTheme } from 'next-themes'

export const HomeHeader = () => {
  const { theme } = useTheme()
  return (
    <Header
      left={<Notification />}
      center={
        theme === 'light' ? (
          <Image
            src='https://sekigahara-idolwars.net/images/2025/logo.png'
            alt='logo'
            cName='h-full'
          />
        ) : (
          <Image
            src='https://sekigahara-idolwars.net/images/2025/logo_dark.png'
            alt='logo'
            cName='h-full'
          />
        )
      }
      right={<Setting />}
    />
  )
}

const Notification = () => {
  return (
    <FullModal
      button={<BsBellFill className='w-full h-full' />}
      title='通知'
      backBtn={<FaChevronLeft className='w-full h-full' />}
    >
      <div className='w-full h-full'></div>
    </FullModal>
  )
}
