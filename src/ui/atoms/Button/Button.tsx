import React from 'react'
import * as Styled from './Button.styled'
import type { Props } from './Button.props'

export const Button: React.FC<Props> = ({ ...props }) => {
  return (
    <Styled.Button {...props}>
      <Styled.Label textcolor={props.textcolor}>{props.label}</Styled.Label>
    </Styled.Button>
  )
}
