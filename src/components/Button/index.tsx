import styled, { css } from 'styled-components';
import { inlineFlexBox } from 'styles/utils/flexbox';
import { textStyle } from 'styles/utils/typography';

type ButtonType = 'primary' | 'secondary' | 'outlined' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

type ButtonProps = {
  type?: ButtonType;
  size?: ButtonSize;
  children: any;
  onClick?: () => void;
};

const Button = (props: ButtonProps) => {
  const { type = 'primary', size = 'full', children, onClick } = props;
  return (
    <Styled.Button btnType={type} size={size} onClick={onClick}>
      {children}
    </Styled.Button>
  );
};

type ButtonStyleProps = {
  btnType: ButtonType;
  size: ButtonSize;
};

const setButtonStyle = {
  primary: css`
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.blue};
    transition: background-color 200ms ease-in-out;

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.color.blueDark};
    }
  `,

  secondary: css`
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.border};
    transition: background-color 200ms ease-in-out;

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.color.tertiary};
    }
  `,

  outlined: css`
    color: ${({ theme }) => theme.color.blue};
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.blue};
    transition: background-color 200ms ease-in-out;

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.color.blueLight};
    }
  `,

  ghost: css`
    color: ${({ theme }) => theme.color.primary};
    background-color: transparent;
    transition: background-color 200ms ease-in-out;

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.color.secondary};
    }
  `,
};

const setButtonSize = {
  sm: css`
    ${textStyle('sm')}
    height: 32px;
  `,

  md: css`
    ${textStyle('base')}
    height: 40px;
  `,

  lg: css`
    ${textStyle('base')}
    height: 48px;
  `,

  xl: css`
    ${textStyle('md')}
    height: 55px;
  `,

  full: css`
    ${textStyle('md')}
    width: 100%;
    height: 55px;
  `,
};

const Styled = {
  Button: styled.button<ButtonStyleProps>`
    ${inlineFlexBox()}
    padding: 0 8px;
    border-radius: 4px;
    font-weight: 700;
    ${({ btnType }) => setButtonStyle[btnType]};
    ${({ size }) => setButtonSize[size]};
  `,
};

export default Button;
