import styled, { css } from 'styled-components'

// import pic01 from '../../../public/images/pic-01.webp'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 5fr 7fr;
  margin-top: 11.8rem;

  @media (max-width: 811px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 397px);
  }

  @media (max-width: 610px) {
    grid-template-rows: 250px 1fr;
    /* grid-template-columns: 346px; */
  }
`

export const ContentWrapper = styled.div`
  @media (max-width: 811px) {
    grid-row: 2/3;
    margin-top: 3.2rem;
  }
`

export const Title = styled.h2`
  font-size: 7.2rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.typographyColors.black};

  @media (max-width: 811px) {
    text-align: center;
    font-size: 5.2rem;
  }

  @media (max-width: 610px) {
    font-size: 3.7rem;
  }
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

  @media (max-width: 811px) {
    text-align: center;
    font-size: 1.8rem;
    margin: 3.2rem auto;
  }

  @media (max-width: 610px) {
    font-size: 1.2rem;
    max-width: 262px;
    margin-top: 25px;
  }
`

export const ImgWrapper = styled.div`
  position: relative;
  /* background-color: red; */
  /* background: red; */

  @media (max-width: 811px) {
    grid-row: 1/2;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 610px) {
    /* display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover; */
    /* transform: translateX(-5.5%) translateY(-45%);
    width: 386px;
    height: 386px;
    position: absolute; */
    /* height: 1px; */
  }

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
  @media (max-width: 610px) {
    /* display: flex;
    justify-content: center; */
  }
`
export const Img = styled.img`
  position: absolute;
  /* display: block;
  max-width: 100%;
  max-height: 100%; */
  width: 915px;
  height: 915px;
  pointer-events: none;
  transform: translateX(8%) translateY(-29%);

  @media (max-width: 811px) {
    transform: translateX(0%) translateY(-29%);
    width: 600px;
    height: 600px;
    /* transform: unset; */
    position: relative;
  }

  @media (max-width: 610px) {
    /* display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover; */
    /* transform: translateX(-5.5%) translateY(-45%); */
    /* transform: translateY(-30%); */
    top: -60px;
    width: 465px;
    height: 465px;
    position: absolute;
  }
`

export const AppStoreButtonsWrapper = styled.div`
  margin-top: 8.2rem;
  display: flex;
  justify-content: center;
  gap: 24px;

  @media (max-width: 811px) {
    margin-top: 4.1rem;
  }
`
