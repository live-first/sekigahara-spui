'use client'

import { cn } from '../utils'
import { ReactNode, useState, PropsWithChildren } from 'react'
import './tab.css'
import { PagerSwiper } from '../pageSwiper'

const Header = ({ className, children }: PropsWithChildren<TabCommon>) => {
  return <div className={cn('flex flex-col', className)}>{children}</div>
}

const Content = ({ className, children }: PropsWithChildren<TabCommon>) => {
  return <div className={cn('flex flex-col', className)}>{children}</div>
}

type TabCommon = {
  className?: string
}

export type TabProps = {
  Header?: typeof Header
  Content?: typeof Content
  headers: ReactNode[]
  contents: ReactNode[]
  current?: number
  onChange?: () => void
}

const Tab = (props: TabProps) => {
  const { headers, contents, current } = props
  const [tab, setTab] = useState<number>(current ?? 0)

  const page = ({ index, content }: { index: number; content: ReactNode }) => {
    return <div key={index}>{content}</div>
  }

  return (
    <div className='flex flex-col w-full'>
      <div className='flex w-full tab-header fixed'>
        {headers?.map((header, index) => {
          return (
            <button
              className={cn('py-2 bg-square', index === tab && 'active', `wd-${headers.length}`)}
              id={`${index}`}
              onClick={(e) => {
                setTab(Number(e.currentTarget.id))
              }}
              key={index}
            >
              {header}
            </button>
          )
        })}
      </div>
      <div>
        <PagerSwiper
          pages={contents.map((content, index) => {
            return () => page({ index, content })
          })}
          onChangePage={setTab}
          className='mt-10'
          current={tab}
        />
      </div>
    </div>
  )
}

Tab.Header = Header
Tab.Content = Content

export default Tab
