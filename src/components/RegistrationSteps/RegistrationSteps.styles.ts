import styled, { css } from 'styled-components'

export const Section = styled.section`
  /* margin-top: 175px; */
`

export const Title = styled.h2`
  margin-top: 10px;
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor.secondary};
    font-family: ${theme.font.families.manrope};
    font-weight: ${theme.font.weight.bold};
    font-size: 1.4rem;
    text-align: center;
  `}

  & > span {
    display: block;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.colors.typographyColors.black};
  }

  @media (max-width: 811px) {
    margin-top: 8rem;
  }
`

export const StepList = styled.ol`
  /* display: flex; */
  /* overflow-x: auto; */
  overflow-x: auto;
  max-width: fit-content;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* max-width: 100%; */
  gap: 30px;
  margin: 54px auto;
  /* background: red; */
  /* padding: 0 30px; */
  padding: 0 40px;
  padding-bottom: 40px;
  /* width: fit-content; */
  /* min-width: 1238px; */
`
