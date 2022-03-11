import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, articleValueSelector, articleTestAction } from './store';
import { Article } from './article';

export function ArticleContainer() {
    const dispatch = useDispatch();
    const incrementHandler = React.useCallback(() => {
        dispatch(increment());
    }, []);
    const incrementAsyncHandler = React.useCallback(() => {
        dispatch(articleTestAction())
    }, [])
    const articleValue = useSelector(articleValueSelector);

    return (
        <Article incrementHandler={incrementHandler}
                 incrementAsyncHandler={incrementAsyncHandler}
                 articleValue={articleValue}
        />
    );
}
