import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  html {
    font-family: ${({ theme }) => theme.fontFamily.main};
    font-size: ${({ theme }) => theme.fontsize.base};
    letter-spacing: ${({ theme }) => theme.letterSpacing.base};
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily.main};
    color: ${({ theme }) => theme.color.primary};
  }

  h1 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  a,
  button {
    cursor: pointer;
  }

  button {
    padding: 0;
  }

  ul,
  ol {
    padding-left: 0;
    list-style: none;
  }

  address {
    font-style: normal;
  }
`;

export default GlobalStyle;
