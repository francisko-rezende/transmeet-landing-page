import styled from 'styled-components'

export const Nav = styled.nav`
  max-width: 40rem;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  justify-content: center;
  align-items: center;
  list-style: none;
  /* gap: 35px; */
`

export const Item = styled.li`
  width: 10rem;
  text-align: center;
`

export const NavLink = styled.a`
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
      animation: hoverAnimation 0.3s forwards;
    }

    @keyframes hoverAnimation {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }
  }
`
