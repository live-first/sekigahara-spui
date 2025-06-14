import { Header } from '@/lf-components/Header'
import { Image } from '@/lf-components/Image'
import { IoSettingsSharp } from 'react-icons/io5'
import { BsBellFill } from 'react-icons/bs'
import { FullModal } from '@/lf-components/FullModal'
import { FaChevronLeft } from 'react-icons/fa6'

export const HomeHeader = () => {
  return (
    <Header
      left={<Notification />}
      center={
        <Image
          src='https://sekigahara-idolwars.net/images/2025/logo.png'
          alt='logo'
          cName='h-full'
        />
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
      <div className='h-full w-full bg-amber-300'></div>
    </FullModal>
  )
}

const Setting = () => {
  return (
    <FullModal
      button={<IoSettingsSharp className='w-full h-full' />}
      title='設定'
      backBtn={<FaChevronLeft className='w-full h-full' />}
    >
      <div className='h-full w-full bg-amber-300'></div>
    </FullModal>
  )
}
