import React from 'react'

import Button from 'components/Button'
import CloseMenuButton from 'components/CloseMenuButton'
import HamburguerButton from 'components/HamburguerButton'
import Image from 'next/image'
import Link from 'next/link'

import * as S from './MobileMenu.styles'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <S.Wrapper>
      <S.LogoWrapperMenuClosed>
        <Image
          src="/images/logo-color.webp"
          width={117}
          height={26}
          alt="transmeet"
        />
      </S.LogoWrapperMenuClosed>
      <S.Buns>
        <HamburguerButton onClick={() => setIsOpen(true)} />
      </S.Buns>

      <S.OpenedMenu aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseMenuButton onClick={() => setIsOpen(false)} />

        <S.MenuList>
          <S.LogoWrapper>
            <Image
              src="/images/logo-color.webp"
              width={196}
              height={43}
              alt="transmeet"
            />
          </S.LogoWrapper>
          <S.MenuItem>
            <Link href="#" passHref>
              <S.StyledLink>Home</S.StyledLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="#" passHref>
              <S.StyledLink>Aplicativo</S.StyledLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="#" passHref>
              <S.StyledLink>Sobre</S.StyledLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="#" passHref>
              <S.StyledLink>Contato</S.StyledLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="#" passHref>
              <Button>Entrar/Registrar</Button>
            </Link>
          </S.MenuItem>
        </S.MenuList>
      </S.OpenedMenu>
    </S.Wrapper>
  )
}

export default MobileMenu
