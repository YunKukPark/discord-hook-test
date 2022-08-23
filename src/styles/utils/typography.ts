import { css, TypographyScale } from 'styled-components';
import theme from 'styles/theme';

export const textStyle = (size: TypographyScale) =>
  css`
    font-size: ${theme.fontsize[size]};
    line-height: ${theme.lineHeight[size]};
    letter-spacing: ${theme.letterSpacing[size]};
  `;
