import { Stepper } from './Stepper.tsx'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Stepper> = {
  title: 'Molecules/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    onStepper: { action: 'onStepper' }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    min: 1,
    variant: 'warn'
  }
}
