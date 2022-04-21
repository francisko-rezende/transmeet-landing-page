import React from 'react'

import ContactForm from 'components/ContactForm'
import Image from 'next/image'

import * as S from './ContactPageContent.styles'

const ContactPageContent = () => {
  return (
    <S.Container>
      <Image
        src="/images/logo-transmeet-contato.webp"
        width={300}
        height={70.86}
        alt="Transmeet"
      />
      <S.PrimaryTitle>Contato</S.PrimaryTitle>
      <S.SecondaryTitle>
        Dúvidas, reclamações, sugestões ou outros assuntos sobre a Transmeet?
        Nos conte abaixo.
      </S.SecondaryTitle>
      <ContactForm />
    </S.Container>
  )
}

export default ContactPageContent
