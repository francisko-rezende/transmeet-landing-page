import React from 'react'

import ButtonLink from 'components/ButtonLink'
import Link from 'next/link'

import * as S from './AppLinks.styles'

const AppLinks = () => {
  return (
    <S.Wrapper>
      <div>
        <S.Link href="#">Entre</S.Link>
      </div>
      <Link href="#" passHref>
        <ButtonLink>Cadastrar</ButtonLink>
      </Link>
    </S.Wrapper>
  )
}

export default AppLinks
