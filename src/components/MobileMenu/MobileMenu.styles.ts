import styled, { css, keyframes } from 'styled-components'

type FullMenuProps = {
  isOpen: boolean
}

const underline = keyframes`
from {
  width: 0;
  left: 50%;
}
to {
  width: 100%;
  left: 0;
}
`

export const Wrapper = styled.menu`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: end;
  padding: 16px 0;
`
export const LogoWrapperMenuClosed = styled.div`
  grid-column: 2/3;
  place-self: center;
`

export const Buns = styled.div`
  grid-column: 3/4;
`

export const LogoWrapper = styled.div`
  margin-top: 110px;
  margin-bottom: 108px;
`

export const MenuList = styled.ul``

export const MenuItem = styled.li``

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.typographyColors.white};
  text-decoration: none;
  position: relative;
  width: 100%;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.font.sizes['4']};

  &:hover {
    font-weight: ${({ theme }) => theme.font.weight.bold};

    &::after {
      content: '';
      position: absolute;
      display: block;
      bottom: -1rem;
      height: 0.5rem;
      background: linear-gradient(
        269.71deg,
        rgba(255, 255, 255, 0) 0.01%,
        #f7c2d2 19.66%,
        #bb4981 49%,
        #185aa1 74.55%,
        #1f478b 100%
      );
      animation: ${underline} 0.3s forwards;
    }
  }
`

export const OpenedMenu = styled.nav<FullMenuProps>`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */

  ${({ isOpen, theme }) => css`
    opacity: ${isOpen ? 1 : 0};
    background: ${theme.colors.typographyColors.black};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    pointer-events: ${isOpen ? 'all' : 'none'};
    transition: opacity 0.3s ease-in-out;

    > button[aria-label='Fechar menu'] {
      position: absolute;
      top: 0;
      right: 0;
      margin: 20px 50px;
    }

    ${MenuItem} {
      border-top: 1px solid ${theme.colors.typographyColors.white};
      width: 196px;
      text-align: center;
      padding: 17px 0;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }

    ${MenuList} > :last-child {
      /* border-bottom: 1px solid ${theme.colors.typographyColors.white}; */
      padding-top: 100px;
    }

    ${MenuList} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${StyledLink} {
      ${({ theme }) => css`
        color: ${theme.colors.typographyColors.white};
        color: ${theme.colors.typographyColors.white};

        &:hover {
          &::after {
            content: unset;
            /* position: absolute;
            bottom: unset;
            display: block;
            height: 2px;
            background: ${theme.colors.typographyColors.white};
            animation: ${underline} 0.2s forwards; */
          }
        }
      `}
    }
  `}
`

// export const ButtonWrapper = styled.div``
