import styled from 'styled-components'

export const Bg = styled.div`
  position: sticky;
  z-index: 4;
  top: 0;
  background-color: ${({ theme }) => theme.colors.typographyColors.black};
`

export const Header = styled.header`
  padding: 4.1rem 0 3.4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const OnlyOnSmallerScreens = styled.div`
  display: block;
  @media (min-width: 808px) {
    display: none;
  }
`

export const OnlyOnLargerScreens = styled.div`
  display: block;
  @media (max-width: 808px) {
    display: none;
  }
`
