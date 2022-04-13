import React from 'react';

import { render } from '@testing-library/react';

import { noop } from '@common/utils';

import { SideMenu, AnchorEnum } from '../SideMenu';

test('<SideMenu> snapshot', () => {
  const menu = (
    <SideMenu open anchor={AnchorEnum.left} onClose={noop}>
      <div>test_menu_item1</div>
      <div>test_menu_item2</div>
    </SideMenu>
  );

  const component = render(menu);

  expect(component).toMatchSnapshot();
});
