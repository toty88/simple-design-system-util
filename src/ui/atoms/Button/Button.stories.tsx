import { Button, Label } from '@/ui/atoms'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'success', 'warn', 'error'],
      description: 'Visual style of the Button'
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onClick: fn(() => console.log('hola mundo')),
    variant: 'primary',
    children: [<Label text="Primary" fontsize={'1rem'} />]
  }
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: [<Label text="Success" fontsize={'1rem'} />]
  }
}

export const Warn: Story = {
  args: {
    variant: 'warn',
    children: [<Label text="Warn" fontsize={'1rem'} />]
  }
}

export const Error: Story = {
  args: {
    variant: 'error',
    children: [<Label text="Error" fontsize={'1rem'} />]
  }
}
