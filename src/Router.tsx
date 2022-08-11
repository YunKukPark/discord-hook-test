import App from 'App';
import Test from 'pages/Test';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

const Router = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
