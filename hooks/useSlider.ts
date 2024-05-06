import * as React from 'react'

interface Props {
  delay: number
  amount: number
}
export const useSlider = ({ ...props }: Props) => {
  let interval: any
  const [next, setNext] = React.useState(0)

  const nextImageHandler = () => {
    setNext((s) => (s === props.amount - 1 ? 0 : s + 1))
  }

  const autoSliderHandler = () => {
    interval = setInterval(nextImageHandler, props.delay)
  }

  const moveSlideHandler = (i: number) => {
    setNext(i === props.amount ? 0 : i)
  }

  React.useEffect(() => {
    autoSliderHandler()
    return () => {
      clearInterval(interval)
    }
  }, [next])

  return { next, moveSlideHandler }
}
