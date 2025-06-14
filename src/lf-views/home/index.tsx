import { Image } from '@/lf-components/Image'
import { Panel } from '@/lf-components/Panel'
import { SquareLink } from '@/lf-components/SquareLink'
import { IoTicket } from 'react-icons/io5'
import { IoBus } from 'react-icons/io5'
import { FaTshirt } from 'react-icons/fa'
import { MdFastfood } from 'react-icons/md'
import { IoMdPin } from 'react-icons/io'
import { BiSolidMoviePlay } from 'react-icons/bi'
import { Heading } from '@/lf-components/Heading'
import { Link } from '@/lf-components/Link'
import ListBox from '@/lf-components/ListBox'

export const HomeView = () => {
  return (
    <div className='flex flex-col'>
      <div className='relative mb-14'>
        <Image
          src='https://sekigahara-idolwars.net/images/2025/news/about5.jpg'
          alt=''
          cName='w-full'
        />
        <div className='absolute -bottom-12 shadow-2xl left-1/2 -translate-x-1/2 w-3/4 p-2 bg-white text-center leading-7 text-2xl font-bold rounded-3xl'>
          2025年
          <br />
          19日・20日・21日
          <br />
          @桃配運動公園
        </div>
      </div>
      <div className='pt-6 pb-12 px-4'>
        <Panel size='lg'>
          <div className='flex flex-col gap-6'>
            <div className='flex gap-8 justify-center'>
              <SquareLink href='https://sekigahara-idolwars.net/ticket' icon={<IoTicket className='w-full h-full' />} label='チケット' />
              <SquareLink href='/' icon={<IoBus className='w-full h-full' />} label='バス情報' />
              <SquareLink href='/' icon={<FaTshirt className='w-full h-full' />} label='グッズ' />
            </div>
            <div className='flex gap-8 justify-center'>
              <SquareLink href='/' icon={<MdFastfood className='w-full h-full' />} label='フード' />
              <SquareLink href='/' icon={<IoMdPin className='w-full h-full' />} label='アクセス' />
              <SquareLink
                href='/'
                icon={<BiSolidMoviePlay className='w-full h-full' />}
                label='配信'
              />
            </div>
          </div>
        </Panel>
        <div className='flex flex-col gap-2 mt-6'>
          <Heading tag={4} label='お知らせ' right={<Link src='/' label='すべて見る' />} />
          <Panel>
            <ListBox>
              <ListBox.Row>イベント情報</ListBox.Row>
              <ListBox.Row>タイムテーブル解禁</ListBox.Row>
              <ListBox.Row>出演者情報</ListBox.Row>
              <ListBox.Row>アクセス</ListBox.Row>
              <ListBox.Row>お知らせ</ListBox.Row>
            </ListBox>
          </Panel>
        </div>
        <div className='flex flex-col gap-2 mt-6'>
          <Heading tag={4} label='開催概要' />
          <Panel>
            <ListBox>
              <ListBox.Row>イベント名　：関ケ原唄姫合戦2025</ListBox.Row>
              <ListBox.Row>主催　　　　：IDOL WARS実行委員会</ListBox.Row>
              <ListBox.Row>協賛　　　　：</ListBox.Row>
              <ListBox.Row>協力　　　　：Girls Bomb!!</ListBox.Row>
            </ListBox>
          </Panel>
        </div>
        <div className='flex flex-col gap-2 mt-6'>
          <Heading tag={4} label='注意事項' />
          <Panel></Panel>
        </div>
      </div>
    </div>
  )
}
