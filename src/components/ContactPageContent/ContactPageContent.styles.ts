import styled, { css } from 'styled-components'

export const Container = styled.main`
  max-width: calc(470px + 44px);
  padding: 0 22px;
  margin: 0 auto;
  margin-top: 61px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 610px) {
    margin-top: 20px;
  }
`

export const PrimaryTitle = styled.h1`
  font-size: 3.2rem;
  margin-top: 82px;
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.extraBold};
    font-family: ${theme.font.families.inter};
    color: ${theme.colors.typographyColors.gray};
  `}

  @media (max-width: 610px) {
    margin-top: 41px;
    font-size: 2rem;
  }
`

export const SecondaryTitle = styled.h2`
  margin-top: 24px;
  font-size: 2rem;
  text-align: center;
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.semiBold};
    color: ${theme.colors.typographyColors.grayLight};
  `};

  @media (max-width: 610px) {
    margin-top: 12px;
    font-size: 1.4rem;
  }
`
