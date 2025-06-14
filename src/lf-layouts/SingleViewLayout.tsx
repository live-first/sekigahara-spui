'use client'

import { ReactNode } from 'react'

export type LayoutProps = {
  header: ReactNode
  main?: ReactNode
  footer?: ReactNode
}

export const SingleViewLayout = (props: LayoutProps) => {
  const { header, main, footer } = props

  return (
    <div>
      <header className='fixed top-0 w-full z-10'>{header}</header>
      <main className='flex flex-col'>
        <div className='h-12'></div>
        {main}
        <div className='h-13'></div>
      </main>
      <footer className='fixed bottom-0 w-full z-10'>{footer}</footer>
    </div>
  )
}
