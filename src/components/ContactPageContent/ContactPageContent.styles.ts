import styled, { css } from 'styled-components'

export const Container = styled.main`
  margin-top: 61px;
  max-width: calc(470px + 44px);
  padding: 0 22px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PrimaryTitle = styled.h1`
  font-size: 3.2rem;
  margin-top: 82px;
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.extraBold};
    font-family: ${theme.font.families.inter};
    color: ${theme.colors.typographyColors.gray};
  `}
`

export const SecondaryTitle = styled.h2`
  margin-top: 24px;
  font-size: 2rem;
  text-align: center;
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.semiBold};
    color: ${theme.colors.typographyColors.grayLight};
  `};
`
