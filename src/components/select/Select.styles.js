import styled from '@emotion/styled'
import { createTheme } from '@mui/material'
import MuiSelect from '@mui/material/Select'
import { FlexRow } from '@styles/global/Flex.styles'
import { color } from '@styles/values/color'
import { typo } from '@styles/values/typography'

export const selectTheme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: ({}) => ({
          padding: 10,
          marginTop: 10,
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: '0px 1px 11px 0px #d5d5d78a',
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            border: `1px solid ${color.border.default} `,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: `1px solid ${color.border.default}`,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: `1px solid ${color.primary.purple[300]} `,
            borderWidth: '1px ',
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            border: `1px solid ${color.system.error.red[300]} !important`,
            borderWidth: '1px ',
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: ({}) => ({
          minWidth: 100,
          maxHeight: 366,
          overflowY: 'auto',
          '& li': {
            marginBottom: 5,
            borderRadius: 4,
            fontSize: 12,
          },
          '& li:hover': {
            background: `${color.grayscale.gray[100]} !important`,
          },
          '& li.Mui-selected': {
            color: 'white',
            background: color.primary.purple[300],
          },
          '& li.Mui-selected:hover': {
            background: `${color.primary.purple[300]} !important`,
          },
          '& li.Mui-disabled': {
            background: 'transparent',
          },
          '& li.Mui-focusVisible': {
            backgroundColor: 'transparent',
          },
        }),
      },
    },
  },
  palette: {
    primary: {
      main: color.primary.purple[300],
    },
    error: {
      main: color.system.error.red[300],
    },
  },
})

export const SelectContainer = styled.div`
  position: relative;
  .Mui-disabled .MuiOutlinedInput-notchedOutline {
    border-color: ${color.grayscale.gray[200]} !important;

    span {
      color: red !important;
    }
  }
`

export const SuffixSelectContainer = styled(SelectContainer)`
  position: absolute;
  top: 1px;
  right: 1px;
  width: 71px;
  border-left: 1px solid;
  border-color: ${color.grayscale.gray[200]};
`

export const SelectBox = styled(MuiSelect)`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: 30px;
  background-color: ${({ disabled }) => (disabled ? color.grayscale.gray[100] : '#fff')};
  font-family: unset;
  ${({ type }) => (type === 'top' ? typo.body[14] : typo.sub[12])}

  svg {
    position: absolute;
    top: ${({ type }) => (type === 'top' ? 'unset' : '12px')};
    right: 10px;
    fill: ${color.grayscale.gray[300]};
  }

  .MuiSelect-iconOpen {
    fill: ${({ status, error }) =>
      error ? color.system.error.red[300] : status === 'false' ? color.primary.purple[300] : '#D5D5D7'};
  }

  .MuiInputBase-input {
    width: ${({ width }) => (width ? `${width - 20}px` : '96%')};
    padding: 0px;
    padding-left: 10px;
    padding-right: 0px !important;
  }

  legend {
    font-size: 12px;
    overflow: unset;
    color: red !important;
    opacity: 1;
  }
`

export const SuffixSelectBox = styled(SelectBox)`
  height: 28px;

  fieldset {
    border: none !important;
  }

  :hover {
    fieldset {
      border: none !important;
    }
  }

  svg {
    position: absolute;
    top: 11px;
    right: 13px;
    fill: ${color.grayscale.gray[300]};
  }

  .MuiSelect-iconOpen {
    fill: ${color.grayscale.gray[300]};
  }
`
export const ComboBoxContainer = styled.div`
  position: relative;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: 30px;
  background-color: ${({ disabled }) => disabled && color.grayscale.gray[100]};
  font-family: unset;
  ${typo.body[12]};

  cursor: pointer;

  svg {
    position: absolute;
    top: ${({ top }) => top};
    right: ${({ right }) => right};
    fill: ${({ focused }) => (focused ? color.primary.purple[300] : color.grayscale.gray[300])};
    transform: ${({ popupOpen }) => (popupOpen ? 'translateY(2px) rotate(180deg)' : 'translateY(2px)')};
  }
`

export const ComboListBox = styled.ul`
  position: absolute;
  z-index: 999;
  top: 30px;
  min-width: 200px;
  max-height: 200px;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  padding: 10px;
  margin-top: 10px;
  border-radius: 4px;
  background-color: white;
  font-family: unset;
  list-style: none;
  overflow-y: auto;
  box-shadow: 0px 1px 11px 0px #d5d5d78a;

  & li {
    padding: 6px 16px;
    margin-bottom: 5px;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;

    :hover {
      background-color: ${color.grayscale.gray[100]};
    }

    &[aria-selected='true'] {
      color: white !important;
      background-color: ${color.primary.purple[300]} !important;
    }

    &.Mui-focused,
    &.Mui-focusVisible {
      background-color: ${color.grayscale.gray[100]};
    }
  }

  .no-result {
    margin-bottom: 0px;
    color: ${color.grayscale.gray[400]};
    :hover {
      background-color: transparent !important;
    }
    &.Mui-focused,
    &.Mui-focusVisible {
      background-color: transparent !important;
    }
  }
`
export const DownloadOption = styled(FlexRow)`
  width: 100%;
  padding: 0 6px;
  height: 30px;
  gap: 7px;
  justify-content: flex-start;
`
