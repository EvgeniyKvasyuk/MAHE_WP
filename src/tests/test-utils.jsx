import React from 'react';

import { configureStore } from '@reduxjs/toolkit';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { reducers } from '../store';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: reducers,
      preloadedState,
    }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <Router>
        <Provider store={store}>{children}</Provider>
      </Router>
    );
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
