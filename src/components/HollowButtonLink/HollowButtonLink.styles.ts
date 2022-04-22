import styled, { css, DefaultTheme } from 'styled-components'

import { HollowButtonLinkProps } from './HollowButtonLink'

const buttonVariants = {
  blue: (theme: DefaultTheme) => css`
    color: ${theme.colors.primaryColor.primary};
    border: 2px solid ${theme.colors.primaryColor.primary};
    font-weight: ${theme.font.weight.bold};

    &:hover {
      color: ${theme.colors.typographyColors.white};
      background-color: ${theme.colors.primaryColor.primary};
    }
  `,
  pink: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondaryColor.secondaryLight};
    border: 3px solid ${theme.colors.secondaryColor.secondaryLight};
    font-weight: ${theme.font.weight.bold};

    &:hover {
      color: ${theme.colors.typographyColors.black};
      background-color: ${theme.colors.secondaryColor.secondaryLight};
    }
  `
}

type StyledLinkProps = Pick<HollowButtonLinkProps, 'color'>

export const Link = styled.a<StyledLinkProps>`
  text-align: center;
  margin-top: 67px;
  text-decoration: none;
  padding: 14px 28px;
  border-radius: 24px;
  font-size: 1.6rem;
  transition: all 0.2s ease-in-out;
  max-width: 370px;

  ${({ theme, color }) => css`
    ${!!color && buttonVariants[color!](theme)}
  `}
`
