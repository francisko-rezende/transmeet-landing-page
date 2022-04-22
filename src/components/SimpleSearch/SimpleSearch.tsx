import React from 'react'

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
        <div>
          <Image
            src="/images/search-icon.svg"
            width={24}
            height={24}
            alt="Lupa"
          />
          <S.HiddenLabel htmlFor="pesquisa">
            Pesquise por um termo ou empresa
          </S.HiddenLabel>
          <input type="text" placeholder="Pesquise um termo ou empresa..." />
          <button type="submit" onClick={(e) => e.preventDefault()}>
            Pesquisar
          </button>
        </div>
      </S.Form>
    </S.Section>
  )
}

export default SimpleSearch
