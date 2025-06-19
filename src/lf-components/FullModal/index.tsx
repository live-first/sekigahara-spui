'use client'

import { PropsWithChildren, ReactNode, useState } from 'react'
import { cn } from '../utils'
import { SingleViewLayout } from '@/lf-layouts/SingleViewLayout'
import { Header } from '../Header'
import './fullModal.css'

export type ModalProps = {
  button: ReactNode
  isOpen?: boolean
  title: string
  backBtn?: ReactNode
}

export const FullModal = (props: PropsWithChildren<ModalProps>) => {
  const { button, isOpen = false, title, backBtn, children } = props
  const [open, setOpen] = useState<boolean>(isOpen)

  const BackBtn = () => {
    return (
      <button className='w-full h-full' onClick={() => setOpen(false)}>
        {backBtn}
      </button>
    )
  }

  const Main = () => {
    return (
      <div className='w-dvw h-dvh overflow-y-scroll'>
        <div className='pt-14 pb-8'>{children}</div>
      </div>
    )
  }

  return (
    <div className='flex flex-col w-full h-full'>
      <button className='flex flex-col w-full h-full justify-center' onClick={() => setOpen(true)}>
        {button}
      </button>
      <div className={cn(open ? 'fixed top-0 left-0 z-20 modal-body' : 'slide-out')}>
        <SingleViewLayout
          header={
            <div className='flex flex-col w-full h-full justify-center'>
              <Header left={<BackBtn />} center={title} />
            </div>
          }
          main={<Main />}
          topless
        />
      </div>
    </div>
  )
}
