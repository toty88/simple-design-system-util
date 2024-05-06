/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  size?: number
  color?: React.CSSProperties['color']
}
export const IconContainer = styled.span<Props>`
  color: ${(props) => props.color};
  & svg {
    ${(props) => css`
      width: ${props.size}rem;
      height: ${props.size}rem;
    `}
    &: hover{
        cursor: pointer;
    }
`
