/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Button } from '@/ui/atoms'
import { BorderVariant, ColorVariant } from '@/types'
import styled, { css } from 'styled-components'
import { getColorSet, getBorderSize } from '@/style-dictionary/util'

interface ImageContainerProps {
  next: number
}

interface MainProps {
  variant: ColorVariant
  radius?: BorderVariant
}
interface ButtonProps extends MainProps {
  active: boolean
}

export const MainContainer = styled.section<MainProps>`
  position: relative;
  width: 100%;
  margin-top: -1rem;
  overflow: hidden;
  ${(props) => css`
    border: 2px solid ${getColorSet(props.variant).backgroundColor};
    border-radius: ${props.radius && getBorderSize(props.radius)};
  `};
`
export const SliderContainer = styled.div<ImageContainerProps>`
  display: flex;
  transition: transform 0.5s ease;
  &:hover {
    cursor: pointer;
  }
  ${(props) => css`
    transform: ${`translateX(-${props.next * 100}%)`};
  `};
`

export const SlideSection = styled.div`
  flex: 0 0 100%;
  flex-shrink: 0;
  position: relative;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export const ButtonSection = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  width: 8rem;
  height: 2rem;
  bottom: 1%;
  left: 50%;
  justify-content: space-around;
  transform: translate(-50%, -50%);
`
export const SliderButton = styled(Button)<ButtonProps>`
  max-width: 0.6875rem;
  max-height: 0.6875rem;
  flex-shrink: 0;
  border-radius: 50%;

  ${(props) => css`
    background-color: ${props.active
      ? getColorSet(props.variant).borderColor
      : getColorSet(props.variant).disabledColor};
  `};
`
