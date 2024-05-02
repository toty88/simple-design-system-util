import React from 'react'
import * as Styled from './Stepper.styled'
import type { Props } from './Stepper.props'

export const Stepper: React.FC<Props> = ({ ...props }) => {
  return (
    <Styled.StepperContainer {...props}>
      <Styled.StepperButton
        label="+"
        variant="secondary"
        onClick={() => {}}
        textcolor="white"
        width={'2rem'}
        padding={'0rem'}
        borderRadious={'0'}
        onHoverBgColor={'#4D2D19'}
      />
      0
      <Styled.StepperButton
        label="-"
        variant="secondary"
        onClick={() => {}}
        textcolor="white"
        width={'2rem'}
        padding={'0rem'}
        borderRadious={'0'}
        onHoverBgColor={'#4D2D19'}
      />
    </Styled.StepperContainer>
  )
}
