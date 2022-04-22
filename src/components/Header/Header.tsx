import React from 'react'

import AppLinks from 'components/AppLinks'
import MainContainer from 'components/MainContainer'
import MobileMenu from 'components/MobileMenu'
import NavBar from 'components/NavBar'
import Image from 'next/image'
import Link from 'next/link'

import * as S from './Header.styles'

const Header = () => {
  return (
    <S.Bg>
      <MainContainer>
        <S.OnlyOnLargerScreens>
          <S.Header>
            <Link href="/">
              <a>
                <Image
                  src="/images/logo-color.webp"
                  width={200}
                  height={45}
                  alt="transmeet"
                />
              </a>
            </Link>
            <NavBar />
            <AppLinks />
          </S.Header>
        </S.OnlyOnLargerScreens>
        <S.OnlyOnSmallerScreens>
          <MobileMenu />
        </S.OnlyOnSmallerScreens>
      </MainContainer>
    </S.Bg>
  )
}

export default Header
