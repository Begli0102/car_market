import { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    title: 'Explore Cars'
  }
}

export const Secondary: Story = {
  args: {
    secondary: true,
    title: 'Sign up'
  }
}
