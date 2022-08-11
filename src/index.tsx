import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from 'Router';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
