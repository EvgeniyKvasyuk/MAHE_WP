import React from 'react';

import { Link } from 'react-router-dom';

import { ROUTES } from '@common/routes';
import { InnerLayout } from '@components/InnerLayout';
import { SideBar } from '@modules/SideBar';

import { locale } from './locale';

export function MainPage() {
  return (
    <InnerLayout rightSidebar={<SideBar />}>
      <Link to={ROUTES.ARTICLE}>{locale.article_link}</Link>
    </InnerLayout>
  );
}
