import React from 'react';

import { StyledEngineProvider } from '@mui/material/styles';

import './App.css';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <MainPage />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
