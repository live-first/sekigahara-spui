import { PropsWithChildren } from 'react'
import { cn } from '../utils'

const Row = ({ children }: PropsWithChildren) => {
  return <div className='listbox-row'>{children}</div>
}

const Col = ({ children }: PropsWithChildren) => {
  return <div className='listbox-col'>{children}</div>
}

type ListBoxProps = {
  variant?: 'row' | 'col'
  Row?: typeof Row
  Col?: typeof Col
  className?: string
}

const ListBox = (props: PropsWithChildren<ListBoxProps>) => {
  const { variant = 'row', className, children } = props
  return <div className={cn('flex', variant === 'row' && 'flex-col', className)}>{children}</div>
}

ListBox.Row = Row
ListBox.Col = Col

export default ListBox
