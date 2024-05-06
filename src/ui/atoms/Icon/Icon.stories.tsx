import { Icon } from './Icon.tsx'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { AiFillAlert } from 'react-icons/ai'

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof meta>

export const AlarmIcon: Story = {
  args: {
    size: 10,
    color: 'blue',
    children: <AiFillAlert onClick={() => console.log('hola')} />
  }
}
