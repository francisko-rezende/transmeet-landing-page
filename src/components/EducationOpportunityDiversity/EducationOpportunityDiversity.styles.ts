import styled, { css } from 'styled-components'

export const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 116px;
  gap: 30px;

  @media (max-width: 610px) {
    grid-template-columns: 1fr;
    margin-top: 50px;
  }
`

export const SecondaryTitle = styled.h2`
  font-size: 7.2rem;

  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
  `}

  @media (max-width: 811px) {
    font-size: 3.7rem;
  }

  @media (max-width: 610px) {
    font-size: 3.7rem;
  }
`
export const ImgWrapper = styled.div`
  position: absolute;
  bottom: -5px;
  right: -92px;

  @media (max-width: 811px) {
    right: -245px;
  }

  @media (max-width: 610px) {
    position: relative;
    /* transform: translate(8%, -165px); */
    transform: translateY(3px);
    right: unset;
    bottom: unset;
    /* height: 159px; */
    /* grid-row: 3/4; */
    /* background-color: red; */
    place-self: end;
  }
`

export const BlueSpan = styled.span`
  color: ${({ theme }) => theme.colors.primaryColor.primary};
`

export const PinkSpan = styled.span`
  color: ${({ theme }) => theme.colors.secondaryColor.secondary};
`

export const GraySpan = styled.span`
  color: ${({ theme }) => theme.colors.typographyColors.grayLight};
`

export const Paragraph = styled.p`
  font-size: 2.1rem;
  line-height: 1.5;
  grid-row: 2/3;
  margin-bottom: 132px;
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.gray};
  `}

  @media (max-width: 610px) {
    font-size: 1.2rem;
    margin-bottom: unset;
  }
`

export const SemiBoldText = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`
