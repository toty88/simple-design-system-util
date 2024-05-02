import { Stepper } from './Stepper.tsx'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta: Meta<typeof Stepper> = {
  title: 'Molecules/Stepper',
  component: Stepper,
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