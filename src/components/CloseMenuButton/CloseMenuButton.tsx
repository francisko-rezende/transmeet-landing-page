import React from 'react'

import * as S from './CloseMenuButton.styles'

export type CloseMenuButtonProps = {
  width?: string
  height?: string
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement> & {
      target: HTMLButtonElement
    }
  ) => void
}

const CloseMenuButton = ({
  width = '17px',
  height = '17px',
  onClick
}: CloseMenuButtonProps) => {
  return (
    <S.Button
      width={width}
      height={height}
      onClick={onClick}
      aria-label={'Fechar menu'}
    >
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.916 17.152 1.136 3.37C.687 2.923.582 2.303.901 1.985l.575-.576c.318-.318.938-.213 1.386.234l13.78 13.781c.448.448.554 1.07.236 1.387l-.575.576c-.319.318-.94.212-1.388-.235Z"
          fill="#fff"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.866 17.152 16.646 3.37c.448-.448.552-1.068.234-1.386l-.575-.576c-.318-.318-.938-.213-1.386.234L1.14 15.424c-.448.448-.554 1.07-.236 1.387l.575.576c.318.318.94.212 1.388-.235Z"
          fill="#fff"
        />
      </svg>
    </S.Button>
  )
}

export default CloseMenuButton
