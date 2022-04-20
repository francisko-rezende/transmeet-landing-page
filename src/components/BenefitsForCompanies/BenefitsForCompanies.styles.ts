import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 190px;
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 811px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }

  @media (max-width: 610px) {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
  }
`

export const ImgWrapper = styled.div`
  transform: translate(-18%, -9%);
  position: absolute;
  /* grid-column: 1/2; */
  @media (max-width: 811px) {
    grid-row: 1/2;
    /* transform: unset; */
    /* background-color: red; */

    transform: translate(-0%, -25%);
  }

  @media (max-width: 610px) {
    position: relative;
  }
`

export const TextWrapper = styled.div`
  grid-column: 2;
  padding-left: ${({ theme }) => theme.grid.gutter};

  @media (max-width: 811px) {
    grid-row: 2/3;
    padding-left: unset;
    margin-top: -30px;
  }
`

export const SecondaryText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor.secondary};
    font-size: 1.6rem;
    font-weight: ${theme.font.weight.bold};
  `}

  @media (max-width: 811px) {
    margin-top: 30px;
    font-size: 1.2rem;
    text-align: center;
    display: block;
  }

  @media (max-width: 610px) {
    font-size: 0.95rem;
    margin-top: 0;
  }
`

export const Title = styled.h2`
  font-size: 5.2rem;
  margin-top: 14px;
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.black};
    font-weight: ${theme.font.weight.bold};
  `}

  @media (max-width: 811px) {
    font-size: 3.2rem;
    text-align: center;
  }

  @media (max-width: 610px) {
    font-size: 3rem;
  }
`

export const Paragraph = styled.p`
  margin-top: 35px;
  line-height: 1.5;
  font-size: 2.1rem;
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.gray};
  `}

  @media (max-width: 811px) {
    text-align: center;
    font-size: 18px;
  }

  @media (max-width: 610px) {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-top: 30px;
  }
`

export const RegistrationLinkWrapper = styled.div`
  margin-top: 55px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 811px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 610px) {
    margin-top: 40px;
  }
`
export const CallToActionParagraph = styled.p`
  line-height: 1.5;
  margin-top: 2rem;

  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.black};
    font-weight: ${theme.font.weight.bold};

    & > span {
      color: ${theme.colors.secondaryColor.secondary};
      display: block;
      text-align: center;
      margin-top: 1rem;
    }
  `}
`
