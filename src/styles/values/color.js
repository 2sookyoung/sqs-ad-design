const colorPalette = {
  purple: {
    500: '#6F00E0',
    400: '#8227DF',
    300: '#9D42FB',
    200: '#B670FF',
    150: '#DBB7FF',
    100: '#EDDBFF',
    '000': '#F7F0FF',
  },
  green: {
    500: '#09AE8D',
    400: '#00CC99',
    300: '#76DAB6',
    200: '#99E9CA',
    100: '#DFF6ED',
  },
  gray: {
    800: '#000000', //기존 232323에서 변경
    700: '#5D5D5F',
    600: '#666666',
    500: '#959595',
    400: '#B2B2B2',
    300: '#D5D5D7',
    200: '#E4E4E4',
    150: '#EFEEF6',
    100: '#F4F4F6',
    '000': '#EDEDF1', //dashboard renewal color
  },
  red: {
    500: '#FF1751',
    400: '#E91D50',
    300: '#FF3366',
    200: '#FFC1D0',
    150: '#FFE2E9',
    100: '#FFE5EB',
    '000': '#FFF5F7',
  },
  white: '#FFFFFF',
  yellow: {
    300: '#FF9E11',
    200: '#FFC672',
    100: '#FFF6DF',
  },
  blue: {
    400: '#0593F9',
    300: '#1598F8',
    200: '#51B6FF',
    100: '#E2F0FC',
  },
};

export const color = {
  primary: {
    purple: colorPalette.purple,
  },
  sub: {
    green: colorPalette.green,
  },
  grayscale: {
    gray: colorPalette.gray,
    white: colorPalette.white,
  },
  system: {
    error: {
      red: colorPalette.red,
    },
    warning: {
      yellow: colorPalette.yellow,
    },
    success: {
      blue: colorPalette.blue,
    },
  },
  text: {
    default: colorPalette.gray[800],
    light: colorPalette.gray[700],
    sub: colorPalette.gray[600],
  },
  border: {
    default: colorPalette.gray[200],
  },
  dark: {
    backgroundColor: '#232323',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    color: '#f4f4f7',
    roundColor: '#343434',
    iconColor: '#d5d5d7',
  },
};
