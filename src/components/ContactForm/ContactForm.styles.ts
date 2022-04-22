import styled, { css } from 'styled-components'

export const Form = styled.form`
  margin-top: 41px;
  width: 100%;
  max-width: 430px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 610px) {
    margin-top: 20px;
  }
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

export const TextAreaWrapper = styled.div`
  width: 100%;
  position: relative;
`
export const TextArea = styled.textarea`
  padding: 15px 23px;
  max-height: 173px;
  max-width: 470px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.typographyColors.gray};
  border-style: solid;
  border-radius: 4px;
  width: 100%;

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.neutralColors.grayLighter};
  }
`

export const SubmitButton = styled.button`
  font-size: 1.6rem;
  padding: 10px 0;
  cursor: pointer;
  margin-top: 80px;

  ${({ theme }) => css`
    background: ${theme.colors.secondaryColor.secondary};
    border: none;
    border-radius: 24px;
    color: ${theme.colors.typographyColors.white};
    font-weight: ${theme.font.weight.bold};

    &:hover {
      background: ${theme.colors.secondaryColor.secondaryDark};
    }

    @media (max-width: 610px) {
      margin-top: 20px;
    }
  `}
`
export const EmailInfoParagraph = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 87px;
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.gray};
  `};

  @media (max-width: 610px) {
    margin-top: unset;
    margin-bottom: 30px;
  }
`
export const EmailLink = styled.a`
  text-decoration: underline;
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.gray};
    font-weight: ${theme.font.weight.bold};
  `}
`
