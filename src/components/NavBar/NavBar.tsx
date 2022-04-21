import React from 'react'

import Link from 'next/link'

import * as S from './NavBar.styles'

const NavBar = () => {
  return (
    <S.Nav>
      <S.List>
        <S.Item>
          <Link href="#" passHref>
            <S.NavLink>Home</S.NavLink>
          </Link>
        </S.Item>
        <S.Item>
          <Link href="/" passHref>
            <S.NavLink>Aplicativo</S.NavLink>
          </Link>
        </S.Item>
        <S.Item>
          <Link href="/about" passHref>
            <S.NavLink>Sobre</S.NavLink>
          </Link>
        </S.Item>
        <S.Item>
          <Link href="/contact" passHref>
            <S.NavLink>Contato</S.NavLink>
          </Link>
        </S.Item>
      </S.List>
    </S.Nav>
  )
}

export default NavBar
