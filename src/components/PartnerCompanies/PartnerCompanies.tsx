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
            src="/images/alpargatas-icon.svg"
            width={120}
            height={61}
            alt="alpagartas"
          />
          <Image
            src="/images/google-icon.svg"
            width={120}
            height={39}
            alt="google"
          />
          <Image
            src="/images/pitagoras-icon.svg"
            width={80}
            height={59}
            alt="pitágoras"
          />
          <Image
            src="/images/raizen-icon.svg"
            width={120}
            height={37}
            alt="raízen"
          />
          <Image
            src="/images/santander-icon.svg"
            width={120}
            height={21}
            alt="santander"
          />
          <Image
            src="/images/ioasys-icon.svg"
            width={80}
            height={80}
            alt="ioasys"
          />
        </S.IconsWrapper>
      </S.Wrapper>
    </MainContainer>
  )
}

export default PartnerCompanies
