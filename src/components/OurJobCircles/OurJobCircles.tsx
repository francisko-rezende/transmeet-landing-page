import React from 'react'

import Image from 'next/image'

import * as S from './OurJobCircles.styles'

export type OurJobCirclesProps = {
  imgName: string
  alt: string
  description: string
}

const OurJobCircles = ({ imgName, alt, description }: OurJobCirclesProps) => {
  return (
    <S.ListItem>
      <Image src={`/images/${imgName}`} width={203} height={203} alt={alt} />
      <S.Paragraph>{description}</S.Paragraph>
    </S.ListItem>
  )
}

export default OurJobCircles
