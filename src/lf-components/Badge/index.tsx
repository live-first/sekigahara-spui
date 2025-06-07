import { cn } from '../utils'
import './badge.css'

type BadgeProps = {
  theme: 'error' | 'attention' | 'warning' | 'info'
  label: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const Badge = (props: BadgeProps) => {
  const { theme, label, size = 'md' } = props

  return <span className={cn(`bg-${theme} text-${size} py-1 px-3 rounded-full text-white`)}>{label}</span>
}
