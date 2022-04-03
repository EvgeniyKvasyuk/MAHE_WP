import React from 'react';

import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ROUTES } from './common/routes';
import { BaseLayout } from './modules/BaseLayout';
import { Appointments } from './pages/Appointments';
import { ArticlePage } from './pages/ArticlePage';
import { MainPage } from './pages/MainPage';

function App() {
  console.log('new');
  return (
    <StyledEngineProvider injectFirst>
      <Router>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route element={<MainPage />} path={ROUTES.MAIN_PAGE} />
            <Route path={ROUTES.APPOINTMENTS} element={<Appointments />} />
            <Route path={ROUTES.ARTICLE} element={<ArticlePage />} />
          </Route>
        </Routes>
      </Router>
    </StyledEngineProvider>
  );
}

export default App;
