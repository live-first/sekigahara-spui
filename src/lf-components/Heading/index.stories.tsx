import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Heading  } from './index'

const meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    tag: 1,
    label: 'H1タグ',
  },
}

export const H2: Story = {
  args: {
    tag: 2,
    label: 'H2タグ',
  },
}

export const H3: Story = {
  args: {
    tag: 3,
    label: 'H3タグ',
  },
}

export const H4: Story = {
  args: {
    tag: 4,
    label: 'H4タグ',
  },
}

export const H5: Story = {
  args: {
    tag: 5,
    label: 'H5タグ',
  },
}

export const H6: Story = {
  args: {
    tag: 6,
    label: 'H6タグ',
  },
}