import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { color } from '@styles/values/color'
import { typo } from '@styles/values/typography'
import { FlexRow } from '@styles/global/Flex.styles'

const commonMessage = css`
  bottom: -20px;
  left: 0;
  right: ${({ position }) => position && '0'};
  display: flex;
  align-items: center;
  gap: 4px;
  width: max-content;
  ${({ customLocation }) => customLocation && customLocation}
  ${typo.sub[12]}
`

export const TextareaContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  border-radius: 4px;
  width: 100%;
  height: 100%;

  padding: ${({ useTextLength }) => (useTextLength ? '10px 5px 0 0px' : '10px 5px 10px 0px')};
  border: 1px solid ${color.border.default};
  border: ${({ error }) => error && `1px solid ${color.system.error.red[300]}`};

  &:active,
  &:focus,
  &:focus-within {
    outline: none;
    border: ${({ error }) =>
      error ? `1px solid ${color.system.error.red[300]}` : `1px solid ${color.primary.purple[300]}`};
  }
`
export const TextareaBox = styled.textarea`
  border: unset;
  box-sizing: border-box;
  resize: none;
  line-height: 18px;
  min-height: ${({ useTextLength }) => (useTextLength ? '56px' : '70px')};
  padding: 0px 10px 0;
  padding-right: 5px;
  border-radius: 4px;

  ${({ readOnly }) =>
    readOnly &&
    `
    width: 100%;
    border-color:${color.grayscale.gray[200]};
    background-color: ${color.grayscale.gray[100]};
    color: ${color.grayscale.gray[800]};
    &:active,
    &:focus {
      outline: none;
      border: 1px solid ${color.border.default}
    }
    
  `}

  ::placeholder {
    color: ${color.grayscale.gray[400]};
  }
  &:active,
  &:focus,
  &:focus-visible {
    border: unset !important;
    outline: unset !important;
  }

  ${typo.sub[12]}

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${color.grayscale.gray[200]};
    border-radius: 1px;
  }
`

export const ErrorMessage = styled.span`
  position: absolute;
  ${commonMessage}
  color: ${color.system.error.red[300]};
`
export const DescMessage = styled.span`
  position: absolute;
  color: ${color.grayscale.gray[400]};
  ${commonMessage}
`

export const TextCountContainer = styled(FlexRow)`
  width: 100%;
  justify-content: flex-end;
  padding: 4px 0;
  span {
    ${typo.sub[11]}
    color: ${({ error }) => (error ? color.system.error.red[300] : '#CCCCCC')};
  }
`
