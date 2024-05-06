import React from 'react'
import * as Styled from './Icon.styled'
import type { Props } from './Icon.props'

export const Icon: React.FC<Props> = ({ children, ...props }) => {
  return <Styled.IconContainer {...props}>{children}</Styled.IconContainer>
}
