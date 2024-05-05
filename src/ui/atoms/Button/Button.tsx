import React from 'react'
import * as Styled from './Button.styled'
import type { Props } from './Button.props'

export const Button: React.FC<Props> = ({ children, ...props }) => {
  return <Styled.Button {...props}>{children}</Styled.Button>
}
