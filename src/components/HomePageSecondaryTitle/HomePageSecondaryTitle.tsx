import React from 'react'

import * as S from './HomePageSecondaryTitle.styles'

export type HomePageSecondaryTitleProps = {
  title: string
  span: string
  titleColor: 'light' | 'dark'
}

const HomePageSecondaryTitle = ({
  title,
  span,
  titleColor
}: HomePageSecondaryTitleProps) => {
  return (
    <S.SecondaryTitle titleColor={titleColor}>
      <S.PinkSpan>{span}</S.PinkSpan>
      {title}
    </S.SecondaryTitle>
  )
}

export default HomePageSecondaryTitle
