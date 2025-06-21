import SlideUpAnimation from '@/lf-components/animation/slideUpAnimation'
import './artistBox.css'
import { ArtistType } from '@/domain/artist'
import './artistBox.css'
import { Image } from '@/lf-components/Image'

export const ArtistBox = (props: ArtistType) => {
  const { name, img, day1, day2, day3 } = props

  return (
    <SlideUpAnimation>
      <div className='flex flex-col p-3 bg-panel rounded-sm border border-sekigahara custom-shadow artist-box w-full'>
        <div className='flex flex-co w-full text-center justify-center overflow-hidden relative lg:h-[250px] md:h-[230px] sm:h-[200px] min-[150px]:h-[150px]'>
          <Image
            src={img.toString()}
            alt={name}
            cName='w-full h-full absolute top-0 left-0 object-contain'
          />
        </div>
        <div className='text-sekigahara text-md md:text-xl font-bold text-center h-14'>
          <p className='whitespace-pre-wrap h-full content-center leading-5'>{name}</p>
        </div>
        <div className='tag-area'>
          {day1 ? <span className='day1 bg-day1'>19日</span> : ''}
          {day2 ? <span className='day2 bg-day2'>20日</span> : ''}
          {day3 ? <span className='day3 bg-day3'>21日</span> : ''}
        </div>
      </div>
    </SlideUpAnimation>
  )
}
