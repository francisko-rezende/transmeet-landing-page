import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 22.3rem;
  display: grid;
  justify-content: center;

  @media (max-width: 808px) {
    margin-top: 5rem;
  }
`
export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.grayLight};
    font-size: ${theme.font.sizes['4']};
    font-weight: ${theme.font.weight.regular};
    text-align: center;
  `}
`

export const IconsWrapper = styled.div`
  margin-top: 4.1rem;
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 811px) {
    gap: 40px;
  }

  @media (max-width: 400px) {
    gap: 14px;
  }
`
