import React from 'react'

import * as S from './Button.styles'

export type ButtonProps = {
  children: string
  link?: string
}

const Button = ({ children = 'Cadastrar', link }: ButtonProps) => {
  return <S.Button href={link}>{children}</S.Button>
}

export default Button
