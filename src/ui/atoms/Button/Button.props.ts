import * as React from 'react'
import type { ColorVariant } from '@/style-dictionary/util'
export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  onClick: () => void
  variant: ColorVariant
  children: React.ReactNode
}
