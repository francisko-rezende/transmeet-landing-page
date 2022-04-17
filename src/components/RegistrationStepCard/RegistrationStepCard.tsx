import React from 'react'

import CardRing from 'components/CardRing'

import * as S from './RegistrationStepCard.styles'

export type RegistrationStepCardProps = {
  stepNumber: string
  ringType: 'blueRight' | 'blueBottom' | 'blueLeft' | 'blueTop'
  stepTitle: string
  stepDescription: string
}

const RegistrationStepCard = ({
  stepNumber = '1',
  ringType = 'blueRight',
  stepTitle = 'Escolha uma empresa',
  stepDescription = 'Pesquise uma ou busque uma empresa em nossa lista de parceiros'
}: RegistrationStepCardProps) => {
  return (
    <S.Item>
      <CardRing stepNumber={stepNumber} ringType={ringType}></CardRing>
      <S.StepTitle>{stepTitle}</S.StepTitle>
      <S.StepDescription>{stepDescription}</S.StepDescription>
    </S.Item>
  )
}

export default RegistrationStepCard
