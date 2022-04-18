import styled, { css } from 'styled-components'

export const Bg = styled.div`
  background-color: ${({ theme }) => theme.colors.neutralColors.grayLighter};
  padding-top: 54px;
  padding-bottom: 54px;
  margin-top: 210px;
`

export const Wrapper = styled.section`
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
`
export const TextWrapper = styled.div``

export const Title = styled.h2`
  font-size: 5.2rem;
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.black};
    font-weight: ${theme.font.weight.bold};
  `}
`

export const DescriptionParagraph = styled.p`
  line-height: 1.5;
  font-size: 2.1rem;
  margin-top: 32px;
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.gray};
    font-weight: ${theme.font.weight.regular};
  `};
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
`
export const AppStoreButtonsWrapper = styled.div`
  margin-top: 6.4rem;
  display: flex;
  gap: 24px;
`

export const ImgWrapper = styled.div`
  position: absolute;
  right: -11.5%;
  top: -54px;
`
