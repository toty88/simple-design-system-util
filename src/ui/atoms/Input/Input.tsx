import React from 'react'
import * as Styled from './Input.styled'
import type { Props } from './Input.props'

export const Input: React.FC<Props> = ({ ...props }) => {
  return (
    <Styled.Input {...props}></Styled.Input>
  )
}