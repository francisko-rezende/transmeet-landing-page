import React from 'react'

import * as S from './ButtonLink.styles'

export type ButtonLinkProps = {
  children: string
  href?: string
}

const ButtonLink = ({ children = 'Cadastrar', href }: ButtonLinkProps) => {
  return <S.ButtonLink href={href}>{children}</S.ButtonLink>
}

export default ButtonLink
