import React from 'react';

import { Button } from '@components/Button';

export interface ArticleProps {
    incrementHandler: () => void
    incrementAsyncHandler: () => void
    articleValue: number
}

export function Article({
  incrementHandler,
  incrementAsyncHandler,
  articleValue,
}: ArticleProps) {
  return (
    <div>
      <h1>Article page</h1>
      <div>
        articleValue =
        {articleValue}
      </div>
      <Button label="Increment by 1" onClick={incrementHandler} />
      <Button label="Async test increment" onClick={incrementAsyncHandler} />
    </div>
  );
}
