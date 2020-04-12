import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

const primary = '#3b5c66';
const primaryDark = '#0f323c';
const primarylight = '#678994';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: primaryDark,
    main: primary,
    light: primarylight,
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue['A400'],
    light: colors.blue['A400'],
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600],
  },
  background: {
    default: '#F4F6F8',
    paper: white,
  },
  cases: {
    confirmed: '#d63946',
    suspect: '#fec107',
    cured: '#2ba449',
    death: '#363a43',
    negative: colors.blue['A400'],
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
};
