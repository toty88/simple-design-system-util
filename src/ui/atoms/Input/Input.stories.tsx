import { Input } from './Input.tsx'
import { Meta, StoryObj } from '@storybook/react'
import { GiImpLaugh } from 'react-icons/gi'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'onChange' }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const NoIconInput: Story = {
  args: {
    placeholder: 'Escribe un mensaje'
  }
}

export const IconInput: Story = {
  args: {
    hasIcon: true,
    placeholder: 'Escribe un mensaje',
    onClick: () => console.log('Hola desde el input')
  }
}
