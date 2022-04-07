import React from 'react';

import { Button } from '@components/Button';

import { locale } from './locale';

export interface ArticleProps {
  incrementHandler: () => void;
  incrementAsyncHandler: () => void;
  articleValue: number;
}

export function Article({ incrementHandler, incrementAsyncHandler, articleValue }: ArticleProps) {
  return (
    <div>
      <h1>Article page</h1>
      <div>articleValue ={articleValue}</div>
      <Button onClick={incrementHandler}>{locale.increment}</Button>
      <Button onClick={incrementAsyncHandler}>{locale.async_increment}</Button>
    </div>
  );
}
