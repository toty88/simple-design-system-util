/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components'
import type { Variant } from './Button.props'

interface LabelProps {
  textColor: React.CSSProperties['color']
}
export const Label = styled.span<LabelProps>`
  font-weight: bold;
  color: ${(props) => props.textColor ?? 'white'};
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
  dispaly: inline-block;
  text-align: center;
  font-weight: 400;
  width: 8rem;
  border: 1px solid transparent;
  border-radius: 3rem;
  font-size: 1rem;
  padding: 1rem;
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
