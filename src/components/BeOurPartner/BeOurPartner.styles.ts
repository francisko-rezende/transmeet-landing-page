import styled, { css } from 'styled-components'

export const Section = styled.section`
  margin-top: 106px;
  background-color: ${({ theme }) => theme.colors.neutralColors.grayLighter};
  display: flex;
  padding: 66px;
  width: 100%;
  border-radius: 20px;

  @media (max-width: 610px) {
    margin-top: 70px;
    padding: 33px;
  }
`

export const SecondaryTitle = styled.h2`
  font-size: 3.2rem;

  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.black};
    font-weight: ${theme.font.weight.bold};
  `}

  @media (max-width: 610px) {
    font-size: 2rem;
  }
`

export const PinkSpan = styled.span`
  color: ${({ theme }) => theme.colors.secondaryColor.secondary};
`

export const Paragraph = styled.p`
  margin-top: 39px;
  font-size: 2rem;
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.gray};
  `}

  @media (max-width: 610px) {
    font-size: 1.2rem;
    margin-top: 20px;
  }
`

export const SemiBold = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.semiBold};
  `}
`

export const TextWrapper = styled.div`
  flex: 5.5;
  max-width: 470px;

  @media (max-width: 610px) {
    flex: 1;
  }
`

export const ImgWrapper = styled.div`
  flex: 4.5;
  position: relative;
  left: 100px;

  @media (max-width: 610px) {
    display: none;
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 63px;

  @media (max-width: 610px) {
    margin-top: 30px;
    gap: 15px;
  }
`
export const LinkButton = styled.a`
  flex: 1;
  padding: 14px;
  text-decoration: none;
  border-radius: 24px;
  display: block;
  text-align: center;
  max-width: 160px;

  ${({ theme }) => css`
    background: ${theme.colors.secondaryColor.secondary};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.typographyColors.white};

    &:hover {
      background-color: ${theme.colors.secondaryColor.secondaryDark};
    }

    @media (max-width: 610px) {
      font-size: 1.4rem;
    }
  `}
`

export const LinkParagraph = styled.p`
  font-size: 1.6rem;
  flex: 1;
  text-align: left;
  color: ${({ theme }) => theme.colors.typographyColors.gray};
  font-weight: ${({ theme }) => theme.font.weight.bold};

  @media (max-width: 610px) {
    font-size: 1.2rem;
  }
`

export const RegistrationLink = styled.a`
  color: ${({ theme }) => theme.colors.secondaryColor.secondary};
`
