'use client'

import { Image } from '@/lf-components/Image'
import { Panel } from '@/lf-components/Panel'
import { SquareLink } from '@/lf-components/SquareLink'
import { IoTicket } from 'react-icons/io5'
import { IoBus } from 'react-icons/io5'
import { FaTshirt } from 'react-icons/fa'
import { MdFastfood } from 'react-icons/md'
import { IoMdPin } from 'react-icons/io'
import { PiSunglassesFill } from 'react-icons/pi'
import { BiSolidMoviePlay } from 'react-icons/bi'
import { Heading } from '@/lf-components/Heading'
import { LinkLabel } from '@/lf-components/LinkLabel'
import ListBox from '@/lf-components/ListBox'
import { SekigaharaNow } from './now'
import { ReactNode } from 'react'
import { sponsors } from '@/resouces/sponsor'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import { GetNews } from '@/api/newsApi'
import { TodoList } from './todo'

export const HomeView = () => {
  const { news } = GetNews()
  const newsList = news ?? []

  return (
    <div className='flex flex-col'>
      <div className='relative mb-14'>
        <Image
          src='https://sekigahara-idolwars.net/images/2025/news/about5.jpg'
          alt=''
          cName='w-full'
        />
        <div className='absolute -bottom-12 shadow-2xl left-1/2 -translate-x-1/2 w-3/4 p-2 bg-panel text-center leading-7 text-2xl font-bold rounded-3xl'>
          2025年
          <br />
          19日・20日・21日
          <br />
          @桃配運動公園
        </div>
      </div>
      <div className='pt-6 pb-12 px-4'>
        <Panel size='sm'>
          <div className='flex flex-col gap-3 py-2'>
            <div className='flex gap-3 justify-center'>
              <SquareLink
                href='https://sekigahara-idolwars.net/ticket'
                icon={<IoTicket className='w-full h-full' />}
                label='チケット'
              />
              <SquareLink href='/' icon={<IoBus className='w-full h-full' />} label='バス情報' />
              <SquareLink href='/' icon={<FaTshirt className='w-full h-full' />} label='グッズ' />
              <SquareLink href='/' icon={<MdFastfood className='w-full h-full' />} label='フード' />
            </div>
            <div className='flex gap-3 justify-center'>
              <SquareLink
                href='https://sekigahara-idolwars.net/access'
                icon={<IoMdPin className='w-full h-full' />}
                label='アクセス'
              />
              <SquareLink
                href='/'
                icon={<BiSolidMoviePlay className='w-full h-full' />}
                label='配信'
              />
              <SquareLink
                href='/'
                icon={<PiSunglassesFill className='w-full h-full' />}
                label='熱中症対策'
              />
              <div>
                <TodoList />
              </div>
            </div>
          </div>
        </Panel>
        <div className='mt-4'>
          <SekigaharaNow />
        </div>
        <Section>
          <Heading
            tag={4}
            label='お知らせ'
            right={<LinkLabel src='https://sekigahara-idolwars.net/news' label='すべて見る' />}
          />
          <Panel>
            <ListBox>
              {newsList
                .sort((a, b) => b.id - a.id)
                .slice(0, 5)
                .map((news, index) => (
                  <ListBox.Row key={index} data-id={news.id}>
                    {news.title}
                  </ListBox.Row>
                ))}
            </ListBox>
          </Panel>
        </Section>
        <Section>
          <Heading tag={4} label='開催概要' />
          <Panel>
            <ListBox>
              <ListBox.Row>イベント名　：関ケ原唄姫合戦2025</ListBox.Row>
              <ListBox.Row>開催日　　　：2025年7月19日、20日、21日</ListBox.Row>
              <ListBox.Row>会場　　　　：桃配運動公園</ListBox.Row>
              <ListBox.Row>主催　　　　：IDOL WARS実行委員会</ListBox.Row>
              <ListBox.Row>協力　　　　：Girls Bomb!!</ListBox.Row>
            </ListBox>
          </Panel>
        </Section>
        <Section>
          <div className='flex gap-8 justify-center'>
            <Link href='https://x.com/_IDOLWARS' className='bg-white rounded-full w-20 h-20 p-4'>
              <Image src='https://sekigahara-idolwars.net/images/x-logo-black.png' alt='x-logo' />
            </Link>
            <Link
              href='https://www.instagram.com/_idolwars'
              className='bg-white rounded-full w-20 h-20 p-2'
            >
              <Image
                src='https://sekigahara-idolwars.net/images/Instagram-logo-color.png'
                alt='instagram-logo'
              />
            </Link>
            <Link
              href='https://youtube.com/@sekigaharaidolwarspr7582'
              className='bg-white rounded-full w-20 h-20 p-2 content-center'
            >
              <Image
                src='https://sekigahara-idolwars.net/images/youtube-logo.png'
                alt='youtube-logo'
              />
            </Link>
          </div>
        </Section>
        <Section>
          <Heading tag={4} label='協賛' />
          <Panel>
            <Grid container spacing={2}>
              {sponsors.map((item, index) => (
                <Grid size={4} key={index}>
                  <Link href={item.link ?? ''} className='flex flex-col justify-center h-full'>
                    <Image src={item.logo} alt='' />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Panel>
        </Section>
        {/* <Section>
          <Image src='https://sekigahara-idolwars.net/images/2025/sponsor/pic1.png' alt='' />
        </Section> */}
        <Section>
          <Heading tag={4} label='注意事項' />
          <Panel>
            <Heading tag={5} label='ステージ観覧上のご注意' className='mt-4' />
            <ul className='pl-3 text-sm'>
              <li>LIVEの撮影・録画は禁止になります。</li>
              <li>
                リフトは禁止です。(徳川ステージに関しましては、一部後方エリアは可能となります。)
              </li>
              <li>過度なモッシュは禁止となります。</li>
              <li>前方への圧縮がかかるモッシュは禁止です。</li>
              <li>ダイブは、禁止となります。</li>
              <li>サークルは危険の無いようにお願い致します。(下剋上ステージは禁止です。)</li>
              <li>各ステージの柵に乗る行為は禁止です。</li>
              <li>戦国ステージの公園内の遊具は使用できません。登る事も禁止です。</li>
              <li>サイリウムを投げる行為は一切禁止です。投げた場合、即時退場となります。</li>
              <li>演出上、客席に物を投げる場合がございます。ステージに投げ返す行為は禁止です。</li>
              <li>他人に迷惑をかける行為や危険な行為は一切禁止です。</li>
              <li>パフォーマンスに支障をきたす行為は一切禁止です。</li>
              <li>
                徳川ステージ、豊臣ステージにはプレミアチケット専用エリアがございます。リストバンドにて確認致します。
              </li>
              <li>ステージは皆さんにお楽しみいただきたいです譲り合ってお楽しみください。</li>
              <li>熱中症には十分注意して観覧をお願い致します。</li>
              <li>体調が、すぐれない方は近くのイベントスタッフまでお声がけください。</li>
            </ul>
            <Heading tag={5} label='会場全体のご注意とご案内' className='mt-4' />
            <ul className='pl-3 text-sm'>
              <li>
                リストバンドはそれぞれの有効期間中は絶対に外さないようお願いいたします。切ったり、外したりした場合、再入場はできません。また、リストバンドの再発行はいたしませんのでご注意ください。
              </li>
              <li>リストバンドは他人に譲る事は出来ません。</li>
              <li>
                偽装のリストバンドでの入場を発見した場合は即時退場、及び悪質とみなされる場合は、警察に通報します。
              </li>
              <li>
                スタッフが、酩酊状態と判断した場合は、入場・再入場・ライブ観覧をお断りさせて頂きますので予めご了承ください。
              </li>
              <li>会場にF O O Dエリア、ドリンク販売コーナーがございますのでご利用ください。</li>
              <li>プレミアエリアは、プレミアチケットでのご入場の方のみ使用可能です。</li>
              <li>物販・特典会は各運営さまのルールに従いご参加ください。</li>
            </ul>
            <Heading tag={5} label='チケット購入に関する注意事項' className='mt-4' />
            <ul className='pl-3 text-sm'>
              <li>
                チケットの紛失・破損の際の再発行はできませんので、公演日まで大切に保管してください。
              </li>
              <li>
                2DAYS以上の公演日のチケットを購入された方は、関ケ原唄姫合戦2025終了まで大切に保管してください。
              </li>
              <li>理由を問わずお客様都合でのチケットの払い戻しは致しません。</li>
              <li>
                岐阜県限定チケットは、岐阜県に在住の方のみ、チケットの購入が可能になります。(入場時に顔付き身分証の確認がございますので予めご了承ください。)
              </li>
              <li>
                出演者変更・キャンセル、またタイムテーブル変更に伴うチケットの払い戻しはございません。払い戻しは公演中止の場合のみ行います。
              </li>
              <li>
                公演日／券種の買い間違いにはご注意ください。誤って購入してしまった場合にも払戻は行いません。
              </li>
            </ul>
          </Panel>
        </Section>
      </div>
    </div>
  )
}

const Section = ({ children }: { children: ReactNode }) => {
  return <div className='flex flex-col gap-2 mt-6'>{children}</div>
}
