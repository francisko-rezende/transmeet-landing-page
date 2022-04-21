import React from 'react'

import MainContainer from 'components/MainContainer'
import Image from 'next/image'

import * as S from './EducationOpportunityDiversity.styles'

const EducationOpportunityDiversity = () => {
  return (
    <MainContainer>
      <S.Section>
        <S.SecondaryTitle>
          <S.BlueSpan>Educação,</S.BlueSpan>{' '}
          <S.PinkSpan>oportunidade,</S.PinkSpan>{' '}
          <S.GraySpan>diversidade!</S.GraySpan>
        </S.SecondaryTitle>
        <S.ImgWrapper>
          <Image
            src="/images/home-pic-01.webp"
            width={662}
            height={619}
            alt="Um estudante fazendo anotações"
          />
        </S.ImgWrapper>
        <S.Paragraph>
          <S.SemiBoldText>
            Movidos pelo seu crescimento pessoal e profissional,
          </S.SemiBoldText>{' '}
          a Transmeet possui o compromisso de ser a ponte entre você e uma
          educação de qualidade!
        </S.Paragraph>
      </S.Section>
    </MainContainer>
  )
}

export default EducationOpportunityDiversity
