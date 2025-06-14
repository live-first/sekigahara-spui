import { Header } from '@/lf-components/Header'
import { Image } from '@/lf-components/Image'
import { IoSettingsSharp } from 'react-icons/io5'
import { BsBellFill } from 'react-icons/bs'

export const HomeHeader = () => {
  return (
    <Header
      left={<BsBellFill className='w-full h-full' />}
      center={
        <Image
          src='https://sekigahara-idolwars.net/images/2025/logo.png'
          alt='logo'
          cName='h-full'
        />
      }
      right={<IoSettingsSharp className='w-full h-full' />}
    />
  )
}
