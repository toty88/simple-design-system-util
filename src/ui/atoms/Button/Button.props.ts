import * as React from 'react'
export type Variant = 'primary' | 'secondary' | 'success' | 'error'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  onClick: () => void
  children: React.ReactNode
  onHoverBgColor?: React.CSSProperties['color']
}
