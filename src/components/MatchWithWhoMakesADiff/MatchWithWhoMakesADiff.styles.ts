import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 26rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 811px) {
    margin-top: 10rem;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }

  @media (max-width: 610px) {
    grid-template-rows: 300px 1fr;
    margin-top: 60px;
  }
`
export const TextWrapper = styled.div`
  padding-left: ${({ theme }) => theme.grid.gutter};

  @media (max-width: 811px) {
    padding-left: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ImgWrapper = styled.div`
  transform: translate(-10%, -20%);

  @media (max-width: 811px) {
    transform: unset;
    display: flex;
    justify-content: center;
    margin-top: -15px;
  }

  @media (max-width: 610px) {
    margin-top: unset;
  }
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.black};
    font-size: 5.2rem;
  `}

  @media (max-width: 811px) {
    text-align: center;
    font-size: 4.2rem;
  }

  @media (max-width: 610px) {
    font-size: 3.1rem;
  }
`

export const Paragraph = styled.p`
  line-height: 1.5;
  margin-top: 2.4rem;
  font-size: 2.1rem;

  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.gray};
    font-weight: ${theme.font.weight.regular};
  `}

  @media (max-width: 811px) {
    text-align: center;
    font-size: 1.8rem;
  }

  @media (max-width: 610px) {
    font-size: 1.2rem;
    max-width: 343px;
  }
`

export const SecondaryText = styled.span`
  margin-top: 2rem;
  display: block;

  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor.secondary};
    font-weight: ${theme.font.weight.regular};
    font-size: 1.6rem;
  `}

  @media (max-width: 811px) {
    text-align: center;
    font-size: 12px;
  }
`

export const BoldText = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.typographyColors.black};
  `}

  @media (max-width: 811px) {
    text-align: center;
    font-size: 12px;
  }
`
