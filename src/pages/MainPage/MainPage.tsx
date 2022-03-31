import React from 'react';

import { Link } from 'react-router-dom';

import { ROUTES } from '@common/routes';

import { locale } from './locale';

export function MainPage() {
  return (
    <div>
      <Link to={ROUTES.ARTICLE}>{locale.article_link}</Link>
    </div>
  );
}
