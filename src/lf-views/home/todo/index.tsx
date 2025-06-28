'use client'

import { FullModal } from '@/lf-components/FullModal'
import { Heading } from '@/lf-components/Heading'
import { Panel } from '@/lf-components/Panel'
import { SquareLink } from '@/lf-components/SquareLink'
import { Checkbox, FormControlLabel } from '@mui/material'
import { FaChevronLeft } from 'react-icons/fa6'
import { LuListTodo } from 'react-icons/lu'

export const TodoList = () => {
  return (
    <FullModal
      button={<SquareLink href='/' icon={<LuListTodo className='w-full h-full' />} label='準備' />}
      title='持ち物リスト'
      backBtn={<FaChevronLeft className='w-full h-full' />}
    >
      <div className='flex flex-col px-4 mt-8 mb-8 gap-6'>
        <Heading tag={4} label='持ち物チェックリスト' />
        <Panel className='flex flex-col px-4 gap-8'>
          <FormControlLabel control={<Checkbox />} label='財布' />
          <FormControlLabel control={<Checkbox />} label='チケット' />
          <FormControlLabel control={<Checkbox />} label='携帯電話' />
          <FormControlLabel control={<Checkbox />} label='モバイルバッテリー' />
          <FormControlLabel control={<Checkbox />} label='タオル' />
          <FormControlLabel control={<Checkbox />} label='レインコート/ポンチョ' />
          <FormControlLabel control={<Checkbox />} label='帽子/サングラス' />
          <FormControlLabel control={<Checkbox />} label='日焼け止め' />
          <FormControlLabel control={<Checkbox />} label='ウェットティッシュ/ティッシュ' />
          <FormControlLabel control={<Checkbox />} label='熱中症対策グッズ' />
          <FormControlLabel control={<Checkbox />} label='楽しむ気持ち' />
        </Panel>
      </div>
    </FullModal>
  )
}
