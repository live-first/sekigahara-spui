import { FullModal } from '@/lf-components/FullModal'
import { BsBellFill } from 'react-icons/bs'
import { FaChevronLeft } from 'react-icons/fa6'

export const Notification = () => {
  return (
    <FullModal
      button={<BsBellFill className='w-full h-full' />}
      title='通知'
      backBtn={<FaChevronLeft className='w-full h-full' />}
      cName='w-full'
    >
      <div className='w-full h-full'></div>
    </FullModal>
  )
}
