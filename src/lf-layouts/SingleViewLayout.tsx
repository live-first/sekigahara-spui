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
      <header className='sticker top-0 '>{header}</header>
      <main className='flex flex-col'>
        {main}
      </main>
      <footer className='fixed bottom-0 w-full'>{footer}</footer>
    </div>
  )
}
