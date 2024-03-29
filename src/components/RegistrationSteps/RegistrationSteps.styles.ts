import styled, { css } from 'styled-components'

export const Title = styled.h2`
  margin-top: 10px;
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor.secondary};
    font-family: ${theme.font.families.manrope};
    font-weight: ${theme.font.weight.bold};
    font-size: 1.4rem;
    text-align: center;
  `}

  & > span {
    display: block;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.colors.typographyColors.black};
  }

  @media (max-width: 811px) {
    margin-top: 8rem;
  }

  @media (max-width: 610px) {
    margin-top: 54px;
    font-size: 1.2rem;

    & > span {
      font-size: 2rem;
    }
  }
`

export const StepList = styled.ol`
  overflow-x: auto;
  max-width: fit-content;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin: 54px auto;
  padding: 0 40px;
  padding-bottom: 40px;

  @media (max-width: 610px) {
    margin-top: 3rem;
  }
`
