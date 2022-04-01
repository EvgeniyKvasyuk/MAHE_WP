import React, { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Header } from './Header';
import { mainMenuToggle, mainMenuOpenSelector } from './store';

export function Container() {
  const dispatch = useDispatch();

  const mainMenuToggleHandler = useCallback(() => {
    dispatch(mainMenuToggle());
  }, [dispatch]);

  const mainMenuOpen = useSelector(mainMenuOpenSelector);

  return <Header mainMenuToggleHandler={mainMenuToggleHandler} mainMenuOpen={mainMenuOpen} />;
}
