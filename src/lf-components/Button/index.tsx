import { cn } from '../utils'
import './button.css'

type ButtonProps = {
  label: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  className?: string
}

export const Button = (props: ButtonProps) => {
  const { label, size = 'md', disabled = false, className } = props
  return (
    <button className={cn('', className)} disabled={disabled}>
      {label}
    </button>
  )
}
