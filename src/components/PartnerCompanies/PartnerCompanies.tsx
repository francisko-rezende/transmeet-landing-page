import React from 'react'

import MainContainer from 'components/MainContainer'
import Image from 'next/image'

import * as S from './PartnerCompanies.styles'

const PartnerCompanies = () => {
  return (
    <MainContainer>
      <S.Wrapper>
        <S.Title>- conheça alguns dos nossos parceiros -</S.Title>
        <S.IconsWrapper>
          <Image
            src="/images/alpargatas-icon.webp"
            width={120}
            height={61}
            alt="alpagartas"
          />
          <Image
            src="/images/google-icon.webp"
            width={120}
            height={39}
            alt="google"
          />
          <Image
            src="/images/pitagoras-icon.webp"
            width={80}
            height={58}
            alt="pitágoras"
          />
          <Image
            src="/images/raizen-icon.webp"
            width={120}
            height={38}
            alt="raízen"
          />
          <Image
            src="/images/santander-icon.webp"
            width={120}
            height={22}
            alt="santander"
          />
          <Image
            src="/images/ioasys-icon.webp"
            width={80}
            height={60}
            alt="ioasys"
          />
        </S.IconsWrapper>
      </S.Wrapper>
    </MainContainer>
  )
}

export default PartnerCompanies
