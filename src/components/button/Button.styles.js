import MuiButton from '@mui/material/Button'
import styled from '@emotion/styled'
import { color } from '@styles/values/color'
import { css } from '@emotion/react'
import { typo } from '@styles/values/typography'

const getColorByRole = role => {
  switch (role) {
    case 'primary':
      return css`
        background-color: ${color.primary.purple[300]};
        color: ${color.grayscale.white};
        &:hover,
        &:active {
          background-color: ${color.primary.purple[400]};
        }
        &:disabled {
          background-color: ${color.primary.purple[100]};
          path {
            fill: ${color.grayscale.white};
          }
        }
      `
    case 'secondary':
      return css`
        background-color: ${color.grayscale.white};
        border: 1px solid ${color.primary.purple[300]};
        color: ${color.primary.purple[300]};
        &:hover,
        &:active {
          background-color: ${color.grayscale.white};
          color: ${color.primary.purple[400]};
        }
        &:disabled {
          border: 1px solid ${color.primary.purple[100]};
          color: ${color.primary.purple[100]};
          path {
            fill: ${color.primary.purple[100]};
          }
        }
      `
    case 'tertiary':
      return css`
        background-color: ${color.primary.purple[100]};
        color: ${color.primary.purple[400]};
        &:hover,
        &:active {
          background-color: ${color.primary.purple[200]};
          color: ${color.grayscale.white};
        }
        &:disabled {
          background-color: ${color.primary.purple[100]};
          color: ${color.grayscale.white} !important;
          path {
            fill: ${color.grayscale.white};
          }
        }
      `
    case 'gray':
      return css`
        background-color: ${color.grayscale.gray[100]};
        color: ${color.grayscale.gray[700]};
        &:hover,
        &:active {
          background-color: ${color.grayscale.gray[300]};
        }
        &:disabled {
          background-color: ${color.grayscale.gray[100]};
          color: ${color.grayscale.gray[400]};
          path {
            fill: ${color.grayscale.white};
          }
        }
      `
    case 'error':
      return css`
        background-color: ${color.system.error.red[150]};
        color: ${color.system.error.red[300]};
        &:hover,
        &:active {
          background-color: ${color.system.error.red[300]};
          color: ${color.grayscale.white};
        }
        &:disabled {
          background-color: ${color.system.error.red[100]};
          color: ${color.grayscale.white};
          path {
            fill: ${color.grayscale.white};
          }
        }
      `
    case 'secondaryError':
      return css`
        background-color: ${color.system.error.red[100]};
        color: ${color.system.error.red[300]};
        &:hover,
        &:active {
          background-color: ${color.system.error.red[300]};
          color: ${color.grayscale.white};
        }
        &:disabled {
          background-color: ${color.system.error.red[100]};
          color: ${color.grayscale.white};
          path {
            fill: ${color.grayscale.white};
          }
        }
      `

    case 'secondaryGray':
      return css`
        color: ${color.grayscale.gray[700]};
        background-color: ${color.grayscale.white};
        border: 1px solid ${color.grayscale.gray[300]};
        &:hover {
          background-color: ${color.grayscale.gray[100]};
        }
        &:active {
          background-color: ${color.grayscale.gray[200]};
        }
        &:disabled {
          background-color: ${color.grayscale.white};
          color: ${color.grayscale.gray[300]};
        }
      `

    case 'text':
      return css`
        font-weight: 500 !important;
        color: ${color.grayscale.gray[700]};
        font-size: 12px !important;
        text-decoration: underline;
        text-underline-offset: 2px;

        min-width: fit-content !important;
        padding: 0 !important;
        &:hover,
        &:active {
          /* color: ${color.system.success.blue[300]}; */
          font-weight: 500 !important;
          color: ${color.grayscale.gray[700]};
          font-size: 12px !important;
          text-decoration: underline;
          text-underline-offset: 2px;
          background-color: unset !important;
        }

        &:disabled {
          /* color: ${color.system.success.blue[100]}; */
          color: ${color.grayscale.gray[500]};
        }
      `
  }
}

const getSize = (size = 'md') => {
  switch (size) {
    case 'lg':
      return css`
        min-width: 75px;
        height: 42px;
        padding: 0px 24px;
        border-radius: 6px;

        line-height: 20px;
        font-size: 15px;
        font-weight: 700;
      `
    case 'sm':
      return css`
        min-width: 42px;
        height: 26px;
        padding: 4px 9px;
        border-radius: 4px;
        ${typo.sub[12]}
      `
    case 'xs':
      return css`
        min-width: 42px;
        height: 24px;
        padding: 4px 2px;
        border-radius: 4px;
        ${typo.sub[12]}
      `
    case 'iconOnly':
      return css`
        width: 26px;
        min-width: 26px;
        min-height: auto;
        height: 26px;
        padding: unset;
        border-radius: 4px;
      `
    default:
      return css`
        min-width: 75px;
        height: 30px;
        padding: 0px 14px;
        border-radius: 4px;
        ${typo.sub[12]}
      `
  }
}

export const BasicButton = styled(MuiButton)`
  ${({ role }) => getColorByRole(role)};
  ${({ size }) => getSize(size)};

  width: ${({ customWidth }) => `${customWidth}px`};
  height: ${({ customHeight }) => `${customHeight}px`};
  background-color: ${({ customColor }) => customColor};
  color: ${({ customTextColor }) => customTextColor};
  font-size: ${({ customFont }) => customFont && `${customFont}px`};

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  text-transform: none;
  font-family: unset;

  cursor: pointer;
  transition: all 0.3s;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${({ customColor }) => customColor};
    color: ${({ customTextColor }) => customTextColor};
  }

  text-transform: none;
`
