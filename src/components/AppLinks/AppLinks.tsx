import React from 'react'

import Button from 'components/Button'

import * as S from './AppLinks.styles'

const AppLinks = () => {
  return (
    <S.Wrapper>
      <div>
        <S.Link href="#">Entre</S.Link>
      </div>
      <Button>Cadastrar</Button>
    </S.Wrapper>
  )
}

export default AppLinks
