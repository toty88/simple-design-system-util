import { Slider } from './Slider.tsx'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Slider> = {
  title: 'Molecules/Slider',
  component: Slider,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    onSliderClick: { action: 'onSlider' }
  }
}

const data = [
  { id: 1, alt: 'storybook', src: 'https://story.to.design/img/blog/storybook-8.jpg' },
  {
    id: 2,
    alt: 'styled components',
    src: 'https://repository-images.githubusercontent.com/65794292/bdacfa80-6132-11e9-90b9-33e6eee04d1f'
  },
  {
    id: 3,
    alt: 'style dictionary',
    src: 'https://repository-images.githubusercontent.com/75121110/3a4b6f80-7cc3-11e9-8a9b-731444a25df4'
  }
]
export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    data: data,
    delay: 3000,
    radius: 'lg',
    variant: 'primary'
  }
}
