import React from 'react'
import { Input, Icon } from '@/ui/atoms'
import * as Styled from './ChatBox.styled'
import type { Props } from './ChatBox.props'

export const ChatBox: React.FC<Props> = ({ ...props }) => {
  const _COLOR = props.iconColor
  const { onChange, leftIcon, rightIcon } = props

  return (
    <Styled.ChatContainer {...props}>
      <Styled.ActionContainer>
        <Icon color={_COLOR}>{leftIcon}</Icon>
      </Styled.ActionContainer>
      <Styled.Chat>
        <Input hasIcon placeholder="Escriba un mensaje" onChange={onChange} />
      </Styled.Chat>
      <Styled.ActionContainer>
        <Icon color={_COLOR}>{rightIcon}</Icon>
      </Styled.ActionContainer>
    </Styled.ChatContainer>
  )
}
