import * as React from 'react'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  onQuantity: () => void
}
