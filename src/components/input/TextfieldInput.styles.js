import { createTheme, TextField } from '@mui/material'
import { color } from '@styles/values/color'
import styled from '@emotion/styled'
import { typo } from '@styles/values/typography'

export const textFieldTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: '#1c1f25',
            '&.Mui-error': {
              color: color.system.error.red[300],
            },
          },
          '& .MuiInput-underline:after': {
            borderColor: '#B2BAC2',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#E0E3E7',
            },
            '&:hover fieldset': {
              borderColor: '#B2BAC2',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6F7E8C',
            },
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          border: '1px solid',
          borderColor: '#E0E3E7',
          backgroundColor: '#ffffff',
          '&:before': {
            borderBottom: 'none',
          },
          '&:after': {
            borderBottom: 'none',
          },
          '&:hover': {
            borderBottom: '1px solid #E0E3E7',
            backgroundColor: '#ffffff',
            '&:before': {
              borderBottom: 'unset !important',
              // backgroundColor: '#ffffff',
            },
          },

          '&.Mui-focused': {
            border: '1px solid #6F7E8C',
            backgroundColor: '#ffffff',
          },
          '&.Mui-error': {
            border: `1px solid ${color.system.error.red[300]}`,
            color: `${color.system.error.red[300]} !important`,
            backgroundColor: '#ffffff',
          },
        },
      },
    },
    // MuiInputLabel: {
    //   styleOverrides: {
    //     root: {
    //       '&.Mui-error': {
    //         color: color.system.error.red[300],
    //       },
    //     },
    //   },
    // },
  },
})

export const TextFieldContainer = styled(TextField)`
  position: relative;
  .Mui-error {
    color: ${({ error }) => (error ? color.system.error.red[300] : 'blue')} !important;
  }
`

export const Suffix = styled.span`
  position: absolute;
  top: ${({ top }) => top || '16px'};
  right: 16px;
  width: 12px;
  height: 22px;
  color: ${color.grayscale.gray[500]};
  ${typo.sub[12]};
`
export const InputCount = styled(Suffix)`
  width: fit-content;
  ${typo.sub[12]};
  color: #cccccc;
`
export const ErrorMessage = styled.span`
  position: absolute;
  bottom: -20px;
  right: ${({ position }) => position && '0'};
  ${({ customLocation }) => customLocation && customLocation};
  display: flex;
  align-items: center;
  gap: 3px;
  width: max-content;

  color: ${color.system.error.red[300]};
  svg {
    fill: ${color.system.error.red[300]};
  }
  ${typo.sub[12]};
`
