import React from 'react'

import Input from 'components/Input'

import * as S from './ContactForm.styles'

const ContactForm = () => {
  return (
    <S.Form>
      <Input label="Nome" type="text" name="nome" placeholder="Seu nome" />
      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="email@email.com.br"
      />
      <Input
        label="Assunto"
        type="text"
        name="assunto"
        placeholder="Motivo do contato"
      />
      <S.TextAreaWrapper>
        <S.Label htmlFor="message">Sua mensagem</S.Label>
        <S.TextArea id="message" name="mensagem" rows={10}></S.TextArea>
      </S.TextAreaWrapper>
      <S.SubmitButton onClick={(e) => e.preventDefault()}>
        Enviar mensagem
      </S.SubmitButton>
      <S.EmailInfoParagraph>
        Problemas com a plataforma? Envie um email para{' '}
        <S.EmailLink href="mailto:transmeet.edu@gmail.com">
          transmeet.edu@gmail.com
        </S.EmailLink>
      </S.EmailInfoParagraph>
    </S.Form>
  )
}

export default ContactForm
