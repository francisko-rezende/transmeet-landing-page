import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 190px;
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
`

export const ImgWrapper = styled.div`
  transform: translate(-18%, -9%);
  position: absolute;
`

export const TextWrapper = styled.div`
  grid-column: 2;
  padding-left: ${({ theme }) => theme.grid.gutter};
`

export const SecondaryText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor.secondary};
    font-size: 1.6rem;
    font-weight: ${theme.font.weight.bold};
  `}
`

export const Title = styled.h2`
  font-size: 5.2rem;
  margin-top: 14px;
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.black};
    font-weight: ${theme.font.weight.bold};
  `}
`

export const Paragraph = styled.p`
  margin-top: 35px;
  line-height: 1.5;
  font-size: 2.1rem;
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.gray};
  `}
`

export const RegistrationLinkWrapper = styled.div`
  margin-top: 55px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
export const CallToActionParagraph = styled.p`
  line-height: 1.5;

  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.black};
    font-weight: ${theme.font.weight.bold};

    & > span {
      color: ${theme.colors.secondaryColor.secondary};
    }
  `}
`
