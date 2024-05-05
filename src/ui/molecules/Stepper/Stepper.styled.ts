/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Button } from '@/ui/atoms'
import styled, { css } from 'styled-components'

export interface StepperButton {
  padding?: React.CSSProperties['padding']
  width?: React.CSSProperties['width']
  height?: React.CSSProperties['height']
  borderRadious?: React.CSSProperties['borderRadius']
}
export const StepperContainer = styled.div`
  width: 10rem;
  height: 2rem;
  border: 1px solid;
  display: flex;
  align-items: center;
  border-color: #7bff;
  border-radius: 10rem;
  justify-content: space-around;
`
export const StepperButton = styled(Button)<StepperButton>`
  ${(props) => css`
    width: ${props.width ?? '8rem'};
    padding: ${props.padding ?? '1rem'};
    border-radius: ${props.borderRadious ?? '3rem'};
  `};
`
