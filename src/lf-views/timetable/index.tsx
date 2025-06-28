'use client'

import Tab from '@/lf-components/Tab'
import ToggleButton from '@/lf-components/ToggleButton'
import { LiveDay1 } from './live'

export const TimeTableView = () => {
  return (
    <div className='flex flex-col pb-12 mt-4'>
      <Tab
        headers={[<div key='0'>ライブ</div>, <div key='1'>物販</div>]}
        contents={[
          <Tab.Content key='0' className='w-full'>
            <LiveTable />
          </Tab.Content>,
          <Tab.Content key='1' className='w-full'>
            <StoreTable />
          </Tab.Content>,
        ]}
      />
    </div>
  )
}

const LiveTable = () => {
  return (
    <ToggleButton
      headers={[<div key='0'>DAY1</div>, <div key='1'>DAY2</div>, <div key='2'>DAY3</div>]}
      contents={[
        <ToggleButton.Content key='0' className='w-full'>
          <div className='flex overflow-scroll bg-background px-2' id='timetable-master1'>
            <LiveDay1 />
          </div>
        </ToggleButton.Content>,
        <ToggleButton.Content key='1' className='w-full'></ToggleButton.Content>,
        <ToggleButton.Content key='2' className='w-full'></ToggleButton.Content>,
      ]}
    />
  )
}

const StoreTable = () => {
  return (
    <ToggleButton
      headers={[<div key='0'>DAY1</div>, <div key='1'>DAY2</div>, <div key='2'>DAY3</div>]}
      contents={[
        <ToggleButton.Content key='0' className='w-full'></ToggleButton.Content>,
        <ToggleButton.Content key='1' className='w-full'></ToggleButton.Content>,
        <ToggleButton.Content key='2' className='w-full'></ToggleButton.Content>,
      ]}
    />
  )
}
