import React from 'react'
import { Controller } from 'react-hook-form'
import { getTextRule } from '@utils/stringRule'
import { FlexColumn } from '@styles/global/Flex.styles'
import { color } from '@styles/values/color'
import * as SC from './Textarea.styles'
import * as TextSC from '@components/typography/Typography.styles'

const Textarea = ({
  type = 'text',
  control,
  name,
  placeholder,
  required,
  min,
  max,
  readOnly = false,
  rule,
  onBlur,
  onChange,
  useTextLength = true,
  errorFocus,
  desc,
  ...rest
}) => {
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
      rules={getTextRule(required, min, max)}
      render={({ field, fieldState }) => {
        return (
          <FlexColumn gap={'6px'} align={'flex-start'} style={{ width: '100%', position: 'relative' }}>
            <SC.TextareaContainer error={fieldState.error || errorFocus} useTextLength={useTextLength}>
              <SC.TextareaBox
                useTextLength={useTextLength}
                readOnly={readOnly}
                onChange={e =>
                  onChange
                    ? field.onChange(onChange(e.target.value))
                    : field.onChange(getChangeValue(type, e.target.value))
                }
                onBlur={e => field.onBlur(getChangeValue(type, e.target.value))}
                value={field.value}
                placeholder={placeholder}
                maxLength={max}
                required={required}
                error={fieldState.error || errorFocus}
                {...rest}
                {...field}
              />
              {useTextLength && max && (
                <SC.TextCountContainer error={fieldState.error || errorFocus}>
                  <TextSC.Sub12 customColor={color.grayscale.gray[400]}>
                    {String(field.value || '').length?.toLocaleString()} / {max.toLocaleString()}
                  </TextSC.Sub12>
                </SC.TextCountContainer>
              )}
            </SC.TextareaContainer>
            {fieldState.error?.message && <SC.ErrorMessage>{fieldState.error?.message}</SC.ErrorMessage>}
            {!fieldState.error?.message && desc && <SC.DescMessage>{desc}</SC.DescMessage>}
          </FlexColumn>
        )
      }}
    />
  )
}

export default Textarea
