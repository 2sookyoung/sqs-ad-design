import * as SC from './Input.styles'

const CopyInput = ({
  value,
  disabled = false, //전체인풋 disabled
  readOnly = true,
  placeholder,
  ...props
}) => {
  const handleCopyClick = text => {
    if (disabled || !text) return
    const textarea = document.createElement('textarea')

    textarea.value = text
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    alert('클립보드에 복사되었습니다.')
  }

  return (
    <SC.CopyInputContainer disabled={disabled} {...props}>
      <SC.SuffixInputBox type="text" value={value} readOnly={readOnly} placeholder={placeholder} />
      <SC.CopyInputIconContainer disabled={disabled} onClick={() => handleCopyClick(value || '')}>
        복사하기
      </SC.CopyInputIconContainer>
    </SC.CopyInputContainer>
  )
}

export default CopyInput
