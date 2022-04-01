import React, { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Header as HeaderComponent } from './components';
import { mainMenuToggle, mainMenuOpenSelector } from './store';

export function Header() {
  const dispatch = useDispatch();

  const mainMenuToggleHandler = useCallback(() => {
    dispatch(mainMenuToggle());
  }, [dispatch]);

  const mainMenuOpen = useSelector(mainMenuOpenSelector);

  return <HeaderComponent mainMenuToggleHandler={mainMenuToggleHandler} mainMenuOpen={mainMenuOpen} />;
}
