import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Link } from './index'

const meta = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'リンク',
    src: '#'
  },
}

export const External: Story = {
  args: {
    label: '外部リンク',
    src: '#',
    isExternal: true
  },
}
