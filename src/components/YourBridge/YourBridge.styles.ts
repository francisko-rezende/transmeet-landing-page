import styled, { css } from 'styled-components'

// import pic01 from '../../../public/images/pic-01.webp'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 5fr 7fr;
  margin-top: 11.8rem;
`
export const Title = styled.h2`
  font-size: 7.2rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.typographyColors.black};
`

export const Paragraph = styled.p`
  margin-top: 5.1rem;
  text-align: left;
  line-height: 1.5;
  max-width: 46.9rem;

  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.gray};
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.sizes['7']};
  `};
`

export const ImgWrapper = styled.div`
  position: relative;

  /* &::after {
    content: '';
    background-image: url('/images/pic-01.webp');
    background-size: cover;
    display: inline-block;
    position: absolute;
    width: 915px;
    height: 915px;
    left: 0;
    top: 0px;
    transform: translate(8%, -30%);
  } */
  /* position: absolute;
  top: 0;
  left: 50px; */
`
export const Img = styled.img`
  position: absolute;
  /* display: block;
  max-width: 100%;
  max-height: 100%; */
  transform: translateX(8%) translateY(-29%);
  pointer-events: none;
`

export const AppStoreButtonsWrapper = styled.div`
  margin-top: 8.2rem;
  display: flex;
  gap: 24px;
`
