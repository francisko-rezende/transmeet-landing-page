import React from 'react'

import DataCard from 'components/DataCard'
import MainContainer from 'components/MainContainer'

import * as S from './DataOnTransEducation.styles'

const DataOnTransEducation = () => {
  return (
    <MainContainer>
      <S.Wrapper>
        <S.FirstSpan>
          Entenda porque a educação é importante para nós
        </S.FirstSpan>
        <S.Title>
          Dados rápidos sobre a educação de pessoas transgêneras
        </S.Title>
        <S.SecondSpan>- Fonte: ANTRA / 2021 -</S.SecondSpan>
        <S.DataList>
          <DataCard
            percentage="72"
            explanation="Não possui ensino Médio
e 56% o Fundamental"
          />
          <DataCard
            percentage="82"
            explanation="Abandonaram os estudos ainda no
ensino básico"
          />
          <DataCard
            percentage="0,3"
            explanation="Quantidade de pessoas Trans
nas universidades federais"
          />
        </S.DataList>
      </S.Wrapper>
    </MainContainer>
  )
}

export default DataOnTransEducation
