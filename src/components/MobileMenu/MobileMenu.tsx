import React from 'react'

import ButtonLink from 'components/ButtonLink'
import CloseMenuButton from 'components/CloseMenuButton'
import HamburguerButton from 'components/HamburguerButton'
import Image from 'next/image'
import Link from 'next/link'

import * as S from './MobileMenu.styles'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <S.Wrapper>
      <Link href="/" passHref>
        <S.LogoWrapperMenuClosedLink>
          <Image
            src="/images/logo-color.webp"
            width={117}
            height={26}
            alt="transmeet"
          />
        </S.LogoWrapperMenuClosedLink>
      </Link>
      <S.Buns>
        <HamburguerButton onClick={() => setIsOpen(true)} />
      </S.Buns>

      <S.OpenedMenu aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseMenuButton onClick={() => setIsOpen(false)} />

        <S.MenuList>
          <Link href="/" passHref>
            <S.LogoWrapperLink>
              <Image
                src="/images/logo-color.webp"
                width={196}
                height={43}
                alt="transmeet"
              />
            </S.LogoWrapperLink>
          </Link>
          <S.MenuItem>
            <Link href="/" passHref>
              <S.StyledLink>Home</S.StyledLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="/application" passHref>
              <S.StyledLink>Aplicativo</S.StyledLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="/about" passHref>
              <S.StyledLink>Sobre</S.StyledLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="/contact" passHref>
              <S.StyledLink>Contato</S.StyledLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="#" passHref>
              <ButtonLink>Entrar/Registrar</ButtonLink>
            </Link>
          </S.MenuItem>
        </S.MenuList>
      </S.OpenedMenu>
    </S.Wrapper>
  )
}

export default MobileMenu
