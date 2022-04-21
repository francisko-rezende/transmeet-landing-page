import React from 'react'

import Link from 'next/link'

import * as S from './HollowButtonLink.styles'

export type HollowButtonLinkProps = {
  href: string
  label: string
  color: 'blue' | 'pink'
}

const HollowButtonLink = ({ href, label, color }: HollowButtonLinkProps) => {
  return (
    <Link href={href} passHref>
      <S.Link color={color}>{label}</S.Link>
    </Link>
  )
}

export default HollowButtonLink
