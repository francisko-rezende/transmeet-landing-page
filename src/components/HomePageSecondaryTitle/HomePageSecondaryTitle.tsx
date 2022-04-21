import React from 'react'

import * as S from './HomePageSecondaryTitle.styles'

export type HomePageSecondaryTitleProps = {
  title: string
  span: string
}

const HomePageSecondaryTitle = ({
  title,
  span
}: HomePageSecondaryTitleProps) => {
  return (
    <S.SecondaryTitle>
      <S.PinkSpan>{span}</S.PinkSpan>
      {title}
    </S.SecondaryTitle>
  )
}

export default HomePageSecondaryTitle
