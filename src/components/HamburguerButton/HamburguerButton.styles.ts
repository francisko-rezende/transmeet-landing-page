import styled, { css } from 'styled-components'

import { HamburguerButtonProps } from './HamburguerButton'

export const Button = styled.button<HamburguerButtonProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;

  ${({ width, height }) => css`
    width: ${width};
    height: ${height};
  `}
`
