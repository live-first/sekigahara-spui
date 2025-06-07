import { cn } from '../utils'

type TextFieldProps = {
  id: string
  placeholder?: string
  required?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  error?: string
  className?: string
}

export const TextField = (props: TextFieldProps) => {
  const { id, placeholder, required = false, size = 'md', error, className } = props

  return (
    <input
      type='text'
      placeholder={placeholder}
      required={required}
      id={id}
      className={cn(`input-text-${size}`, error && 'error', className)}
    />
  )
}
