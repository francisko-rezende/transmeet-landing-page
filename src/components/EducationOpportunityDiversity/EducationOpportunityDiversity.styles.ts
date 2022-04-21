import styled, { css } from 'styled-components'

export const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 116px;
  gap: 30px;
`

export const SecondaryTitle = styled.h2`
  font-size: 7.2rem;

  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
  `}
`
export const ImgWrapper = styled.div`
  position: absolute;
  bottom: -5px;
  right: -92px;
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
`

export const SemiBoldText = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`
