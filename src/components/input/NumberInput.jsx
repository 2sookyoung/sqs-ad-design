import { Controller } from 'react-hook-form'
import * as SC from './Input.styles'
import { ErrorTipIcon } from '@components/icon/common/Error'

const NumberInput = ({
  control,
  name,
  rules,
  placeholder,
  readOnly = false,
  value,
  onChange,
  onBlur,
  warningMsg,
  suffix = '원',
  suffixTop,
  ...props
}) => {
  const formatNumber = value => {
    if (value === null || value === undefined || value === '' || Number.isNaN(value)) return ''
    const numberValue = Number(value)
    return numberValue.toLocaleString()
  }

  const parseNumber = value => {
    const numberValue = value.replace(/[^0-9]/g, '')
    if (numberValue === null || numberValue === undefined || numberValue === '' || Number.isNaN(numberValue)) return ''
    return Number(numberValue.replace(/,/g, ''))
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <SC.InputContainer>
          <SC.InputBox
            textAlign={'right'}
            readOnly={readOnly}
            type="text"
            {...field}
            value={formatNumber(field.value)}
            onChange={e =>
              field.onChange(onChange ? onChange(parseNumber(e.target.value)) : parseNumber(e.target.value))
            }
            onBlur={e => field.onBlur(onBlur ? onBlur(parseNumber(e.target.value)) : parseNumber(e.target.value))}
            error={fieldState.error}
            placeholder={placeholder}
            suffix={suffix ? 'true' : 'false'}
            {...props}
          />
          {fieldState.error?.message && (
            <SC.ErrorMessage customLocation={props.customLocation}>{fieldState.error?.message}</SC.ErrorMessage>
          )}
          {warningMsg && (
            <SC.WarningMessage>
              <ErrorTipIcon />
              {warningMsg}
            </SC.WarningMessage>
          )}
          <SC.Suffix top={suffixTop && suffixTop}>{suffix}</SC.Suffix>
        </SC.InputContainer>
      )}
    />
  )
}

export default NumberInput
