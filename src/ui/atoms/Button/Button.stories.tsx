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
      options: ['primary', 'secondary', 'success', 'error'],
      description: 'Visual style of the Button'
    }
    // onClick: { action: console.log('button clicked') }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onClick: fn(() => console.log('hola mundo')),
    children: [<Label text="Primary" fontsize={'1rem'} />]
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    onHoverBgColor: '#a9aba6',
    children: [<Label text="Secondary" fontsize={'1rem'} />]
  }
}

export const Success: Story = {
  args: {
    variant: 'success',
    onHoverBgColor: '#aadc35',
    children: [<Label text="Success" fontsize={'1rem'} />]
  }
}

export const Error: Story = {
  args: {
    variant: 'error',
    onHoverBgColor: '#c76f78',
    children: [<Label text="Error" textcolor={'yellow'} fontsize={'1rem'} />]
  }
}
