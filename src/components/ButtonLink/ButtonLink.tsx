import React from 'react'

import * as S from './ButtonLink.styles'

export type ButtonLinkProps = {
  children: string
}

const ButtonLink = ({ children = 'Cadastrar' }: ButtonLinkProps) => {
  return <S.ButtonLink>{children}</S.ButtonLink>
}

export default ButtonLink
