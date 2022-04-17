import React from 'react'

import * as S from './CardRing.styles'

export type CardRingProps = {
  stepNumber: string
  ringType: 'blueRight' | 'blueBottom' | 'blueLeft' | 'blueTop'
}

const CardRing = ({
  stepNumber = '1',
  ringType = 'blueRight'
}: CardRingProps) => {
  return (
    <S.Wrapper>
      <S.StepNumber>{stepNumber}</S.StepNumber>
      <S.RingWrapper ringType={ringType}>
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 68">
          <circle cx="34" cy="34" r="31" stroke="url(#a)" strokeWidth="6" />
          <defs>
            <linearGradient
              id="a"
              x1="3"
              y1="34"
              x2="65"
              y2="34"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="0" stopColor="#fff" stopOpacity="0" />
              <stop offset=".51" stopColor="#F7C2D2" />
              <stop offset=".667" stopColor="#BB4981" />
              <stop offset=".911" stopColor="#185AA1" />
              <stop offset="1" stopColor="#1F478B" />
            </linearGradient>
          </defs>
        </svg>
      </S.RingWrapper>
    </S.Wrapper>
  )
}

export default CardRing
