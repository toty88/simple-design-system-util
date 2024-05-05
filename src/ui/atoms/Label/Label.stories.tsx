import { Label } from './Label.tsx'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    textcolor: '#bb88cc',
    text: 'Hello World'
  }
}
