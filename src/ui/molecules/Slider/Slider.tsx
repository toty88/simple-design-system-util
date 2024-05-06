/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import * as Styled from './Slider.styled'
import type { Props } from './Slider.props'
import { useSlider } from '../../../../hooks/useSlider'

export const Slider: React.FC<Props> = ({ ...props }) => {
  const amount = props.data.length
  const { data, delay, variant, radius, onSliderClick } = props
  const { next, moveSlideHandler } = useSlider({ amount, delay })

  const onClick = (id: number): void => onSliderClick(id)

  return (
    <Styled.MainContainer variant={variant} radius={radius}>
      <Styled.SliderContainer {...props} next={next}>
        {data &&
          data.map((data: { id: number; alt: string; src: string }) => (
            <Styled.SlideSection key={data.id}>
              <Styled.Image alt={data.alt} src={data.src} onClick={() => onClick(data.id)}></Styled.Image>
            </Styled.SlideSection>
          ))}
      </Styled.SliderContainer>
      <Styled.ButtonSection>
        {data &&
          data.map((_data, i: number) => (
            <Styled.SliderButton
              variant={variant}
              children={<></>}
              active={next === i}
              onClick={() => moveSlideHandler(i)}
            ></Styled.SliderButton>
          ))}
      </Styled.ButtonSection>
    </Styled.MainContainer>
  )
}
