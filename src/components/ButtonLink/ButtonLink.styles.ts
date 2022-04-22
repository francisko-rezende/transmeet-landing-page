import styled, { css } from 'styled-components'

export const ButtonLink = styled.a`
  padding: 1.4rem 4.4rem;
  border-radius: 24px;

  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryColor.secondary};
    color: ${theme.colors.typographyColors.white};
    font-size: ${theme.font.sizes['4']};
    font-weight: ${theme.font.weight.bold};
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.secondaryColor.secondaryDark};
    }
  `}
`
