'use client'

import { Panel } from '@/lf-components/Panel'
import ListBox from '@/lf-components/ListBox'
import { Heading } from '@/lf-components/Heading'
import { FullModal } from '@/lf-components/FullModal'
import { FaChevronLeft } from 'react-icons/fa6'
import './now.css'
import { StageRow } from '@/lf-templates/stageRow'

export const SekigaharaNow = () => {
  const Banner = () => {
    return (
      <div className='flex flex-col gap-1 w-full original-gradient rounded-2xl p-2'>
        <div className='text-3xl font-bold text-white text-shadow-lg'>関ケ原NOW</div>
        <div className='text-xs'>当日の情報をリアルタイムで確認できます</div>
      </div>
    )
  }

  return (
    <FullModal
      button={<Banner />}
      title='関ケ原NOW'
      backBtn={<FaChevronLeft className='w-full h-full' />}
    >
      <div className='flex flex-col px-4 my-8 gap-6'>
        <div className='flex flex-col gap-1'>
          <Heading tag={5} label='ステージ進行' />
          <Panel size='lg'>
            <ListBox>
              <ListBox.Row>
                <StageRow
                  name='徳川ステージ'
                  src='https://sekigahara-idolwars.net/images/2025/stage/TOKUGAWA_STAGE.png'
                  status='進行状況'
                  now='ライブ中のアーティスト表示'
                  next='次の出演アーティスト表示'
                />
              </ListBox.Row>
              <ListBox.Row>
                <StageRow
                  name='豊臣ステージ'
                  src='https://sekigahara-idolwars.net/images/2025/stage/TOYOTOMI_STAGE.png'
                  status='進行状況'
                  now='ライブ中のアーティスト表示'
                  next='次の出演アーティスト表示'
                />
              </ListBox.Row>
              <ListBox.Row>
                <StageRow
                  name='戦国ステージ'
                  src='https://sekigahara-idolwars.net/images/2025/stage/SENGOKU_STAGE.png'
                  status='進行状況'
                  now='ライブ中のアーティスト表示'
                  next='次の出演アーティスト表示'
                />
              </ListBox.Row>
              <ListBox.Row>
                <StageRow
                  name='桃配ステージ'
                  src='https://sekigahara-idolwars.net/images/2025/stage/MOMOKUBARI_STAGE.png'
                  status='進行状況'
                  now='ライブ中のアーティスト表示'
                  next='次の出演アーティスト表示'
                />
              </ListBox.Row>
              <ListBox.Row>
                <StageRow
                  name='下剋上ステージ'
                  src='https://sekigahara-idolwars.net/images/2025/stage/GEGOKUJYO_STAGE.png'
                  status='進行状況'
                  now='ライブ中のアーティスト表示'
                  next='次の出演アーティスト表示'
                />
              </ListBox.Row>
            </ListBox>
          </Panel>
        </div>
        <div className='flex flex-col gap-1'>
          <Heading tag={5} label='お手洗い' />
          <Panel size='lg'>
            <ListBox>
              <ListBox.Row>♪ 製作中 ♪</ListBox.Row>
            </ListBox>
          </Panel>
        </div>
      </div>
    </FullModal>
  )
}
