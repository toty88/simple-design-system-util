import React from 'react'
import * as Styled from './Label.styled'
import type { Props } from './Label.props'

export const Label: React.FC<Props> = ({ ...props }) => {
  return <Styled.Label {...props}>{props.text}</Styled.Label>
}
