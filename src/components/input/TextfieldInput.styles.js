import { createTheme } from '@mui/material'
import { color } from '@styles/values/color'

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
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-error': {
            color: color.system.error.red[300],
          },
        },
      },
    },
  },
})
