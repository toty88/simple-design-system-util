/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components'
import type { Variant } from './Button.props'

interface LabelProps {
  textcolor: React.CSSProperties['color']
}
export const Label = styled.span<LabelProps>`
  font-weight: bold;
  color: ${(props) => props.textcolor ?? 'white'};
`

interface ButtonProps {
  variant?: Variant
  onHoverBgColor?: React.CSSProperties['color']
}

export const BackgoundColor = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  error: '#dc3545'
}

export const Button = styled.button<ButtonProps>`
  width: 7rem;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  border-radius: 5rem;
  dispaly: inline-block;
  border: 1px solid transparent;

  &:hover {
    cursor: pointer;
  }

  ${(props) => css`
    background-color: ${props.variant ? BackgoundColor[props.variant] : BackgoundColor['primary']};
    &:hover {
      background: ${props.onHoverBgColor ?? '#7bff'};
    }
  `};
`
