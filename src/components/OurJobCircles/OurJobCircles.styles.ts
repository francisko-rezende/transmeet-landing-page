import styled, { css } from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Paragraph = styled.p`
  margin-top: 18px;
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.typographyColors.white};
  `}
`
