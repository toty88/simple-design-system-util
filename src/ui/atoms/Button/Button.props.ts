import * as React from 'react'
import { CSSProperties } from 'styled-components'
export type Variant = 'primary' | 'secondary' | 'success' | 'error'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: Variant
  onClick: () => void
  textcolor: CSSProperties['color']
  onHoverBgColor?: React.CSSProperties['color']
}
