/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components'
import { getColorSet } from '@/style-dictionary/util'
import type { ColorVariant } from '@/style-dictionary/util'

interface ButtonProps {
  variant: ColorVariant
}

export const Button = styled.button<ButtonProps>`
  width: 7rem;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  border-radius: 5rem;
  dispaly: inline-block;

  &:hover {
    cursor: pointer;
  }

  ${(props) => css`
    background-color: ${getColorSet(props.variant).backgroundColor};
    border: ${getColorSet(props.variant).borderColor};
    &:hover {
      background: ${getColorSet(props.variant).disabledColor};
    }
    &:disabled {
      background-color: ${getColorSet(props.variant).disabledColor};
      cursor: not-allowed;
    }
  `};
`
