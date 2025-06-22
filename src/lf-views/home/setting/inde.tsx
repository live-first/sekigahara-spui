'use client'

import { Panel } from '@/lf-components/Panel'
import ListBox from '@/lf-components/ListBox'
import { Heading } from '@/lf-components/Heading'
import { FullModal } from '@/lf-components/FullModal'
import { IoSettingsSharp } from 'react-icons/io5'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { Select } from '@/lf-components/Select'
import Link from 'next/link'
import { ToggleSwitch } from '@/lf-components/ToggleSwitch'
import { useState } from 'react'
import { useTheme } from 'next-themes'

export const Setting = () => {
  const [checked, setChecked] = useState<boolean>(true)
  const { setTheme, theme } = useTheme()
  return (
    <FullModal
      button={<IoSettingsSharp className='w-full h-full' />}
      title='設定'
      backBtn={<FaChevronLeft className='w-full h-full' />}
    >
      <div className='flex flex-col px-4 mt-8 gap-6'>
        <div className='flex flex-col gap-0.5'>
          <Heading tag={6} label='通知' />
          <Panel size='lg'>
            <ListBox>
              <ListBox.Row className='justify-between'>
                <ListBox.Col>プッシュ通知</ListBox.Col>
                <ListBox.Col>
                  <ToggleSwitch
                    id='push'
                    checked={checked}
                    onChange={(checked) => {
                      setChecked(checked)
                    }}
                  />
                </ListBox.Col>
              </ListBox.Row>
            </ListBox>
          </Panel>
        </div>
        <div className='flex flex-col gap-0.5'>
          <Heading tag={6} label='表示' />
          <Panel size='lg'>
            <ListBox>
              <ListBox.Row className='justify-between'>
                <ListBox.Col>外観モード</ListBox.Col>
                <ListBox.Col>
                  <Select
                    id='theme-color'
                    options={[
                      { value: 'light', label: 'ライトモード' },
                      { value: 'dark', label: 'ダークモード' },
                    ]}
                    className='h-full'
                    selected={theme ?? 'light'}
                    onChange={(e) => {
                      setTheme(e.target.value)
                    }}
                  />
                </ListBox.Col>
              </ListBox.Row>
            </ListBox>
          </Panel>
        </div>
        <div className='flex flex-col gap-0.5'>
          <Heading tag={6} label='その他' />
          <Panel size='lg'>
            <ListBox>
              <ListBox.Row className='justify-between'>
                <ListBox.Col>バージョン</ListBox.Col>
                <ListBox.Col>0.0.1(1)</ListBox.Col>
              </ListBox.Row>
              <ListBox.Row>
                <Link
                  href='https://forms.gle/zg8kHdJdSFbZZt5v6'
                  className='flex w-full justify-between'
                >
                  <div>お問い合わせフォーム</div>
                  <FaChevronRight className='self-center' />
                </Link>
              </ListBox.Row>
            </ListBox>
          </Panel>
        </div>
      </div>
    </FullModal>
  )
}
