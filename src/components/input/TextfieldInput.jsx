import React from 'react'
import PropTypes from 'prop-types'
import * as SC from './TextfieldInput.styles'

import { FormControl, ThemeProvider } from '@mui/material'
import { Controller } from 'react-hook-form'
import { getNameRule, getTextRule, getSiteUrlRule } from '@utils/stringRule'
import { SearchIcon } from '@components/icon/common/Search'

const TextfieldInput = ({
  type = 'noRule',
  name,
  control,
  min,
  max,
  width,
  containerStyle,
  readOnly = false,
  rule,
  isSearch = false,
  onBlur,
  onChange,
  useTextLength = false,
  errorFocus,
  prefix = '',
  desc,
  required = false,
  label = '레이블 필수',
  placeholder,
  ...rest
}) => {
  const getRule = type => {
    switch (type) {
      // case 'email':
      //   return rule ? { ...getEmailRule(required), ...rule } : getEmailRule(required)
      // case 'phone':
      //   return rule ? { ...getPhoneRule(required), ...rule } : getPhoneRule(required)
      // case 'telePhone':
      //   return rule ? { ...getTelePhoneRule(required), ...rule } : getTelePhoneRule(required)
      // case 'businessNumber':
      //   return rule ? { ...getBusinessNumberRule(required), ...rule } : getBusinessNumberRule(required)
      case 'name':
        return rule ? { ...getNameRule(required), ...rule } : getNameRule(required)
      case 'url':
        return rule ? { ...getSiteUrlRule(required), ...rule } : getSiteUrlRule(required)
      case 'text':
        return rule ? { ...getTextRule(required), ...rule } : getTextRule(required)
      default:
        return
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
    <ThemeProvider theme={SC.textFieldTheme}>
      {control && (
        <Controller
          control={control}
          name={name}
          rules={getRule(type)}
          render={({ field, fieldState, value }) => {
            return (
              <form autoComplete="off">
                <FormControl error={!!fieldState.error?.message} sx={{ width: width ? `${width}px` : '100%' }}>
                  <SC.TextFieldContainer
                    style={containerStyle}
                    placeholder={placeholder}
                    id="filled-basic"
                    label={label}
                    variant="filled"
                    size="small"
                    required={required}
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
                    error={fieldState?.error || errorFocus}
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
                  {useTextLength && max && (
                    <SC.InputCount>
                      {String(field.value || '').length?.toLocaleString()} / {max.toLocaleString()}
                    </SC.InputCount>
                  )}

                  {isSearch && <SearchIcon style={{ position: 'absolute', top: '14px', right: '14px' }} />}
                </FormControl>
              </form>
            )
          }}
        />
      )}
    </ThemeProvider>
  )
}
TextfieldInput.propTypes = {
  /**
   * 인풋 타입에 따라 Rule 변경
   */
  type: PropTypes.noRule | PropTypes.name | PropTypes.url | PropTypes.text,
  /**
   * 검색아이콘 표시여부
   */
  isSearch: PropTypes.boolean,
  /**
   * 필수입력 표시여부
   */
  required: PropTypes.boolean,
  /**
   * 텍스트 카운트 표시여부
   */
  useTextLength: PropTypes.boolean,
  /**
   * 인풋 라벨에 들어갈 텍스트
   */
  label: PropTypes.string,
  /**
   * 인풋 플레이스홀더에 들어갈 텍스트
   */
  placeholder: PropTypes.string,
  /**
   * 최대글자수
   */
  max: PropTypes.number,
}

TextfieldInput.defaultProps = {
  type: 'noRule',
  required: false,
  isSearch: false,
  useTextLength: false,
  label: '레이블 필수',
  placeholder: '',
  max: '',
}

export default TextfieldInput
