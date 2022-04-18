import React from 'react'

import MainContainer from 'components/MainContainer'
import Image from 'next/image'

import * as S from './ManyPossibilities.styles'

const ManyPossibilities = () => {
  return (
    <S.Bg>
      <MainContainer>
        <S.Wrapper>
          <S.TextWrapper>
            <S.Title>Muitas possibilidades em um só lugar...</S.Title>
            <S.DescriptionParagraph>
              De universidades a empresas de comércio, a Transmeet te conecta a
              muitas possibilidades, basta apenas escolher a que você mais se
              identifica e ver se a combinação vai acontecer!
            </S.DescriptionParagraph>
            <S.LastParagraph>
              Até parece mentira de tão fácil né?<br></br>
              <span>Mas aqui é assim, a educação é levada a sério!</span>
            </S.LastParagraph>
            <S.AppStoreButtonsWrapper>
              <Image
                src="/images/google.svg"
                width={176}
                height={60}
                alt="Em breve no Google Play"
              />
              <Image
                src="/images/apple.svg"
                width={176}
                height={60}
                alt="Em breve na App Store"
              />
            </S.AppStoreButtonsWrapper>
          </S.TextWrapper>
          <S.ImgWrapper>
            <Image
              width={654}
              height={589}
              src="/images/pic-03.webp"
              alt="Ilustração mostrando um gráfico de barras"
            />
          </S.ImgWrapper>
        </S.Wrapper>
      </MainContainer>
    </S.Bg>
  )
}

export default ManyPossibilities
