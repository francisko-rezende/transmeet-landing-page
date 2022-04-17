import React from 'react'

import MainContainer from 'components/MainContainer'
import RegistrationStepCard from 'components/RegistrationStepCard'

import * as S from './RegistrationSteps.styles'

const RegistrationSteps = () => {
  return (
    <MainContainer>
      <S.Section>
        <S.Title>
          Veja como funciona o processo <span>Muito simples se candidatar</span>
        </S.Title>
        <S.StepList>
          <RegistrationStepCard
            stepNumber="1"
            ringType="blueRight"
            stepTitle="Escolha uma empresa"
            stepDescription="Pesquise uma ou busque uma empresa em nossa lista de parceiros"
          />
          <RegistrationStepCard
            stepNumber="2"
            ringType="blueBottom"
            stepTitle="Leia o perfil que a empresa busca"
            stepDescription="Leia atentamente sobre a empresa e o perfil que ela está buscando"
          />
          <RegistrationStepCard
            stepNumber="3"
            ringType="blueLeft"
            stepTitle="Se candidade para a oportunidade"
            stepDescription="Caso se identifique com o perfil se candidate para a oportunidade"
          />
          <RegistrationStepCard
            stepNumber="4"
            ringType="blueTop"
            stepTitle="Espere o “match” acontecer"
            stepDescription="Ocorrendo a combinação (match) você receberá um aviso e a empresa entrará em contato com você"
          />
        </S.StepList>
      </S.Section>
    </MainContainer>
  )
}

export default RegistrationSteps
