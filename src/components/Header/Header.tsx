import React from 'react'

import AppLinks from 'components/AppLinks'
import MainContainer from 'components/MainContainer'
import NavBar from 'components/NavBar'
import Image from 'next/image'

import * as S from './Header.styles'

const Header = () => {
  return (
    <S.Bg>
      <MainContainer>
        <S.Header>
          <Image
            src="/images/logo-color.webp"
            width={200}
            height={45}
            alt="transmeet"
          />
          <NavBar />
          <AppLinks />
        </S.Header>
      </MainContainer>
    </S.Bg>
  )
}

export default Header
