import React from 'react'

import HollowButtonLink from 'components/HollowButtonLink'
import HomePageSecondaryTitle from 'components/HomePageSecondaryTitle'
import OurJobCircles from 'components/OurJobCircles'

import * as S from './ThisIsOurJob.styles'

const ThisIsOurJob = () => {
  return (
    <S.Bg>
      <S.Section>
        <HomePageSecondaryTitle
          span="Nós somos a Transmeet"
          title="Este é o nosso trabalho"
        />
        <S.CirclesList>
          <OurJobCircles
            imgName="circles-01.webp"
            alt="Estudante segurando seu telefone e sorrindo"
            description="Acolher o candidato trans"
          />
          <OurJobCircles
            imgName="circles-02.webp"
            alt="Estudante olhando pro computador e sorrindo"
            description="Conectar com empresas"
          />
          <OurJobCircles
            imgName="circles-03.webp"
            alt="Estudante confiante olhando pra você"
            description="Oferecer oportunidades"
          />
        </S.CirclesList>
        <HollowButtonLink
          href="/about"
          label="Conheça melhor a Transmeet"
          color="pink"
        />
        {/* <Link href="/about" passHref>
          <S.Link>Conheça melhor a Transmeet</S.Link>
        </Link> */}
      </S.Section>
    </S.Bg>
  )
}

export default ThisIsOurJob
