import React from 'react';

import { SideMenu } from '@components/SideMenu';

import { locale } from './locale';

export enum AnchorEnum {
 left = 'left',
 right = 'right',
}

export interface MainHeaderProps {
  mainMenuToggleHandler: VoidFunction;
  mainMenuOpen: boolean;
}

export function BurgerMenu({
  mainMenuToggleHandler,
  mainMenuOpen,
}: MainHeaderProps) {
  return (
    <SideMenu
      anchor={AnchorEnum.left}
      open={mainMenuOpen}
      onClose={mainMenuToggleHandler}
    >
      {locale.title}
    </SideMenu>
  );
}
