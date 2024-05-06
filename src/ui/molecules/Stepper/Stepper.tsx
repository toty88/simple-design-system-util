import React from 'react'
import * as Styled from './Stepper.styled'
import type { Props } from './Stepper.props'
import { useStepper } from '../../../../hooks/useStepper'
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa'

export const Stepper: React.FC<Props> = ({ ...props }) => {
  const { min, onStepper } = props
  const COLOR_VARIANT = props.variant ?? 'base'
  const { counter, increment, decrement, showTrashIcon } = useStepper({ min, onStepper })

  return (
    <Styled.StepperContainer {...props}>
      <Styled.StepperButton variant={COLOR_VARIANT} onClick={decrement} width={'2rem'} padding={'0rem'}>
        {!showTrashIcon ? <FaMinus /> : <FaTrash />}
      </Styled.StepperButton>
      {counter}
      <Styled.StepperButton variant={COLOR_VARIANT} onClick={increment} width={'2rem'} padding={'0rem'}>
        <FaPlus />
      </Styled.StepperButton>
    </Styled.StepperContainer>
  )
}
