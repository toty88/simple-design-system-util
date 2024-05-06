/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components'

export const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 0.3rem;
  width: 30rem;
  align-items: center;
  background-color: #202c33;
`

export const ActionContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  &:hover {
    cursor: pointer;
  }
`
export const Chat = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  min-width: 0;
`
