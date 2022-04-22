import styled, { css, DefaultTheme } from 'styled-components'

import { HomePageSecondaryTitleProps } from './HomePageSecondaryTitle'

const titleVariants = {
  light: (theme: DefaultTheme) => css`
    color: ${theme.colors.typographyColors.white};
  `,
  dark: (theme: DefaultTheme) => css`
    color: ${theme.colors.typographyColors.black};
  `
}

type SecondaryTitleProps = Pick<HomePageSecondaryTitleProps, 'titleColor'>

export const SecondaryTitle = styled.h2<SecondaryTitleProps>`
  text-align: center;
  line-height: 1.2;
  font-size: 3.2rem;
  ${({ theme, titleColor }) => css`
    font-weight: ${theme.font.weight.bold};

    ${!!titleColor && titleVariants[titleColor](theme)}
  `}
`

export const PinkSpan = styled.span`
  line-height: 1.57;
  font-size: 1.4rem;
  display: block;
  color: ${({ theme }) => theme.colors.secondaryColor.secondary};
`
