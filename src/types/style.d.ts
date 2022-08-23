import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export type TypographyScale = 'xxs' | 'xs' | 'sm' | 'base' | 'md' | 'lg';
  export interface DefaultTheme {
    breakpoints: {
      tablet: string;
      desktop: string;
    };

    fontFamily: {
      main: string;
    };

    color: {
      black: string;
      dark: string;
      primary: string;
      secondary: string;
      tertiary: string;
      border: string;
      background: string;
      white: string;
      blue: string;
      blueDark: string;
      blueLight: string;
    };

    fontsize: {
      xxs: string;
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
    };

    lineHeight: {
      xxs: string;
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
    };

    letterSpacing: {
      xxs: string;
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
    };

    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      huge: string;
    };

    gutter: number;
  }
}
