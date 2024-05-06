import styled, { css } from 'styled-components'
import { getBorderSize } from '@/style-dictionary/util'

export const Container = styled.div`
  width: 100%;
  padding: 0.3rem;
  display: flex;
  justify-content: flex-start;
  background-color: #2a3942;
  border-radius: ${getBorderSize('xxs')};
`

export const InputContainer = styled.div`
  user-select: text;
  white-space: pre-wrap;
  word-break: break-word;
  display: flex;
  align-items: center;
  & svg {
    cursor: pointer;
  }
`

export const Input = styled.input`
text-indent: 0px;
margin-top: 0px;
margin-bottom: 0px;
color: #ffffff;
outline: none;
font-weight: 100;
box-shadow: none;
border: 0;
overflow: hidden;
background-color: #2a3942;
&::placeholder {
    color: #8696a0;
}
}
`
