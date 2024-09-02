import { color } from '@styles/values/color'
import { typo } from '@styles/values/typography'
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { FlexColumn, FlexRow } from '@styles/global/Flex.styles'

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`

export const Prefix = styled.div`
  position: absolute;
  top: 25%;
  left: 2%;
  color: ${color.grayscale.gray[400]};
  ${typo.sub[12]}
`

export const SuffixInputContainer = styled.div`
  display: flex;
  position: relative;
  width: ${({ customWidth }) => customWidth || '100%'};

  flex-direction: row;
`

export const ContentsBox = styled.textarea`
  height: 150px;
  padding: 10px 10px 22px;
  border-radius: 4px;
  border: 1px solid ${color.border.default};
  box-sizing: border-box;
  border: ${({ error }) => error && `1px solid ${color.system.error.red[300]}`};
  resize: none;
  line-height: 18px;
  &:active,
  &:focus {
    outline: none;
    border: ${({ error }) =>
      error ? `1px solid ${color.system.error.red[300]}` : `1px solid ${color.primary.purple[300]}`};
  }

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

  ${typo.sub[12]}
`

export const InputBox = styled.input`
  font-family: 'Pretendard';
  height: 30px;
  padding: 0 10px;
  padding-right: ${({ suffix }) => suffix === 'true' && '25px'};
  padding-right: ${({ useTextLength }) => useTextLength === 'true' && '78px'};
  padding-right: ${({ isSearch }) => isSearch === 'true' && '30px'};
  border-radius: 4px;
  border: 1px solid ${color.border.default};
  box-sizing: border-box;
  text-align: ${({ textAlign }) => textAlign || 'left'};

  ${({ isSearch }) =>
    isSearch === 'true'
      ? `
    color: ${color.dark.color};
    background-color: ${color.dark.roundColor};
    border-color: ${color.dark.borderColor};
  `
      : `
    color: ${color.grayscale.gray[800]};
  `}

  border: ${({ error }) => error && `1px solid ${color.system.error.red[300]} !important`};

  &:active,
  &:focus {
    outline: none;
    border: ${({ error }) =>
      error ? `1px solid ${color.system.error.red[300]}` : `1px solid ${color.primary.purple[300]}`};
  }

  ::placeholder {
    color: ${color.grayscale.gray[400]};
  }

  ${({ readOnly, error }) =>
    readOnly &&
    `
    border-color:${error ? color.system.error.red[300] : color.grayscale.gray[200]};
    background-color: ${color.grayscale.gray[100]};
    color: ${color.grayscale.gray[400]};
    &:active,
    &:focus {
      outline: none;
      border: 1px solid;
      border-color:${error ? color.system.error.red[300] : color.grayscale.gray[200]};
    }
  `}

  ${typo.sub[12]}
`

export const SuffixInputBox = styled(InputBox)`
  width: 100%;
  padding-right: 90px;
  color: ${({ readOnly, disabled }) => readOnly || (disabled && color.grayscale.gray[400])};
`

export const MessageContainer = styled.div`
  height: ${({ line }) => (line === 2 ? '36px' : '18px')};
`
export const ErrorMessage = styled.span`
  position: absolute;
  bottom: -20px;
  right: ${({ position }) => position && '0'};
  ${({ customLocation }) => customLocation && customLocation};
  display: flex;
  align-items: center;
  gap: 3px;
  width: max-content;

  color: ${color.system.error.red[300]};
  svg {
    fill: ${color.system.error.red[300]};
  }
  ${typo.sub[12]}
`
export const DescMessage = styled.span`
  position: absolute;
  bottom: -20px;
  right: ${({ position }) => position && '0'};

  color: ${color.grayscale.gray[400]};
  ${typo.sub[12]}
`
export const SuccessMessage = styled.span`
  position: absolute;
  bottom: -20px;
  color: ${color.system.success.blue[300]};

  ${typo.sub[11]}
`

export const WarningMessage = styled.span`
  position: absolute;
  bottom: -20px;
  display: flex;
  align-items: center;
  gap: 4px;
  width: max-content;

  color: ${color.system.error.red[300]};

  ${typo.sub[12]}
`

export const NumberIcon = styled.span`
  position: absolute;
  top: -1px;
  left: ${({ isPositive }) => (isPositive === 'true' ? '4px' : '5px')};
  color: ${({ isPositive }) => (isPositive === 'true' ? color.system.error.red[300] : color.system.success.blue[300])};
`

export const MinusButton = styled(Button)`
  position: absolute;
  top: 1px;
  min-width: 0px;
  width: 34px;
  height: 29px;
  padding: 0px;
  border: none;
  border-right: 1px solid;
  border-radius: 0px;
  svg {
    fill: ${({ readOnly }) => (readOnly ? color.grayscale.gray[500] : color.grayscale.gray[300])};
  }

  :hover {
    border: none;
    border-right: 1px solid;
  }
  /* :active {
    background-color: ${color.grayscale.gray[200]};
    svg {
      fill: ${color.grayscale.gray[500]};
    }
  } */
`

export const PlusButton = styled(MinusButton)`
  right: 0px;
  border: none;
  border-left: 1px solid;
  :hover {
    border: none;
    border-left: 1px solid;
  }
`

export const Suffix = styled.span`
  position: absolute;
  top: ${({ top }) => top || '6px'};
  right: 9px;
  width: 12px;
  height: 22px;
  color: ${color.grayscale.gray[500]};
  ${typo.sub[12]};
`
export const InputCount = styled(Suffix)`
  width: fit-content;
  ${typo.sub[11]}
  color: #cccccc;
`
export const PwEyeIconContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 14px;
  cursor: pointer;
  svg {
    width: 16px;
    height: 16px;
  }
`

export const CopyInputContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  /* width: 425px; */
  input {
    cursor: ${({ disabled }) => (disabled ? 'default' : 'auto')} !important;
    background-color: ${({ disabled }) => disabled && color.grayscale.gray[100]} !important;
    color: ${({ disabled }) => disabled && color.grayscale.gray[400]} !important;
    &:active,
    &:focus {
      border: ${({ disabled }) => disabled && `1px solid ${color.border.default}`};
    }
  }

  input:read-only {
    background-color: white;
  }
`

export const CopyInputIconContainer = styled(FlexColumn)`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 30px;
  text-decoration: underline;
  margin-right: 10px;

  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-underline-offset: 2px;
  color: ${({ disabled }) => (disabled ? color.grayscale.gray[400] : color.grayscale.gray[700])};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`

export const UploadInputContainer = styled(FlexRow)`
  justify-content: flex-start;
  width: ${({ width }) => width || '100%'};
`

export const UploadInputBox = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 10px;
  border: 1px solid ${({ error }) => (error ? color.system.error.red[300] : color.border.default)};
  border-radius: 4px 0px 0px 4px;
  border-right: none;
  box-sizing: border-box;
  text-align: left;
  color: ${color.grayscale.gray[500]};

  &:active,
  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${color.grayscale.gray[400]};
  }
`

export const UploadIconContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  width: 109px;
  height: 30px;
  border-radius: 0px 4px 4px 0px;
  border: 1px solid ${({ error }) => (error ? color.system.error.red[300] : color.border.default)};

  cursor: pointer;

  :hover {
    background-color: ${color.grayscale.gray[200]};
  }
`

//sortable
export const OptionInput = styled(InputBox)`
  width: 100%;
  border-radius: ${({ hasOption }) => (hasOption ? '4px 4px 0px 0px' : '4px')};
`

export const TagDefaultContainer = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  padding: 4px;
  border: 1px solid ${color.border.default};
  border-top: none;
  border-radius: 0px 0px 4px 4px;
  background-color: white;
  padding-right: 60px;
`

export const TagViewContainer = styled(TagDefaultContainer)`
  z-index: 99;
  height: auto;
  max-height: 250px;
  overflow: auto;
`

export const TagSummaryContainer = styled(TagDefaultContainer)`
  z-index: 90;
  height: 33px;
  overflow: hidden;
`
export const TempText = styled.span`
  padding: 6px;
  color: ${color.grayscale.gray[700]};
  ${typo.sub[11]}
`

export const TempText2 = styled.div`
  position: absolute;
  top: 0px;
  bottom: 1px;
  right: -45px;
  width: 70px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: right;

  span {
    ${typo.sub[11]}
    color: ${color.grayscale.gray[700]};
    font-weight: 700;
  }
`

export const Tag = styled.span`
  position: relative;
  display: inline-block;
  padding: 1px 22px 1px 6px;
  margin-right: 5px !important;
  border-radius: 4px;
  background-color: ${color.grayscale.gray[100]};
  color: ${color.grayscale.gray[700]};
  cursor: pointer;

  ${typo.sub[11]}

  svg {
    position: absolute;
    top: 20%;
    right: 6px;
  }
`

export const TagInput = styled(InputBox)`
  width: 100%;
  border-bottom: none;

  &:active,
  &:focus {
    outline: none;
  }
`
