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
      home={<FooterCell href='/' icon={<FaHouse className='h-full w-full' />} title='ホーム' />}
      lineup={
        <FooterCell
          href='/lineup'
          icon={<GiMicrophone className='h-full w-full' />}
          title='ラインナップ'
        />
      }
      timetable={
        <FooterCell
          href='/timetable'
          icon={<FaClock className='h-full w-full' />}
          title='タイムテーブル'
        />
      }
      other={<FooterCell href='/' icon={<FaMap className='h-full w-full' />} title='マップ' />}
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
    <Link href={href} prefetch={true} className='flex flex-col w-full h-full pt-2 pb-6 justify-between items-center'>
      <div className='h-2/3 w-full'>{icon}</div>
      <div className='text-xs whitespace-nowrap'>{title}</div>
    </Link>
  )
}
