import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Article } from './Article';
import { increment, articleValueSelector, articleTestAction } from './store';

export function Container() {
  const dispatch = useDispatch();
  const incrementHandler = React.useCallback(() => {
    dispatch(increment());
  }, []);
  const incrementAsyncHandler = React.useCallback(() => {
    dispatch(articleTestAction());
  }, []);
  const articleValue = useSelector(articleValueSelector);

  return (
    <Article
      incrementHandler={incrementHandler}
      incrementAsyncHandler={incrementAsyncHandler}
      articleValue={articleValue}
    />
  );
}
