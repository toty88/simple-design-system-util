/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Button } from '@/ui/atoms'
import styled, { css } from 'styled-components'
import { Props as StepperProps } from '@/ui/molecules/Stepper/Stepper.props'
import { ColorVariant, getColorSet } from '@/style-dictionary/util'

export interface StepperButton {
  variant?: ColorVariant
  padding?: React.CSSProperties['padding']
  width?: React.CSSProperties['width']
  height?: React.CSSProperties['height']
  borderRadious?: React.CSSProperties['borderRadius']
}
export const StepperContainer = styled.div<StepperProps>`
  width: 10rem;
  height: 3rem;
  border: 1px solid;
  display: flex;
  align-items: center;
  border-radius: 10rem;
  justify-content: space-around;
  ${(props) => css`
    border: ${getColorSet(props.variant ?? 'base').borderColor};
    background-color: ${getColorSet(props.variant ?? 'base').backgroundColor};
  `};
`
export const StepperButton = styled(Button)<StepperButton>`
  ${(props) => css`
    width: ${props.width ?? '8rem'};
    height: ${props.width ?? '8rem'};
    padding: ${props.padding ?? '1rem'};
    border-radius: ${props.borderRadious ?? '3rem'};
  `};
`
