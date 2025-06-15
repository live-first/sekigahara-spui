'use client'

import { cn } from '../utils'
import { ReactNode, useState, PropsWithChildren } from 'react'
import './toggleButton.css'

const Header = ({ className, children }: PropsWithChildren<ToggleButtonCommon>) => {
  return <div className={cn('flex flex-col', className)}>{children}</div>
}

const Content = ({ className, children }: PropsWithChildren<ToggleButtonCommon>) => {
  return <div className={cn('flex flex-col', className)}>{children}</div>
}

type ToggleButtonCommon = {
  className?: string
}

export type ToggleButtonProps = {
  Header?: typeof Header
  Content?: typeof Content
  headers?: ReactNode[]
  contents?: ReactNode[]
  current?: string
  onChange?: () => void
}

const ToggleButton = (props: ToggleButtonProps) => {
  const { headers, contents, current } = props
  const [tab, setTab] = useState<string>(current ?? '0')

  return (
    <div className='flex flex-col w-full'>
      <div className='flex w-11/12 self-center toggle-btn-header rounded-full overflow-hidden my-3'>
        {headers?.map((header, index) => {
          return (
            <button
              className={cn(
                'py-2 bg-white',
                `${index}` === tab && `active-${index}`,
                `wd-${headers.length}`,
                index + 1 !== headers.length && 'border-r-gray-400',
              )}
              id={`${index}`}
              onClick={(e) => {
                setTab(e.currentTarget.id)
              }}
              key={index}
            >
              {header}
            </button>
          )
        })}
      </div>
      <div>
        {contents?.map((content, index) => {
          return (
            <div key={index} className={cn(`${index}` === tab ? 'show' : 'hidden')}>
              {content}
            </div>
          )
        })}
      </div>
    </div>
  )
}

ToggleButton.Header = Header
ToggleButton.Content = Content

export default ToggleButton
