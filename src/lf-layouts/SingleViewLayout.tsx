'use client'

import { ReactNode } from 'react'

export type LayoutProps = {
  header: ReactNode
  main?: ReactNode
  footer?: ReactNode
  topless?: boolean
}

export const SingleViewLayout = (props: LayoutProps) => {
  const { header, main, footer, topless = false } = props

  return (
    <div>
      <footer className='fixed bottom-0 w-full z-10'>{footer}</footer>
      <header className='fixed top-0 w-full z-10'>{header}</header>
      <main className='flex flex-col'>
        {topless ? <></> : <div className='h-12'></div>}
        {main}
        <div className='h-13'></div>
      </main>
    </div>
  )
}
