import React from 'react';

import { StyledEngineProvider } from '@mui/material';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ErrorBoundary } from '@components/ErrorBoundary';

import App from './App';
import { NotFoundPage } from './pages/NotFoundPage';
import reportWebVitals from './reportWebVitals';
import { store } from './store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <ErrorBoundary fallBackComponent={NotFoundPage}>
        <App />
      </ErrorBoundary>
    </StyledEngineProvider>
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
