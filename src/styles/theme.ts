const colors = {
  black: '#2b2b2b',
  white: '#ffffff',
  grey: '#dcdcdc',
  lightGrey: '#eeeeee',
  salomon: '#fa897b',
  lightTeal: '#86e3c3',
  brownGrey: '#b4b4b4',
  veryLightPink: '#e3e3e3',
  slateGrey: '#707071',
  darkCream: '#ffdd94',
  aquaMarine: '#4fd5a7',
};

const theme = {
  colors,
};

export default theme;

export type ITheme = typeof theme;
export type ThemeColors = typeof colors;
