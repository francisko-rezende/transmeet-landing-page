import styled, { css } from 'styled-components'

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 174px;
`

export const BorderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 770px;
  height: 191px;
  /* background-color: red; */
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 3;
  position: relative;
  top: -50px;
`

export const DownloadSpam = styled.span`
  display: block;
  text-align: center;
  font-size: 3.2rem;
  padding: 0 35px;

  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.black};
    font-weight: ${theme.font.weight.extraBold};
    background-color: ${theme.colors.typographyColors.white};
  `}
`

export const BeAPartSpam = styled.span`
  font-size: 4rem;
  display: block;

  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor.secondary};
    /* position: absolute; */
    bottom: 10px;
    background: ${theme.colors.typographyColors.white};
    font-weight: ${theme.font.weight.extraBold};
  `}
`

export const AppStoreButtonsWrapper = styled.div`
  margin-top: 8.2rem;
  display: flex;
  gap: 24px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.typographyColors.white};
  padding: 0 30px;
  top: 55px;
  z-index: 3;
`
export const PhoneWrapper = styled.div`
  margin-top: 83px;
`
