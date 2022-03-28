import { createSelector } from '@reduxjs/toolkit';

import { ArticleState } from './store';

const selectArticle = (state:any) :ArticleState => state.article;
export const articleValueSelector = createSelector(selectArticle, ({ value }) => value);
