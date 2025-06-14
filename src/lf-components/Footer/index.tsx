import { ReactNode } from 'react'

export type FooterProps = {
  home: ReactNode
  lineup: ReactNode
  timetable: ReactNode
  other: ReactNode
}

export const Footer = (props: FooterProps) => {
  const { home, lineup, timetable, other } = props

  return (
    <div className='flex bg-[#d7d7d7] h-16 w-full'>
      <div className='w-1/4 border-r border-r-white'>{home}</div>
      <div className='w-1/4 border-r border-r-white'>{lineup}</div>
      <div className='w-1/4 border-r border-r-white'>{timetable}</div>
      <div className='w-1/4'>{other}</div>
    </div>
  )
}
