import { TextField } from '@mui/material'
import React from 'react'
import * as SC from './TextfieldInput.styles'
import { FormControl, ThemeProvider } from '@mui/material'
import { Controller } from 'react-hook-form'
import {
  getBusinessNumberRule,
  getEmailRule,
  getNameRule,
  getPhoneRule,
  getTelePhoneRule,
  getTextRule,
  getSiteUrlRule,
} from '@utils/stringRule'

// const TextFieldContainer = styled(TextField)({
//   '& label.Mui-focused': {
//     color: '#1c1f25',
//   },
//   '& .MuiInput-underline:after': {
//     borderColor: '#B2BAC2',
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: '#E0E3E7',
//     },
//     '&:hover fieldset': {
//       borderColor: '#B2BAC2',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: '#6F7E8C',
//     },
//   },

//   '& .MuiFilledInput-root': {
//     borderRadius: 4,
//     border: '1px solid',
//     borderColor: '#E0E3E7',
//     backgroundColor: '#ffffff',
//     '&:before': {
//       borderBottom: 'none',
//     },
//     '&:after': {
//       borderBottom: 'none',
//     },
//     '&:hover': {
//       borderBottom: '1px solid #E0E3E7',
//       backgroundColor: '#ffffff',
//       '&:before': {
//         borderBottom: 'none',
//       },
//     },
//     '&.Mui-focused': {
//       backgroundColor: '#ffffff', // 포커스 시에도 백그라운드를 흰색으로 유지
//     },
//     '&.Mui-focused': {
//       border: '1px solid #6F7E8C',
//     },
//   },
// })

const TextfieldInput = ({
  type = 'text',
  name,
  control,
  min,
  max,
  width,
  readOnly = false,
  rule,
  isSearch = false,
  onBlur,
  onChange,
  useTextLength = false,
  errorFocus,
  prefix = '',
  required = false,
  label = '레이블 필수',
  placeholder,
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
    <ThemeProvider theme={SC.textFieldTheme}>
      {control && (
        <Controller
          control={control}
          name={name}
          rules={getRule(type)}
          render={({ field, fieldState, value }) => (
            <form autoComplete="off">
              <FormControl error={!!fieldState.error?.message} sx={{ width: width ? `${width}px` : '100%' }}>
                <TextField
                  placeholder={placeholder}
                  id="filled-basic"
                  label={label}
                  variant="filled"
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
                  error={fieldState.error || errorFocus}
                  maxLength={max}
                  isSearch={String(isSearch)}
                  prefix={prefix !== ''}
                  useTextLength={useTextLength && max ? 'true' : 'false'}
                  {...rest}
                />
              </FormControl>
            </form>
          )}
        />
      )}
    </ThemeProvider>
  )
}

TextfieldInput.defaultProps = {
  type: 'text',
  required: false,
  placeholder: '사업자등록번호를 입력하세요. (ex: 100-23-45678)',
}

export default TextfieldInput
