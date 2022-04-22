import React from 'react'

import HollowButtonLink from 'components/HollowButtonLink'
import HomePageSecondaryTitle from 'components/HomePageSecondaryTitle'
import Image from 'next/image'

import * as S from './SimpleSearch.styles'

const SimpleSearch = () => {
  return (
    <S.Section>
      <HomePageSecondaryTitle
        span="Veja as oportunidades disponíveis"
        title="Realize um busca simples"
        titleColor="dark"
      />
      <S.Form>
        <S.InputWrapper>
          <Image
            src="/images/search-icon.svg"
            width={20}
            height={20}
            alt="Lupa"
          />
          <S.HiddenLabel htmlFor="pesquisa">
            Pesquise por um termo ou empresa
          </S.HiddenLabel>
          <S.Input type="text" placeholder="Pesquise um termo ou empresa..." />
        </S.InputWrapper>
        <S.Button type="submit" onClick={(e) => e.preventDefault()}>
          Pesquisar
        </S.Button>
      </S.Form>
      <S.CompaniesContainer>
        <Image
          src="/images/card-empresa-1.webp"
          width={370}
          height={105}
          alt="Card da empresa Ioasys"
        />
        <Image
          src="/images/card-empresa-2.webp"
          width={370}
          height={105}
          alt="Card da empresa Santandar"
        />
        <Image
          src="/images/card-empresa-3.webp"
          width={370}
          height={105}
          alt="Card da empresa Pitágoras"
        />
        <Image
          src="/images/card-empresa-4.webp"
          width={370}
          height={105}
          alt="Card da empresa Amerocanas"
        />
        <Image
          src="/images/card-empresa-5.webp"
          width={370}
          height={105}
          alt="Card da empresa Havaianas"
        />
        <Image
          src="/images/card-empresa-6.webp"
          width={370}
          height={105}
          alt="Card da empresa Osklen"
        />
        <Image
          src="/images/card-empresa-7.webp"
          width={370}
          height={105}
          alt="Card da empresa Amazon"
        />
        <Image
          src="/images/card-empresa-8.webp"
          width={370}
          height={105}
          alt="Card da empresa Raízen"
        />
      </S.CompaniesContainer>
      <S.LinkWrapper>
        <HollowButtonLink href="#" color="blue" label="ver mais empresas" />
      </S.LinkWrapper>
    </S.Section>
  )
}

export default SimpleSearch
