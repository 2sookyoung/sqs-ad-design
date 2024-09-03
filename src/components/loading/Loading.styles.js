import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { SpinnerIcon } from '@components/icon/common/Loading'
export const spin = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg)}
`

export const SpinItem = styled.svg`
  height: ${({ size }) => (size === 'sm' ? '16px' : '20px')};
  width: ${({ size }) => (size === 'sm' ? '16px' : '20px')};
  border-radius: 100%;
  animation: ${spin} 1s linear infinite;

  > circle {
    opacity: 0.25;
  }
  > path {
    opacity: 0.75;
  }
  > div {
    background-color: wheat;
    width: 4px;
    height: 4px;
  }
`

export const Spinner = styled(SpinnerIcon)`
  /* position: absolute; */
  width: fit-content;
  height: 50%;
  animation: ${spin} 1s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 50%;
  > circle {
    opacity: 0.25;
  }
  > path {
    opacity: 0.75;
  }
`
