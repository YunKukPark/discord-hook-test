// TODO: style-guide 나오면 const 작업 할 것
export const color = {
  blue: '#06f',
  red: '#ff4747',
  black: '#000',
  white: '#fff',
};

export const fontsize = {
  sm: 12,
  md: 16,
  lg: 24,
};

const theme = {
  ...color,
  ...fontsize,
};

export default theme;
