import styled, { css } from 'styled-components'

export const SecondaryTitle = styled.h2`
  text-align: center;
  line-height: 1.2;
  font-size: 3.2rem;
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.white};
    font-weight: ${theme.font.weight.bold};
  `}
`

export const PinkSpan = styled.span`
  line-height: 1.57;
  font-size: 1.4rem;
  display: block;
  color: ${({ theme }) => theme.colors.secondaryColor.secondary};
`
