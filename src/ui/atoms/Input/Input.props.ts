import * as React from 'react'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  hasIcon: boolean
  placeholder: string
  onClick?: () => void
  icon?: React.JSX.Element
  onChange: React.ChangeEventHandler<HTMLInputElement>
}
