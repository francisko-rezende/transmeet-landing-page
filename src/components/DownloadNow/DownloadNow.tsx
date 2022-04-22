import React from 'react'

// import DownloadNowGradientBorder from 'components/DownloadNowGradientBorder'
import MainContainer from 'components/MainContainer'
import Image from 'next/image'

import * as S from './DownloadNow.styles'

type DownloadNowProps = {
  blackText: string
}

const DownloadNow = ({ blackText }: DownloadNowProps) => {
  return (
    <MainContainer>
      <S.SectionWrapper>
        <S.BorderWrapper>
          <S.TitleWrapper>
            <S.DownloadSpam>{blackText}</S.DownloadSpam>
            <S.BeAPartSpam>
              <span>faça parte desta transformação</span>
            </S.BeAPartSpam>
          </S.TitleWrapper>
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
          {/* <DownloadNowGradientBorder /> */}
        </S.BorderWrapper>
        <S.PhoneWrapper>
          <Image
            src="/images/phone.webp"
            width={687}
            height={158}
            alt="Telefone celular mostrando o app"
          />
        </S.PhoneWrapper>
      </S.SectionWrapper>
    </MainContainer>
  )
}

export default DownloadNow
