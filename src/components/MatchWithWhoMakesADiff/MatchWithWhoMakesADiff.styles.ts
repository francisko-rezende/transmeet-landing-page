import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 26rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
export const TextWrapper = styled.div`
  padding-left: ${({ theme }) => theme.grid.gutter};
`

export const ImgWrapper = styled.div`
  transform: translate(-10%, -20%);
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.black};
    font-size: 5.2rem;
  `}
`

export const Paragraph = styled.p`
  line-height: 1.5;
  margin-top: 2.4rem;

  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.gray};
    font-weight: ${theme.font.weight.regular};
    font-size: 2.1rem;
  `}
`

export const SecondaryText = styled.span`
  margin-top: 4rem;
  display: block;

  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor.secondary};
    font-weight: ${theme.font.weight.regular};
    font-size: 1.6rem;
  `}
`

export const BoldText = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.typographyColors.black};
  `}
`
