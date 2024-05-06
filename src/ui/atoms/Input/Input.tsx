import React from 'react'
import * as Styled from './Input.styled'
import type { Props } from './Input.props'
import { FaRegLaugh } from 'react-icons/fa'

export const Input: React.FC<Props> = ({ ...props }) => {
  const { onClick, onChange } = props

  return (
    <Styled.Container>
      {props.hasIcon && (
        <Styled.InputContainer>
          {props.icon ?? <FaRegLaugh color="#8696a0" onClick={onClick} />}
        </Styled.InputContainer>
      )}
      <Styled.InputContainer>
        <Styled.Input {...props} onChange={onChange}></Styled.Input>
      </Styled.InputContainer>
    </Styled.Container>
  )
}
