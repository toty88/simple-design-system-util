import * as React from 'react'
import { ColorVariant } from '@/style-dictionary/util'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  min: number
  variant?: ColorVariant
  onStepper: (value: number) => void
}
