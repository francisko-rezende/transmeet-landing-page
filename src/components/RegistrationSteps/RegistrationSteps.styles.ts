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
`

export const StepList = styled.ol`
  /* display: flex; */
  overflow-x: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin: 54px auto;
  padding-bottom: 40px;
  /* width: fit-content; */
  /* min-width: 1238px; */
`
