import { JSX, PropsWithChildren } from 'react'
import { cn } from '../utils'
import './heading.css'

type HeadingProps = {
  tag: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  label: string
}

export const Heading = (props: PropsWithChildren<HeadingProps>) => {
  const { tag, className, label, children } = props
  const Tag = `h${tag}` as keyof JSX.IntrinsicElements

  return <Tag className={cn('flex', className)}>{label}</Tag>
}
