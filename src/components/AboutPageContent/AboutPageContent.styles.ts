import styled, { css } from 'styled-components'

export const Title = styled.h1`
  font-size: 2.8rem;
  text-align: center;
  line-height: 1;
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.semiBold};
    color: ${theme.colors.typographyColors.gray};
  `}

  @media (max-width: 610px) {
    font-size: 2rem;
  }
`

export const Main = styled.main`
  margin: 85px 0;
`

export const TitleSpan = styled.span`
  font-size: 7.2rem;

  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor.secondary};
    font-weight: ${theme.font.weight.bold};
  `}

  @media (max-width: 610px) {
    font-size: 3.7rem;
  }
`

export const AbstractWrapper = styled.div`
  margin-top: 62px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 610px) {
    gap: 2.4rem;
  }
`

export const Abstract = styled.p`
  font-size: 2rem;
  text-align: center;
  font-style: italic;
  line-height: 1.5;

  ${({ theme }) => css`
    font-weight: ${theme.font.weight.light};
    color: ${theme.colors.typographyColors.gray};
  `}

  @media (max-width: 610px) {
    font-size: 1.2rem;
  }
`

export const DownloadLink = styled.a`
  text-decoration: none;
  display: block;
  margin: 100px auto 0 auto;
  border-radius: 6px;
  padding: 21px 77px;
  text-align: center;
  max-width: 570px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor.secondary};
    font-weight: ${theme.font.weight.semiBold};
    border: 6px solid ${theme.colors.secondaryColor.secondary};

    &:hover {
      color: ${theme.colors.typographyColors.white};
      background-color: ${theme.colors.secondaryColor.secondary};
    }
  `}

  @media (max-width: 610px) {
    margin-top: 5rem;
  }
`

export const FirstBlock = styled.div`
  margin: 0 auto;
  margin-top: 103px;
  display: flex;
  flex-direction: column;
  gap: 65px;
  align-items: center;

  @media (max-width: 610px) {
    margin-top: 5rem;
    gap: 28px;
  }
`

export const Paragraph = styled.p`
  font-size: 2.4rem;
  text-align: left;
  max-width: 970px;
  line-height: 1.7;

  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.black};
  `}

  @media (max-width: 610px) {
    font-size: 1.4rem;
  }
`

export const FirstDefinition = styled.div`
  text-align: center;
  font-size: 2.4rem;
  border-radius: 10px;
  padding: 31px 56px 58px 31px;
  max-width: 770px;
  margin: 0 auto;
  margin-top: 87px;
  line-height: 1.7;

  ${({ theme }) => css`
    background: ${theme.colors.neutralColors.grayLighter};
    font-weight: ${theme.font.weight.medium};
    color: ${theme.colors.typographyColors.gray};
  `}

  @media (max-width: 610px) {
    font-size: 1.4rem;
    padding: 1.4rem 2.8rem;
    margin-top: 40px;
  }
`

export const FirstDefinitionSpan = styled.span`
  display: block;
  line-height: 1.2;
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor.secondary};
    font-weight: ${theme.font.weight.bold};
  `}

  @media (max-width: 610px) {
    line-height: unset;
  }
`

export const SecondBlock = styled(FirstBlock)`
  margin-top: 90px;

  @media (max-width: 610px) {
    margin-top: 45px;
  }
`

export const SecondDefinition = styled(FirstDefinition)`
  margin-top: 101px;

  @media (max-width: 610px) {
    margin-top: 50px;
  }
`

export const ThirdBlock = styled(FirstBlock)`
  margin-top: 88px;

  @media (max-width: 610px) {
    margin-top: 44px;
  }
`

export const ThirdDefinition = styled(FirstDefinition)`
  margin-top: 92px;

  @media (max-width: 610px) {
    margin-top: 46px;
  }
`
export const FourthBlock = styled(FirstBlock)``

export const TeamSpan = styled(Paragraph)`
  width: 100%;
  text-align: left;

  font-weight: ${({ theme }) => theme.font.weight.bold};
`
