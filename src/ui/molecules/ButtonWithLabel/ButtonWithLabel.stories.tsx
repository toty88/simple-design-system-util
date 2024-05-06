import { ButtonWithLabel } from './ButtonWithLabel.tsx'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta: Meta<typeof ButtonWithLabel> = {
  title: 'Molecules/ButtonWithLabel',
  component: ButtonWithLabel,
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