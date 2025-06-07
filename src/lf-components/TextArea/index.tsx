import { cn } from '../utils'

type TextAreaProps = {
  id: string
  placeholder?: string
  required?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  error?: string
  className?: string
}

export const TextArea = (props: TextAreaProps) => {
  const { id, placeholder, required = false, size = 'md', error, className } = props

  return (
    <textarea
      placeholder={placeholder}
      required={required}
      id={id}
      className={cn(`input-text-${size}`, error && 'error', className)}
    />
  )
}
