import React from 'react'

import * as S from './DataCard.styles'

export type DataCardProps = {
  percentage: string
  explanation: string
}

const DataCard = ({
  percentage = '72',
  explanation = 'Não possui ensino Médio e 56% o Fundamental'
}: DataCardProps) => {
  return (
    <S.Card>
      <S.Percentage>{percentage}%</S.Percentage>
      <S.Explanation>{explanation}</S.Explanation>
    </S.Card>
  )
}

export default DataCard
