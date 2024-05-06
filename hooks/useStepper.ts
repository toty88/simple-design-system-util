import * as React from 'react'

interface Props {
  min: number
  onStepper: (value: number) => void
}

export const useStepper = ({ min = 1, onStepper }: Props) => {
  const [counter, setCounter] = React.useState(1)
  const [showTrashIcon, setShowTrashIcon] = React.useState(true)

  React.useEffect(() => {
    setShowTrashIcon(counter === min)
    onStepper(counter)
  }, [counter])

  const increment = (): void => setCounter((prev: number) => prev + 1)
  const decrement = (): void => {
    if (counter > min) {
      setCounter((prev: number) => prev - 1)
    }
  }

  return { counter, increment, decrement, showTrashIcon }
}
