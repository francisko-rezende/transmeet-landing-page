import styled, { css } from 'styled-components'

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: 287px;
  /* width: 270px; */
  height: 226px;
  box-shadow: 0px 10px 40px rgba(18, 18, 18, 0.1);
  border-radius: 0px 0px 20px 20px;
  padding: 22px 12px;

  ${({ theme }) => css`
    background-color: ${theme.colors.typographyColors.white};
    border-top: 10px solid ${theme.colors.primaryColor.primaryDark};
  `}
`

export const StepTitle = styled.h3`
  font-size: 1.4rem;
  margin-top: 2rem;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.black};
    font-weight: ${theme.font.weight.bold};
  `}
`

export const StepDescription = styled.p`
  margin-top: 0.8rem;
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.5;

  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.gray};
  `}
`
