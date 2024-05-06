import { FiPlus } from 'react-icons/fi'
import { ChatBox } from './ChatBox.tsx'
import { HiMiniMicrophone } from 'react-icons/hi2'

import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ChatBox> = {
  title: 'Molecules/ChatBox',
  component: ChatBox,
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

const onClick = (): void => console.log('icon clicked')

export const BaseChat: Story = {
  args: {
    iconColor: '#8696a0',
    leftIcon: <FiPlus onClick={onClick} />,
    rightIcon: <HiMiniMicrophone onClick={onClick} />
  }
}
