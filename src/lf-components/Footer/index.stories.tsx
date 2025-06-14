import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Footer, FooterProps } from './index'

const Temp = (props: FooterProps) => {
  return (
    <div className='w-[500px]'>
      <Footer {...props} />
    </div>
  )
}

const meta = {
  title: 'Components/Footer',
  component: Temp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Temp>

export default meta
type Story = StoryObj<typeof meta>

export const Primary_sm: Story = {
  args: {
    home: <></>,
    lineup: <></>,
    timetable: <></>,
    other: <></>,
  },
}
