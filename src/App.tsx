import React from 'react';

import { StyledEngineProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';

import { MainPage } from './pages/MainPage';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Routes>
        <Route element={<MainPage />} path="*" />
      </Routes>
    </StyledEngineProvider>
  );
}

export default App;
