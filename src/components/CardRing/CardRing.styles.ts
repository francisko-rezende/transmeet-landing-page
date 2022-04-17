import styled, { css } from 'styled-components'

import { CardRingProps } from './CardRing'

type StyledRingWrapperProps = Pick<CardRingProps, 'ringType'>

const ringTypes = {
  blueRight: () => css`
    transform: unset;
  `,
  blueBottom: () => css`
    transform: rotate(90deg);
  `,
  blueLeft: () => css`
    transform: rotate(180deg);
  `,
  blueTop: () => css`
    transform: rotate(270deg);
  `
}

export const Wrapper = styled.div`
  position: relative;
  /* margin-top: 22px; */
`

export const RingWrapper = styled.div<StyledRingWrapperProps>`
  width: 62px;
  height: 62px;
  transform: unset;
  position: absolute;
  top: 0;

  ${({ ringType }) => css`
    ${!!ringType && ringTypes[ringType]}
  `}
`
export const StepNumber = styled.h3`
  font-size: 4rem;
  width: 62px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    color: ${theme.colors.primaryColor.primary};
  `}
`
