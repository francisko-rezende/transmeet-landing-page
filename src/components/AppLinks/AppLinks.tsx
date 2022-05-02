import React from 'react'

import ButtonLink from 'components/ButtonLink'
import Link from 'next/link'

import * as S from './AppLinks.styles'

const AppLinks = () => {
  return (
    <S.Wrapper>
      <div>
        <S.Link href="https://transmeet-web.vercel.app/">Entre</S.Link>
      </div>
      <Link href="https://transmeet-web.vercel.app/registro" passHref>
        <ButtonLink>Cadastrar</ButtonLink>
      </Link>
    </S.Wrapper>
  )
}

export default AppLinks
