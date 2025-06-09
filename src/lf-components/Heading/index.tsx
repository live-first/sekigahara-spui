import { JSX, PropsWithChildren } from 'react'
import { cn } from '../utils'
import './heading.css'

export type HeadingProps = {
  tag: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  label: string
}

export const Heading = (props: PropsWithChildren<HeadingProps>) => {
  const { tag, className, label } = props
  const Tag = `h${tag}` as keyof JSX.IntrinsicElements

  return <Tag className={cn('flex heading items-start justify-start', className)}>{label}</Tag>
}
