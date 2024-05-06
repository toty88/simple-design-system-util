import * as React from 'react'
import { BorderVariant, ColorVariant } from '@/types'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  delay: number
  radius: BorderVariant
  variant: ColorVariant
  data: { id: number; alt: string; src: string }[]
  onSliderClick: (id: number) => void
}
