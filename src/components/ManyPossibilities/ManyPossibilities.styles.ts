import styled, { css } from 'styled-components'

export const Bg = styled.div`
  background-color: ${({ theme }) => theme.colors.neutralColors.grayLighter};
  padding-top: 54px;
  padding-bottom: 54px;
  margin-top: 210px;

  @media (max-width: 811px) {
    margin-top: 80px;
    background-color: unset;
  }

  @media (max-width: 610px) {
    margin-top: 50px;
    padding-bottom: unset;
  }
`

export const Wrapper = styled.section`
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 811px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (max-width: 610px) {
    grid-template-rows: auto auto;
  }
`
export const TextWrapper = styled.div`
  @media (max-width: 811px) {
    grid-row: 2/3;
    display: grid;
    margin-top: 100px;
    text-align: center;
    gap: 20px;
    margin-top: 14rem;
  }

  @media (max-width: 610px) {
    margin: unset;
    margin-top: 23px;
  }
`

export const Title = styled.h2`
  font-size: 5.2rem;
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.black};
    font-weight: ${theme.font.weight.bold};
  `}

  @media (max-width: 811px) {
    font-size: 3.2rem;
  }
`

export const DescriptionParagraph = styled.p`
  line-height: 1.5;
  font-size: 2.1rem;
  margin-top: 60px;
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.gray};
    font-weight: ${theme.font.weight.regular};
  `};

  @media (max-width: 811px) {
    margin-top: unset;
    font-size: 1.8rem;
  }

  @media (max-width: 610px) {
    font-size: 1.2rem;
  }
`

export const LastParagraph = styled.p`
  margin-top: 35px;
  font-size: 1.6rem;
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor.secondary};

    & > span {
      color: ${theme.colors.typographyColors.black};
      font-weight: ${theme.font.weight.bold};
    }
  `}

  @media (max-width: 811px) {
    grid-row: 1/2;
  }

  @media (max-width: 610px) {
    margin: unset;
    font-size: 0.96rem;
  }
`
export const AppStoreButtonsWrapper = styled.div`
  margin-top: 6.4rem;
  display: flex;
  gap: 24px;

  @media (max-width: 811px) {
    display: none;
  }
`

export const ImgWrapper = styled.div`
  position: absolute;
  right: -11.5%;
  top: -54px;

  @media (max-width: 610px) {
    position: static;
    border-radius: 40px;
    overflow: hidden;
    max-height: fit-content;
  }
`
