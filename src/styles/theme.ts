import { DefaultTheme } from 'styled-components';

const breakpoints = {
  tablet: '768px',
  desktop: '1200px',
};

const fontFamily = {
  main: 'Noto Sans KR, sans-serif',
};

const color = {
  black: '#000',
  dark: '#191a20',
  primary: '#3f4150',
  secondary: '#8c8d96',
  tertiary: '#b2b3b9',
  border: '#e0e2e7',
  background: '#f7f8fa',
  white: '#fff',
  blue: '#3da5f5',
  blueDark: '#3186c4',
  blueLight: '#ecf6fe',
};

const fontsize = {
  xxs: '12px',
  xs: '13px',
  sm: '14px',
  base: '16px',
  md: '18px',
  lg: '24px',
};

const lineHeight = {
  xxs: '16px',
  xs: '20px',
  sm: '24px',
  base: '24px',
  md: '28px',
  lg: '34px',
};

const letterSpacing = {
  xxs: '-0.005em',
  xs: '-0.01em',
  sm: '-0.01em',
  base: '-0.01em',
  md: '-0.02em',
  lg: '-0.01em',
};

const spacing = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '40px',
  xxl: '48px',
  huge: '56px',
};

export const gutter = 10;

const theme: DefaultTheme = {
  breakpoints,
  fontFamily,
  color,
  fontsize,
  lineHeight,
  letterSpacing,
  spacing,
  gutter,
};

export default theme;
