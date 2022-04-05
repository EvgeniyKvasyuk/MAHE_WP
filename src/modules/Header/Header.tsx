import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { Header as HeaderComponent } from './components';
import { mainMenuToggle } from './store';

export function Header() {
  const dispatch = useDispatch();

  const mainMenuToggleHandler = useCallback(() => {
    dispatch(mainMenuToggle());
  }, [dispatch]);

  return <HeaderComponent mainMenuToggleHandler={mainMenuToggleHandler} />;
}
