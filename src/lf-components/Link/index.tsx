import { GoLinkExternal } from 'react-icons/go'
import { cn } from '../utils'

type LinkProps = {
  label: string
  src: string
  isExternal?: boolean
}

export const Link = (props: LinkProps) => {
  const { label, src, isExternal } = props
  return (
    <a href={src} className={cn('flex')}>
      {label}
      {isExternal && (
        <span className='ml-1 top-2'>
          <GoLinkExternal />
        </span>
      )}
    </a>
  )
}
