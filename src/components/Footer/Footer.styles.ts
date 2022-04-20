import styled, { css } from 'styled-components'

export const Bg = styled.div`
  background-color: ${({ theme }) => theme.colors.typographyColors.black};
`

export const Footer = styled.footer`
  padding-top: 91px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 45px;
  align-items: center;

  @media (max-width: 811px) {
    grid-template-columns: 1fr;
    justify-items: center;
    padding-top: 36px;
  }
`

export const IconAreaWrapper = styled.div`
  @media (max-width: 811px) {
    grid-row: 2/3;
  }
`

export const YourOppSpan = styled.span`
  display: block;
  font-size: 4rem;

  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.white};
    font-weight: ${theme.font.weight.bold};
  `}

  @media (max-width: 811px) {
    display: none;
  }
`

export const Paragraph = styled.p`
  font-size: 1.4rem;
  line-height: 2;

  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.white};
    opacity: 0.8;
  `}

  @media (max-width: 811px) {
    display: none;
  }
`

export const ParagraphForm = styled.p`
  font-size: 1.4rem;
  line-height: 2;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.white};
    opacity: 0.8;
  `}

  @media (max-width: 811px) {
    /* font-size: 3.2rem; */

    @media (max-width: 610px) {
      font-size: 1.2rem;
      line-height: 1.5;
    }
  }
`

export const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: 31px;
`

export const Form = styled.form`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 35px;
  border-radius: 25px;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: end;

  @media (max-width: 811px) {
    justify-self: unset;
  }
`

export const FormTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 15px;

  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.white};
    font-weight: ${theme.font.weight.bold};
  `}

  @media (max-width: 610px) {
    margin-bottom: 3rem;
  }
`
export const InputWrapper = styled.div`
  border-radius: 6px;
  display: flex;
  overflow: hidden;
  width: 100%;
  display: flex;
  margin-bottom: 36px;

  ${({ theme }) => css`
    background-color: ${theme.colors.typographyColors.white};
  `}
`

export const Input = styled.input`
  background-color: transparent;
  flex: 1;
  border: none;
  height: 50px;
  padding-left: 35px;
`

export const Button = styled.button`
  padding: 0 18px;
  border: none;
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryColor.secondary};

    &:hover {
      background-color: ${theme.colors.secondaryColor.secondaryDark};
    }
  `}
`

export const Copyright = styled.p`
  border-top: 1px solid hsla(0, 0%, 100%, 0.25);
  padding: 64px;
  font-size: 1.2rem;
  text-align: center;
  grid-column: span 2;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.typographyColors.white};

  @media (max-width: 610px) {
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.font.weight.regular};
    padding-left: 55px;
    padding-right: 55px;
  }
`
