import React from 'react'
import * as Styled from './Button.styled'
import type { Props } from './Button.props'

export const Button: React.FC<Props> = ({ ...props }) => {
  return (
    <Styled.Button {...props}>
      <Styled.Label textColor={props.textColor}>{props.label}</Styled.Label>
    </Styled.Button>
  )
}
