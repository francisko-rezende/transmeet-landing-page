import styled, { css } from 'styled-components'

import { CloseMenuButtonProps } from './CloseMenuButton'

export const Button = styled.button<CloseMenuButtonProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;

  ${({ width, height }) => css`
    width: ${width};
    height: ${height};
  `}
`
