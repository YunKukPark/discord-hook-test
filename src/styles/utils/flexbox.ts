import { css } from 'styled-components';

function convertFullName(value: string): string {
  switch (value) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'between':
      return 'space-between';
    case 'around':
      return 'space-around';
    default:
      return value;
  }
}

export const flexBox = (
  direction = 'row',
  align = 'center',
  justify = 'center'
) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${convertFullName(align)};
  justify-content: ${convertFullName(justify)};
`;

export const inlineFlexBox = (
  direction = 'row',
  align = 'center',
  justify = 'center'
) => css`
  display: inline-flex;
  flex-direction: ${direction};
  align-items: ${convertFullName(align)};
  justify-content: ${convertFullName(justify)};
`;
