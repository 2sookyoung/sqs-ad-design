import React from 'react'
import * as SC from './Select.styles'
import { ArrowDropdownIcon } from '@components/icon/common/Arrow'
import { MenuItem, ThemeProvider } from '@mui/material'
const SuffixSelect = ({ value, selectValue, inputValue, setValue, clearErrors }) => {
  return (
    <ThemeProvider theme={SC.selectTheme}>
      <SC.SuffixSelectContainer>
        <SC.SuffixSelectBox
          defaultValue={value}
          value={value}
          onChange={e => {
            setValue(selectValue, e.target.value, { shouldDirty: true })
            setValue(inputValue, null, { shouldDirty: true })
            clearErrors()
          }}
          status={'false'}
          IconComponent={ArrowDropdownIcon}
        >
          {[
            { value: 'percent', label: '%' },
            { value: 'price', label: '원' },
          ].map(el => (
            <MenuItem key={el.value} value={el.value} disabled={el.disabled}>
              {el.label}
            </MenuItem>
          ))}
        </SC.SuffixSelectBox>
      </SC.SuffixSelectContainer>
    </ThemeProvider>
  )
}

export default SuffixSelect
