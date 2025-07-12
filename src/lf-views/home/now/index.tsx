'use client'

import { Panel } from '@/lf-components/Panel'
import { FullModal } from '@/lf-components/FullModal'
import { FaChevronLeft } from 'react-icons/fa6'
import './now.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Image } from '@/lf-components/Image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const SekigaharaNow = () => {

  const ButtonBanner = () => {
    return (
      <div className='flex flex-col gap-1 w-full original-gradient rounded-2xl p-2'>
        <div className='text-3xl font-bold text-white text-shadow-lg'>関ケ原NOW</div>
        <div className='text-xs'>当日の情報をリアルタイムで確認できます</div>
      </div>
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const Banner = () => {
    return (
      <div className='w-full px-2'>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          pagination={{ clickable: true, el: '#pagination' }}
          mousewheel={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={500}
          centeredSlides={true}
          loop={true}
          className='w-full px-2'
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <Image src='https://sekigahara-idolwars.net/images/2025/sponsor/banner1.png' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src='https://sekigahara-idolwars.net/images/2025/sponsor/banner2.png' alt='' />
          </SwiperSlide>
        </Swiper>
      </div>
    )
  }

  return (
    <FullModal
      button={<ButtonBanner />}
      title='関ケ原NOW'
      backBtn={<FaChevronLeft className='w-full h-full' />}
    >
      <div className='flex flex-col px-4 my-8 gap-6'>
        {/* <Banner /> */}
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1 w-full original-gradient rounded-2xl p-2 text-center'>
            <div className='text-3xl font-bold text-white text-shadow-lg'>メンテナンス中</div>
          </div>
          <Panel size='lg'>
            前日に公開予定です。
          </Panel>
        </div>
      </div>
    </FullModal>
  )
}
