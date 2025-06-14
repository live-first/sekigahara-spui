import { Footer } from '@/lf-components/Footer'
import Link from 'next/link'
import { FaHouse } from 'react-icons/fa6'
import { GiMicrophone } from 'react-icons/gi'
import { FaClock } from 'react-icons/fa6'
import { FaMap } from 'react-icons/fa'
import { ReactNode } from 'react'

export const GlobalFooter = () => {
  return (
    <Footer
      home={<FooterCell href='/' icon={<FaHouse className='h-full w-full' />} title='HOME' />}
      lineup={<FooterCell href='/' icon={<GiMicrophone className='h-full w-full' />} title='LINEUP' />}
      timetable={<FooterCell href='/' icon={<FaClock className='h-full w-full' />} title='TIME TABLE' />}
      other={<FooterCell href='/' icon={<FaMap className='h-full w-full' />} title='MAP' />}
    />
  )
}

type FooterProps = {
  href: string
  icon: ReactNode
  title: string
}
const FooterCell = (props: FooterProps) => {
  const { href, icon, title } = props
  return (
    <Link href={href} className='flex flex-col w-full h-full p-2 justify-between items-center'>
      <div className='h-2/3 w-full'>{icon}</div>
      <div className='text-xs'>{title}</div>
    </Link>
  )
}
