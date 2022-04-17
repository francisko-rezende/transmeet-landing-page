import React from 'react'

import MainContainer from 'components/MainContainer'
import Image from 'next/image'

import * as S from './MatchWithWhoMakesADiff.styles'

const MatchWithWhoMakesADiff = () => {
  return (
    <MainContainer>
      <S.Wrapper>
        <S.ImgWrapper>
          <Image
            src="/images/pic-02.webp"
            width={547}
            height={509}
            alt="Estudante sorridente olhando o celular"
          />
        </S.ImgWrapper>
        <S.TextWrapper>
          <S.Title>Combine com quem faz a diferença!</S.Title>
          <S.Paragraph>
            Através da nossa plataforma é possível encontrar empresas que estão
            dispostas a patrocinar os estudos da população trans, travesti e não
            binária em diversas áreas do conhecimento.
          </S.Paragraph>
          <p>
            <S.SecondaryText>Nada de letrinha pequena...</S.SecondaryText>
            <S.BoldText>Escolheu, combinou, estudou!</S.BoldText>
          </p>
        </S.TextWrapper>
      </S.Wrapper>
    </MainContainer>
  )
}

export default MatchWithWhoMakesADiff
