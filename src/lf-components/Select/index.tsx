import { ChangeEventHandler } from 'react'
import { cn } from '../utils'

type Options = {
  value: string
  label: string
}

type SelectProps = {
  id: string
  required?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  error?: string
  className?: string
  options: Options[]
  selected: string
  onChange: ChangeEventHandler<HTMLSelectElement>
}

export const Select = (props: SelectProps) => {
  const { id, required, size = 'md', error, className, options, selected, onChange } = props

  return (
    <select
      id={id}
      required={required}
      className={cn(`select-${size}`, error && 'error', className)}
      onChange={onChange}
      defaultValue={selected}
    >
      {options.map((option, index) => (
        <option value={option.value} key={index}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
