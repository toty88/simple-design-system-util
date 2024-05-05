import React from 'react'
import * as Styled from './Stepper.styled'
import type { Props } from './Stepper.props'
import { useStepper } from '../../../../hooks/useStepper'
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa'

export const Stepper: React.FC<Props> = ({ ...props }) => {
  const { min, onStepper } = props
  const { counter, increment, decrement, showTrashIcon } = useStepper({ min, onStepper })

  return (
    <Styled.StepperContainer {...props}>
      <Styled.StepperButton
        onClick={decrement}
        width={'2rem'}
        padding={'0rem'}
        borderRadious={'0'}
        // onHoverBgColor={'#4D2D19'}
      >
        {!showTrashIcon ? <FaMinus /> : <FaTrash />}
      </Styled.StepperButton>
      {counter}
      <Styled.StepperButton
        onClick={increment}
        width={'2rem'}
        padding={'0rem'}
        borderRadious={'0'}
        // onHoverBgColor={'#4D2D19'}
      >
        <FaPlus />
      </Styled.StepperButton>
    </Styled.StepperContainer>
  )
}
