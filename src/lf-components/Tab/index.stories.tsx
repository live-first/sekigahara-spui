import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import Tab from './index'

const Temp = () => {
  return (
    <div className='w-[500px] flex items-center'>
      <Tab
        headers={[<div key='0'>ライブ</div>, <div key='1'>物販</div>]}
        contents={[
          <Tab.Content key='0' className='w-full bg-amber-200 h-[300px]'></Tab.Content>,
          <Tab.Content key='1' className='w-full bg-blue-200 h-[300px]'></Tab.Content>,
        ]}
      />
    </div>
  )
}

const meta = {
  title: 'Components/Tab',
  component: Temp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Temp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
