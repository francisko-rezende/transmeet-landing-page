import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 150px;
  /* display: grid;
  justify-items: center;
  justify-content: center; */
  /* max-width: 921px; */

  @media (max-width: 808px) {
    margin-top: 72px;
  }
`
export const FirstSpan = styled.span`
  text-align: center;
  display: block;
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor.secondary};
  `}

  @media (max-width: 808px) {
    font-size: 1.4rem;
  }
`
export const Title = styled.h2`
  font-size: 3.2rem;
  text-align: center;
  max-width: 570px;
  margin: 0 auto;
  margin-top: 10px;

  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.black};
    font-weight: ${theme.font.weight.extraBold};
  `}

  @media (max-width: 808px) {
    font-size: 2.4rem;
  }
`

export const SecondSpan = styled.span`
  margin-top: 12px;
  font-size: 1.2rem;
  text-align: center;
  display: block;

  ${({ theme }) => css`
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.typographyColors.gray};
  `};
`

export const DataList = styled.ol`
  /* display: flex; */
  overflow-x: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 100%;
  /* grid-template-columns: repeat(3, 307px); */
  gap: 23px;
  margin: 22px auto;
  padding: 0 40px;
  padding-bottom: 40px;
  /* max-width: 921px; */
  width: fit-content;
  /* min-width: 1238px; */
`
