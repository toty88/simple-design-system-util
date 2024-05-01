/* eslint-disable @typescript-eslint/no-unsafe-call */
import { fireEvent } from '@storybook/test'
import { Button } from '@/ui/atoms/Button/Button'
import { BackgoundColor } from '../Button.styled'
import { Props } from '@/ui/atoms/Button/Button.props'
import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

describe('Button', () => {
  let defaultProps: Props
  beforeEach(() => {
    defaultProps = {
      label: 'Hello World',
      onClick: vi.fn(),
      textColor: 'white'
    }
  })

  it('Should render Success button', () => {
    render(<Button {...defaultProps} />)
    const btn = screen.getByRole('button', { name: 'Hello World' })
    expect(btn).toBeDefined()
  })

  it("Should have a 'Hello World' label", () => {
    render(<Button {...defaultProps} />)
    screen.getByText('Hello World')
  })

  it('Should fire the onClick event', () => {
    render(<Button {...defaultProps} />)
    const btn = screen.getByRole('button', { name: 'Hello World' })
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fireEvent.click(btn)
    expect(defaultProps.onClick).toHaveBeenCalledOnce()
  })

  it('Should render Button with success variant', () => {
    defaultProps.variant = 'success'

    render(<Button {...defaultProps} />)
    const btn = screen.getByRole('button', { name: 'Hello World' })
    expect(btn.getAttribute('variant')).toBe('success')
  })

  it("Should render Button with BackgroundColor['error']", () => {
    defaultProps.variant = 'error'
    render(<Button {...defaultProps} />)
    const btn = screen.getByRole('button', { name: 'Hello World' })
    expect(btn).toHaveStyle(`background-color: ${BackgoundColor[defaultProps.variant]}`)
  })
})
