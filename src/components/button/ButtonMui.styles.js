import MuiButton from '@mui/material/Button'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { color } from '@styles/values/color'

const getSizeWidth = size => {
  switch (size) {
    case 'full':
      return '100%'

    case 'lg':
      return '200px'

    case 'sm':
      return '80px'

    default:
      return '100%'
  }
}

const BasicButton = styled(MuiButton)`
  min-width: ${({ size }) => getSizeWidth(size)};
  height: ${({ size }) => (size === 'sm' ? '32px' : '44px')};
  padding: 0 12px;
  font-size: ${({ size }) => (size === 'sm' ? '12px' : '14px')};
  &.Mui-disabled {
    opacity: 0.8;
    background: #e7eae7;
  }
`

export const Primary = styled(BasicButton)`
  ${({ bg }) =>
    bg
      ? css`
          background-color: ${color.primary.purple[300]};
          &:hover {
            background-color: ${color.primary.purple[400]};
          }
        `
      : css`
          background-color: ${color.primary.purple[300]};
          &:hover {
            background-color: ${color.primary.purple[400]};
          }
        `}

  color: white;
`

export const Secondary = styled(BasicButton)`
  background-color: ${color.grayscale.white};
  &:hover {
    background-color: ${color.grayscale.white};
  }
  color: ${color.primary.purple[300]};
`

export const Outline = styled(BasicButton)`
  ${({ borderColor }) =>
    borderColor
      ? css`
          border: 1px solid ${borderColor};
          &:hover {
            border: 1px solid ${borderColor};
          }
        `
      : css`
          border: 1px solid ${color.primary};
          &:hover {
            border: 1px solid ${color.primary_hover};
          }
        `}

  color: ${color.primary.purple[300]};
  background: #666666;
`

export const TextButton = styled(BasicButton)`
  ${({ textColor }) =>
    textColor
      ? css`
          color: ${textColor};
          &:hover {
            color: ${color.bgc.hover};
          }
        `
      : css`
          color: ${color.primary};
        `}
`
