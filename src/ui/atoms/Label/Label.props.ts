import * as React from 'react'

export interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  textcolor?: React.CSSProperties['color']
  fontsize?: React.CSSProperties['fontSize']
  fontWeight?: React.CSSProperties['fontWeight']
}
