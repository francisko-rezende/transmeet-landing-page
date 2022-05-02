import React from 'react'

import ButtonLink from 'components/ButtonLink'
import MainContainer from 'components/MainContainer'
import Image from 'next/image'
import Link from 'next/link'

import * as S from './BenefitsForCompanies.styles'

const BenefitsForCompanies = () => {
  return (
    <MainContainer>
      <S.Wrapper>
        <S.ImgWrapper>
          <Image
            width={644}
            height={593}
            src="/images/bar-plot.svg"
            alt="Ilustração mostrando um gráfico de barras"
          />
        </S.ImgWrapper>
        <S.TextWrapper>
          <S.SecondaryText>
            Você agora deve estar se perguntando:
          </S.SecondaryText>
          <S.Title>O que as empresas ganham com isso?</S.Title>
          <S.Paragraph>
            Além de mostrarem para o mundo que são empresas
            <em>Transfriendly</em>, e que estão dispostas a fazer a diferença,
            elas movimentam o mercado, garantindo que mais pessoas estejam
            capacitadas e preparadas para exercer aquilo que realmente gostariam
            de fazer.
          </S.Paragraph>
          <S.RegistrationLinkWrapper>
            <Link href="https://transmeet-web.vercel.app/registro" passHref>
              <ButtonLink>Registre-se</ButtonLink>
            </Link>
            <S.CallToActionParagraph>
              Empresa, seja nosso parceiro também... <br></br>
              <Link href="https://transmeet-web.vercel.app/registro">
                <a>Registre-se!</a>
              </Link>
            </S.CallToActionParagraph>
          </S.RegistrationLinkWrapper>
        </S.TextWrapper>
      </S.Wrapper>
    </MainContainer>
  )
}

export default BenefitsForCompanies
