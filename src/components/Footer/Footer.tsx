import React from 'react'

import MainContainer from 'components/MainContainer'
import Image from 'next/image'

import * as S from './Footer.styles'

const Footer = () => {
  return (
    <S.Bg>
      <MainContainer>
        <S.Footer>
          <S.IconAreaWrapper>
            <Image
              src="/images/logo-color.webp"
              width={200}
              height={45}
              alt="transmeet"
            />
            <S.YourOppSpan>Somos a sua oportunidade</S.YourOppSpan>
            <S.Paragraph style={{ textAlign: 'left' }}>
              Nós da Transmeet criamos pontes para o acesso à educação e temos
              como foco, a transmissão da diversidade e inclusão.
            </S.Paragraph>
            <S.SocialsWrapper>
              <Image
                src="/images/facebook-icon.svg"
                width={39}
                height={39}
                alt="transmeet"
              />
              <Image
                src="/images/linkedin-icon.svg"
                width={39}
                height={39}
                alt="transmeet"
              />
              <Image
                src="/images/twitter-icon.svg"
                width={39}
                height={39}
                alt="transmeet"
              />
            </S.SocialsWrapper>
          </S.IconAreaWrapper>

          <S.Form>
            <S.FormTitle>Receba nossas atualizações</S.FormTitle>
            <label htmlFor="email"></label>
            <S.InputWrapper>
              <S.Input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
              />
              <S.Button onSubmit={(e) => e.preventDefault()}>
                <Image
                  src="/images/arrow-right.svg"
                  width={16}
                  height={13}
                  alt="Submeter email"
                />
              </S.Button>
            </S.InputWrapper>
            <S.ParagraphForm>
              Inscreva-se na nossa lista e tenha sempre notícias novas em
              primeira mão!
            </S.ParagraphForm>
          </S.Form>

          <S.Copyright>
            © 2022 Transmeet. Todos os direitos reservados Desenvolvido pela
            Eduquáquá 🦆{' '}
          </S.Copyright>
        </S.Footer>
      </MainContainer>
    </S.Bg>
  )
}

export default Footer
