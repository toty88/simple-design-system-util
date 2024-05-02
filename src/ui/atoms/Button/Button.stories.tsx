import { Button } from './Button.tsx'
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
    label: 'Primary',
    onClick: fn(() => console.log('hola mundo'))
  }
}

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    variant: 'secondary'
  }
}

export const Error: Story = {
  args: {
    label: 'Error',
    textcolor: 'yellow',
    variant: 'error',
    onHoverBgColor: '#c76f78',
    onMouseEnter: fn(() => console.log('errorrrrrrrrrrr'))
  }
}
