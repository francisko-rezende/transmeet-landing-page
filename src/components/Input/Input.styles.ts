import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  width: 100%;
  position: relative;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.typographyColors.gray};
  border-style: solid;
  border-radius: 4px;
`

export const Label = styled.label`
  z-index: 2;
  position: absolute;
  left: 11px;
  top: -5px;
  padding: 0 5px;
  width: fit-content;

  ${({ theme }) => css`
    background-color: ${theme.colors.typographyColors.white};
    color: ${theme.colors.typographyColors.gray};
    font-weight: ${theme.font.weight.semiBold};
    font-size: ${theme.font.sizes['2']};
  `}
`

export const Input = styled.input`
  border: none;
  padding: 14px 16px;
  width: 100%;
  line-height: 1.4;

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.neutralColors.grayLighter};
  }

  ${({ theme }) => css`
    font-size: ${theme.font.sizes['4']};
    color: ${theme.colors.typographyColors.gray};
  `}
`

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 0 0 16px;
`
