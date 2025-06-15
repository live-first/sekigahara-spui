import * as React from 'react'
import { useRef, useEffect, useMemo } from 'react'
import { usePageSwiper, Options } from './usePageSwiper'
import './pageSwiper.css'
import { cn } from '../utils'

type Props = {
  pages: (() => React.JSX.Element)[]
  current?: number
  onChangePage?: (current: string) => void
  className?: string
} & Partial<Options>

export const PagerSwiper: React.FC<Props> = (props) => {
  const ref = useRef({} as HTMLDivElement)
  const {
    current,
    isFirstPage,
    isLastPage,
    containerStyle,
    handleStartSwipe,
    handleMoveSwipe,
    handleEndSwipe,
  } = usePageSwiper({
    ref,
    pages: props.pages,
    current: props.current,
    threshold: props.threshold,
    animationDuration: props.animationDuration,
  })
  useEffect(() => {
    if (props.onChangePage === undefined) return
    props.onChangePage(current.toString())
  }, [current])
  return (
    <div
      ref={ref}
      className={cn(props.className, 'page-swiper')}
      onTouchStart={handleStartSwipe}
      onTouchMove={handleMoveSwipe}
      onTouchEnd={handleEndSwipe}
      onTouchCancel={handleEndSwipe}
    >
      <div className='container' style={containerStyle}>
        <div className='page prev'>
          {useMemo(() => {
            if (isFirstPage) return <div />
            return props.pages[current - 1]()
          }, [current])}
        </div>
        <div className='page current'>{useMemo(() => props.pages[current](), [current])}</div>
        <div className='page next'>
          {useMemo(() => {
            if (isLastPage) return <div />
            return props.pages[current + 1]()
          }, [current])}
        </div>
      </div>
    </div>
  )
}
