import React from 'react';

import { Typography } from '@components/Typography';

import { locale } from './locale';
export function NotFound() {
  return (
    <>
      <Typography variant="h2" align="center">
        {locale.not_found_heading1}
      </Typography>
      <Typography variant="h4" align="center">
        {locale.not_found_heading2}
      </Typography>
      <Typography variant="subtitle1" align="center">
        {locale.not_found_subtext}
      </Typography>
    </>
  );
}
