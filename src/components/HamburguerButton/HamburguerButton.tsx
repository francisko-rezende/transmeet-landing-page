import React from 'react'

import * as S from './HamburguerButton.styles'

export type HamburguerButtonProps = {
  width?: string
  height?: string
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement> & {
      target: HTMLButtonElement
    }
  ) => void
}

const HamburguerButton = ({
  width = '22px',
  height = '14px',
  onClick
}: HamburguerButtonProps) => {
  return (
    <S.Button
      aria-label="Abrir menu"
      width={width}
      height={height}
      onClick={onClick}
    >
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 14">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.634 13.804H1.145c-.633 0-1.145-.359-1.145-.802v-.804c0-.444.512-.803 1.145-.803h19.49c.632 0 1.147.36 1.147.803v.804c0 .443-.515.802-1.148.802Zm0-5.62H1.145C.512 8.184 0 7.824 0 7.381v-.802c0-.443.512-.803 1.145-.803h19.49c.632 0 1.147.36 1.147.803v.802c0 .444-.515.803-1.148.803Zm0-5.619H1.145C.512 2.565 0 2.205 0 1.762V.959C0 .516.512.157 1.145.157h19.49c.632 0 1.147.36 1.147.802v.803c0 .443-.515.803-1.148.803Z"
          fill="#fff"
        />
      </svg>
    </S.Button>
  )
}

export default HamburguerButton
