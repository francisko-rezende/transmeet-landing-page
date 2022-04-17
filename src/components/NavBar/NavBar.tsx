import React from 'react'

import * as S from './NavBar.styles'

const NavBar = () => {
  return (
    <S.Nav>
      <S.List>
        <S.Item>
          <S.NavLink href="#">Home</S.NavLink>
        </S.Item>
        <S.Item>
          <S.NavLink href="#">Aplicativo</S.NavLink>
        </S.Item>
        <S.Item>
          <S.NavLink href="#">Sobre</S.NavLink>
        </S.Item>
        <S.Item>
          <S.NavLink href="#">Contato</S.NavLink>
        </S.Item>
      </S.List>
    </S.Nav>
  )
}

export default NavBar
