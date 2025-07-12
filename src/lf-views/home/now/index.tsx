'use client'

import { Panel } from '@/lf-components/Panel'
import ListBox from '@/lf-components/ListBox'
import { Heading } from '@/lf-components/Heading'
import { FullModal } from '@/lf-components/FullModal'
import { FaChevronLeft } from 'react-icons/fa6'
import './now.css'
import { StageRow } from '@/lf-templates/stageRow'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Image } from '@/lf-components/Image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { nowPresenter } from './nowPresenter'

export const SekigaharaNow = () => {
  const { now } = nowPresenter()

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
          <div className='text-end'>{now?.datetime}</div>
          {now?.message && (
            <div className='flex flex-col gap-2'>
              <Heading tag={5} label='お知らせ' />
              <Panel size='lg'>{now?.message}</Panel>
            </div>
          )}
        </div>
        <div className='flex flex-col gap-2'>
          <Heading tag={5} label='ステージ進行' />
          <Panel size='lg'>
            <ListBox>
              <ListBox.Row>
                <StageRow
                  name='徳川ステージ'
                  src='https://sekigahara-idolwars.net/images/2025/stage/TOKUGAWA_STAGE.png'
                  status={now?.stage.tokugawa?.status ?? ''}
                  now={now?.stage.tokugawa?.current ?? ''}
                  next={now?.stage.tokugawa?.next ?? ''}
                />
              </ListBox.Row>
              <ListBox.Row>
                <StageRow
                  name='豊臣ステージ'
                  src='https://sekigahara-idolwars.net/images/2025/stage/TOYOTOMI_STAGE.png'
                  status={now?.stage.toyotomi?.status ?? ''}
                  now={now?.stage.toyotomi?.current ?? ''}
                  next={now?.stage.toyotomi?.next ?? ''}
                />
              </ListBox.Row>
              <ListBox.Row>
                <StageRow
                  name='戦国ステージ'
                  src='https://sekigahara-idolwars.net/images/2025/stage/SENGOKU_STAGE.png'
                  status={now?.stage.sengoku?.status ?? ''}
                  now={now?.stage.sengoku?.current ?? ''}
                  next={now?.stage.sengoku?.next ?? ''}
                />
              </ListBox.Row>
              <ListBox.Row>
                <StageRow
                  name='桃配ステージ'
                  src='https://sekigahara-idolwars.net/images/2025/stage/MOMOKUBARI_STAGE.png'
                  status={now?.stage.momokubari?.status ?? ''}
                  now={now?.stage.momokubari?.current ?? ''}
                  next={now?.stage.momokubari?.next ?? ''}
                />
              </ListBox.Row>
              <ListBox.Row>
                <StageRow
                  name='下剋上ステージ'
                  src='https://sekigahara-idolwars.net/images/2025/stage/GEGOKUJYO_STAGE.png'
                  status={now?.stage.gekokujyo?.status ?? ''}
                  now={now?.stage.gekokujyo?.current ?? ''}
                  next={now?.stage.gekokujyo?.next ?? ''}
                />
              </ListBox.Row>
            </ListBox>
          </Panel>
        </div>
        <div className='flex flex-col gap-2'>
          <Heading tag={5} label='お手洗い' />
          <Panel size='lg'>
            <ListBox>
              <ListBox.Row>♪ 製作中 ♪</ListBox.Row>
            </ListBox>
          </Panel>
        </div>
        <div className='flex flex-col gap-2'>
          <Heading tag={5} label='駐車場' />
          <Panel size='lg'>
            <ListBox>
              <ListBox.Row>♪ 製作中 ♪</ListBox.Row>
            </ListBox>
          </Panel>
        </div>
        <p>実際の状況と多少誤差が生じる可能性がありますが、予めご了承ください。</p>
      </div>
    </FullModal>
  )
}
