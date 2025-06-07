import { cn } from '../utils'
import './badge.css'

type BadgeProps = {
  theme: 'new' | 'error' | 'attention' | 'warning'
  label: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const Badge = (props: BadgeProps) => {
  const { theme, label, size = 'md' } = props

  return <span className={cn(`badge-${theme} bage-${size}`)}>{label}</span>
}
