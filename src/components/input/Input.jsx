import { Controller } from 'react-hook-form'
import * as SC from './Input.styles'
import {
  getBusinessNumberRule,
  getEmailRule,
  getNameRule,
  getPhoneRule,
  getTelePhoneRule,
  getTextRule,
  getSiteUrlRule,
} from '@utils/stringRule'
import { SearchIcon } from '@components/icon/common/Search'
import { color } from '@styles/values/color'
import PropTypes from 'prop-types'

const Input = ({
  type = 'text',
  control,
  name,
  placeholder,
  required,
  min,
  max,
  readOnly = false,
  rule,
  warningMsg,
  containerStyle,
  isSearch = false,
  useErrorIcon = true,
  onBlur,
  onChange,
  useTextLength = false,
  errorFocus,
  prefix = '',
  suffix,
  desc,

  ...rest
}) => {
  const getRule = type => {
    switch (type) {
      case 'email':
        return rule ? { ...getEmailRule(required), ...rule } : getEmailRule(required)
      case 'phone':
        return rule ? { ...getPhoneRule(required), ...rule } : getPhoneRule(required)
      case 'telePhone':
        return rule ? { ...getTelePhoneRule(required), ...rule } : getTelePhoneRule(required)
      case 'businessNumber':
        return rule ? { ...getBusinessNumberRule(required), ...rule } : getBusinessNumberRule(required)
      case 'name':
        return rule ? { ...getNameRule(required), ...rule } : getNameRule(required)
      case 'url':
        return rule ? { ...getSiteUrlRule(required), ...rule } : getSiteUrlRule(required)
      default:
        return rule ? { ...getTextRule(required, min, max), ...rule } : getTextRule(required, min, max)
    }
  }

  const getChangeValue = (type, value) => {
    if (type === 'phone' || type === 'telePhone' || type === 'number') return getChangePhone(value)
    if (type === 'bankAccount') return keepNumbersAndHyphens(value)
    if (max) return getMaxLengthValue(value)
    return value
  }

  const getChangePhone = value => value.replaceAll(/[^\d()-]/g, '')
  const keepNumbersAndHyphens = value => value.replaceAll(/[^\d-]/g, '')
  const getMaxLengthValue = value => (value.length > max ? value.slice(0, max) : value)

  return (
    <Controller
      control={control}
      name={name}
      rules={getRule(type)}
      render={({ field, fieldState }) => {
        return (
          <SC.InputContainer style={containerStyle}>
            {prefix && <SC.Prefix>{prefix}</SC.Prefix>}
            <SC.InputBox
              readOnly={readOnly}
              type={type === 'password' ? 'password' : 'text'}
              {...field}
              onChange={e =>
                onChange
                  ? field.onChange(onChange(e.target.value))
                  : field.onChange(getChangeValue(type, e.target.value))
              }
              onBlur={e =>
                onBlur ? field.onBlur(onBlur(e.target.value)) : field.onBlur(getChangeValue(type, e.target.value))
              }
              value={field.value}
              error={fieldState.error || errorFocus}
              placeholder={placeholder}
              maxLength={max}
              isSearch={String(isSearch)}
              prefix={prefix !== ''}
              useTextLength={useTextLength && max ? 'true' : 'false'}
              {...rest}
            />
            {fieldState.error?.message && (
              <SC.ErrorMessage className="error-message">{fieldState.error?.message}</SC.ErrorMessage>
            )}
            {!fieldState.error?.message && desc && (
              <SC.DescMessage color={color.grayscale.gray[400]}>{desc}</SC.DescMessage>
            )}
            {warningMsg && <SC.WarningMessage>{warningMsg}</SC.WarningMessage>}
            {useTextLength && max && (
              <SC.InputCount>
                {String(field.value || '').length?.toLocaleString()} / {max.toLocaleString()}
              </SC.InputCount>
            )}

            {isSearch && <SearchIcon style={{ position: 'absolute', top: '3px', right: '7px' }} />}
          </SC.InputContainer>
        )
      }}
    />
  )
}
Input.propTypes = {
  /**
   * 필수입력 표시여부
   */
  required: PropTypes.boolean,
  /**
   * 인풋 플레이스홀더에 들어갈 텍스트
   */
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  required: false,
  placeholder: '사업자등록번호를 입력하세요. (ex: 100-23-45678)',
}

export default Input
