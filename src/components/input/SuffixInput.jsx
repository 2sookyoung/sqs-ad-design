import { Controller } from 'react-hook-form'
import { ErrorTipIcon } from '@components/icon/common/Error'
import * as SC from './Input.styles'

const SuffixInput = ({
  control,
  name,
  rules,
  placeholder,
  readOnly = false,
  disabled,
  onChange,
  onBlur,
  warningMsg,

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
        <>
          <SC.SuffixInputBox
            textAlign={'right'}
            readOnly={readOnly}
            disabled={disabled}
            type="text"
            {...field}
            value={formatNumber(field.value)}
            onChange={e =>
              field.onChange(onChange ? onChange(parseNumber(e.target.value)) : parseNumber(e.target.value))
            }
            onBlur={e => field.onBlur(onBlur ? onBlur(parseNumber(e.target.value)) : parseNumber(e.target.value))}
            error={fieldState.error}
            placeholder={placeholder}
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
        </>
      )}
    />
  )
}

export default SuffixInput
