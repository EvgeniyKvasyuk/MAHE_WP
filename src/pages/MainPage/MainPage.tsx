import React from 'react';

import { Link } from 'react-router-dom';

import { ROUTES } from '@common/routes';
import { InnerLayout } from '@components/InnerLayout';
import { WhatsNew } from '@modules/WhatsNew';

import { locale } from './locale';

export function MainPage() {
  return (
    <InnerLayout rightSidebar={<WhatsNew />}>
      <Link to={ROUTES.ARTICLE}>{locale.article_link}</Link>
    </InnerLayout>
  );
}
