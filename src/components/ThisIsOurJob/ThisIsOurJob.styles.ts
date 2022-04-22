import styled, { css } from 'styled-components'

export const Bg = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.typographyColors.black};
  `};
`

export const Section = styled.section`
  padding-top: 92px;
  padding-bottom: 64px;
  display: grid;
  place-items: center;

  @media (max-width: 610px) {
    padding-top: 45px;
  }
`

export const SecondaryTitle = styled.h2`
  text-align: center;
  line-height: 1.2;
  font-size: 3.2rem;
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.white};
    font-weight: ${theme.font.weight.bold};
  `}
`

export const PinkSpan = styled.span`
  line-height: 1.57;
  font-size: 1.4rem;
  display: block;
  color: ${({ theme }) => theme.colors.secondaryColor.secondary};
`

export const CirclesList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 96px;
  margin-top: 87px;

  @media (max-width: 610px) {
    margin-top: 44px;
    gap: 40px;
  }
`

export const LinkWrapper = styled.div`
  margin-top: 60px;
`
