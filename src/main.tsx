import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { globalStyles } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {globalStyles()}
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
