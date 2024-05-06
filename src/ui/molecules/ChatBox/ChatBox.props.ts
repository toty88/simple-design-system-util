import * as React from 'react'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  leftIcon: React.JSX.Element
  rightIcon: React.JSX.Element
  iconColor: React.CSSProperties['color']
  onChange: React.ChangeEventHandler<HTMLInputElement>
}
