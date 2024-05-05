import * as React from 'react'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  min: number
  onStepper: (value: number) => void
}
