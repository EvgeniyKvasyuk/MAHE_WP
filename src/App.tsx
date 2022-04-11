import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ROUTES } from './common/routes';
import { BaseLayout } from './modules/BaseLayout';
import { Appointments } from './pages/Appointments';
import { ArticlePage } from './pages/ArticlePage';
import { MainPage } from './pages/MainPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path={ROUTES.MAIN_PAGE} element={<MainPage />} />
          <Route path={ROUTES.APPOINTMENTS.ROOT} element={<Appointments />} />
          <Route
            path={`${ROUTES.APPOINTMENTS.ROOT}${ROUTES.APPOINTMENTS.SCHEDULE_APPOINTMENT}`}
            element={<Appointments />}
          />
          <Route
            path={`${ROUTES.APPOINTMENTS.ROOT}${ROUTES.APPOINTMENTS.VIEW_APPOINTMENTS}`}
            element={<Appointments />}
          />
          <Route path={ROUTES.ARTICLE} element={<ArticlePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
