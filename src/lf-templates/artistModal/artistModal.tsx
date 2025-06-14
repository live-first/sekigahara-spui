import { Image } from '@/lf-components/Image'
import './artistModal.css'
import Link from 'next/link'
import { ArtistType } from '@/domain/artist'

export const ArtistModal = (props: ArtistType) => {
  const { img, name, x } = props
  return (
    <div className='artist-modal'>
      <div className='img-area'>
        <Image src={img.src} alt={img.alt} />
      </div>
      <div className='artist-name'>{name}</div>
      <div className='concept'>{/* {artistData.concept} */}</div>
      <div className='flex gap-4 justify-center'>
        {x !== '' && (
          <Link href={`${x}`} target='_blank' className='w-6'>
            <Image src='https://yosen2025.sekigahara-idolwars.net/picture/x-logo.png' alt='x' />
          </Link>
        )}
      </div>
    </div>
  )
}
