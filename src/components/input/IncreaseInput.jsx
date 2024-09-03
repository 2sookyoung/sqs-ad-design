import { Controller } from 'react-hook-form'
import { ThemeProvider, createTheme } from '@mui/material'

import { color } from '@styles/values/color'
import * as SC from './Input.styles'
import { MinusInputIcon, PlusInputIcon } from '@components/icon/common/Calculate'

const theme = createTheme({
  palette: {
    primary: {
      main: color.grayscale.gray[200],
    },
    error: {
      main: color.system.error.red[300],
    },
  },
})

const IncreaseInput = ({
  control,
  name,
  rules,
  placeholder,
  readOnly = false,
  value,
  onChange,
  onBlur,
  warningMsg,
  plusAction,
  minusAction,
  ...props
}) => {
  const blurParse = value => {
    if (isNaN(value.replace(/,/g, ''))) {
      return value
    } else {
      return Number(value.replace(/,/g, ''))
    }
  }
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => {
        return (
          <SC.InputContainer>
            <ThemeProvider theme={theme}>
              <SC.MinusButton
                variant="outlined"
                color={fieldState.error?.message ? 'error' : 'primary'}
                onClick={minusAction}
                readOnly={readOnly}
              >
                <MinusInputIcon />
              </SC.MinusButton>
              <SC.PlusButton
                variant="outlined"
                color={fieldState.error?.message ? 'error' : 'primary'}
                onClick={plusAction}
                readOnly={readOnly}
              >
                <PlusInputIcon />
              </SC.PlusButton>
            </ThemeProvider>

            <SC.InputBox
              textAlign={'center'}
              readOnly={readOnly}
              type="text"
              {...field}
              value={
                isNaN(field.value)
                  ? field.value
                  : field.value === ''
                    ? field.value
                    : Number(field.value).toLocaleString()
              }
              onChange={e => field.onChange(e.target.value.replace(/[^0-9-]/g, ''))}
              onBlur={e => field.onChange(blurParse(e.target.value))}
              error={fieldState.error}
              placeholder={placeholder}
              {...props}
            />
            {fieldState.error?.message && (
              <SC.ErrorMessage customLocation={props.customLocation}>{fieldState.error?.message}</SC.ErrorMessage>
            )}
            {warningMsg && <SC.WarningMessage>{warningMsg}</SC.WarningMessage>}
          </SC.InputContainer>
        )
      }}
    />
  )
}

export default IncreaseInput
