import { Input } from './Input.tsx'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
  }

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story ={
  args: {}
}