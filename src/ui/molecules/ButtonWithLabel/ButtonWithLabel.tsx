import React from 'react'
import * as Styled from './ButtonWithLabel.styled'
import { Button, Label } from '@/ui/atoms'
import type { Props } from './ButtonWithLabel.props'

export const ButtonWithLabel: React.FC<Props> = ({ ...props }) => {
  return <Styled.ButtonWithLabel {...props}></Styled.ButtonWithLabel>
}
