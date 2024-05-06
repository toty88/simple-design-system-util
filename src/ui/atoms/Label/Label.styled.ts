/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components'

interface LabelProps {
  textcolor?: React.CSSProperties['color']
  fontsize?: React.CSSProperties['fontSize']
  fontWeight?: React.CSSProperties['fontWeight']
}

export const Label = styled.span<LabelProps>`
  ${(props) => css`
    color: ${props.textcolor ?? 'white'};
    font-size: ${props.fontsize ?? '1.5rem'};
    font-weight: ${props.fontWeight ?? 'bold'};
  `}
`
