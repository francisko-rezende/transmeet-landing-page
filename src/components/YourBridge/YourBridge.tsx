import React from 'react'

import MainContainer from 'components/MainContainer'
import Image from 'next/image'

import * as S from './YourBridge.styles'

const YourBridge = () => {
  return (
    <MainContainer>
      <S.Wrapper>
        <S.ContentWrapper>
          <S.Title>
            Somos a sua ponte para a <span>transformação!</span>
          </S.Title>
          <S.Paragraph>
            Acreditamos que a educação é feita para qualquer pessoa, então
            criamos através do nosso app e plataforma, pontes para uma educação
            mais inclusiva.{' '}
          </S.Paragraph>
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
        </S.ContentWrapper>
        <S.ImgWrapper>
          <S.Img
            src="/images/pic-01-2.webp"
            // width={915}
            // height={915}
            alt="Um estudante sorrindo"
          />
          {/* <Image
            layout="fixed"
            objectFit="cover"
            src="/images/pic-01.webp"
            width={915}
            height={915}
            alt="Um estudante sorrindo"
          /> */}
        </S.ImgWrapper>
      </S.Wrapper>
    </MainContainer>
  )
}

export default YourBridge
