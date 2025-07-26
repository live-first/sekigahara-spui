import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import ToggleButton from './index'

const Temp = () => {
  return (
    <div className='w-[500px] flex items-center'>
      <ToggleButton
        headers={[<div key='0'>DAY1</div>, <div key='1'>DAY2</div>, <div key='2'>DAY3</div>]}
        contents={[
          <ToggleButton.Content
            key='0'
            className='w-full bg-amber-200 h-[300px]'
          ></ToggleButton.Content>,
          <ToggleButton.Content
            key='1'
            className='w-full bg-emerald-200 h-[300px]'
          ></ToggleButton.Content>,
          <ToggleButton.Content
            key='2'
            className='w-full bg-blue-200 h-[300px]'
          ></ToggleButton.Content>,
        ]}
        onClick={() => {}}
      />
    </div>
  )
}

const meta = {
  title: 'Components/ToggleButton',
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
