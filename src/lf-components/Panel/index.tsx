import { PropsWithChildren } from 'react'
import { cn } from '../utils'
import './panel.css'

type PanelProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const Panel = (props: PropsWithChildren<PanelProps>) => {
  const { size = 'md', children } = props

  return <div className={cn('flex flex-col panel', `panel-${size}`)}>{children}</div>
}
