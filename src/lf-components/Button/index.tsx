import { cn } from '../utils'

export type ButtonProps = {
  label: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export const Button = (props: ButtonProps) => {
  const { label, size = 'md', className } = props
  return <button className={cn('', className)}>{label}</button>
}
