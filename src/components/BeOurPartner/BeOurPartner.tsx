import React from 'react'

import MainContainer from 'components/MainContainer'
import Image from 'next/image'
import Link from 'next/link'

import * as S from './BeOurPartner.styles'

const BeOurPartner = () => {
  return (
    <MainContainer>
      <S.Section>
        <S.TextWrapper>
          <S.SecondaryTitle>
            Seja nosso parceiro e{' '}
            <S.PinkSpan>crie novas oportunidades!</S.PinkSpan>
          </S.SecondaryTitle>
          <S.Paragraph>
            <S.SemiBold>Seja uma empresa Transfriendly</S.SemiBold> e ajude a
            Transmeet a mudar a vida de milhares de pessoas através da educação!
          </S.Paragraph>
          <S.LinksWrapper>
            <Link href="/contact" passHref>
              <S.LinkButton>Tirar dúvidas</S.LinkButton>
            </Link>
            <S.LinkParagraph>
              Tire suas dúvidas conosco ou{' '}
              <Link href="#" passHref>
                <S.RegistrationLink>registre-se já!</S.RegistrationLink>
              </Link>
            </S.LinkParagraph>
          </S.LinksWrapper>
        </S.TextWrapper>
        <S.ImgWrapper>
          <Image
            src="/images/home-pic-02.webp"
            width={508}
            height={408}
            alt="Mulher apertando a mão de outra pessoa"
          />
        </S.ImgWrapper>
      </S.Section>
    </MainContainer>
  )
}

export default BeOurPartner
