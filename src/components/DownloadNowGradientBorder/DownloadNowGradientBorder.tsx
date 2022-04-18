import React from 'react'

import * as S from './DownloadNowGradientBorder.styles'

export type DownloadNowGradientBorderProps = {
  children: React.ReactNode
}

const DownloadNowGradientBorder = () => {
  return (
    <S.Wrapper>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 770 159">
        <rect
          x="2.5"
          y="2.5"
          width="765"
          height="154"
          rx="17.5"
          stroke="url(#a)"
          strokeWidth="5"
        />
        <defs>
          <linearGradient
            id="a"
            x1="385"
            y1="-96.862"
            x2="385"
            y2="172.25"
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
    </S.Wrapper>
  )
}

export default DownloadNowGradientBorder
