import * as React from 'react'

export interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  size?: number
  children: React.ReactNode
  color?: React.CSSProperties['color']
}
