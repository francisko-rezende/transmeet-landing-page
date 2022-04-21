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
`

export const Link = styled.a`
  text-align: center;
  margin-top: 67px;
  text-decoration: none;
  padding: 14px 28px;
  border-radius: 24px;
  font-size: 1.6rem;
  transition: all 0.2s ease-in-out;
  max-width: 370px;

  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor.secondaryLight};
    border: 3px solid ${theme.colors.secondaryColor.secondaryLight};
    font-weight: ${theme.font.weight.bold};

    &:hover {
      color: ${theme.colors.typographyColors.black};
      background-color: ${theme.colors.secondaryColor.secondaryLight};
    }
  `}
`
