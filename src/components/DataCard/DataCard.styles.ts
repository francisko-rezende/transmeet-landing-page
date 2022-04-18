import styled, { css } from 'styled-components'

export const Card = styled.li`
  width: 287px;
  height: 190px;
  box-shadow: 0px 10px 40px rgba(18, 18, 18, 0.1);
  border-radius: 0px 0px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background: ${({ theme }) => theme.colors.typographyColors.white};
  border-top: 10px solid ${({ theme }) => theme.colors.primaryColor.primaryDark};
`

export const Percentage = styled.span`
  display: block;
  font-size: 3.2rem;
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.extraBold};
    color: ${theme.colors.secondaryColor.secondary};
  `}
`

export const Explanation = styled.p`
  font-size: 1.4rem;
  margin-top: 12px;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.black};
    font-weight: ${theme.font.weight.bold};
  `}
`
