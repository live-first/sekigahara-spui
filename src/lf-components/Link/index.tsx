import { GoLinkExternal } from 'react-icons/go'
import { cn } from '../utils'
import './link.css'

type LinkProps = {
  label: string
  src: string
  isExternal?: boolean
}

export const Link = (props: LinkProps) => {
  const { label, src, isExternal } = props
  return (
    <a href={src} className={cn('flex link')}>
      {label}
      {isExternal && (
        <span className='ml-1 link-external'>
          <GoLinkExternal />
        </span>
      )}
    </a>
  )
}
