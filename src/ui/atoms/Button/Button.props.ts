import * as React from 'react'
import type { ColorVariant } from '@/types/index'
export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  onClick: () => void
  variant: ColorVariant
  children: React.ReactNode
}
