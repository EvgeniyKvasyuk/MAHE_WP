import React from 'react';

import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import { Accordion, AccordionSummary, AccordionDetails } from '@components/Accordion';
import { Divider } from '@components/Divider';
import { TabProps } from '@components/HorizontalMenu';
import { List } from '@components/List';
import { MenuItem } from '@components/Menu';
import { SideMenu } from '@components/SideMenu';
import { SvgIcon } from '@components/SvgIcon';
import { Flipper } from '@modules/flippers';

import { TAB_LIST } from '../../constants';
import styles from './BurgerMenu.module.css';

export enum AnchorEnum {
  left = 'left',
  right = 'right',
}

const cn = classNames.bind(styles);

export interface MainHeaderProps {
  mainMenuToggleHandler: VoidFunction;
  mainMenuOpen: boolean;
}

export function BurgerMenu({ mainMenuToggleHandler, mainMenuOpen }: MainHeaderProps) {
  const navigate = useNavigate();

  const handleLinkClick = (to: string) => () => {
    navigate(to);
    mainMenuToggleHandler();
  };

  const renderSubMenu = (tab: TabProps) => {
    return (
      <Accordion className={cn('burger-menu__accordion')} square disableGutters>
        <AccordionSummary
          className={cn('burger-menu__accordion-summary')}
          contentClassName={cn('burger-menu__accordion-summary-content')}
          expandIcon={<SvgIcon icon="chevronDown" />}
        >
          {tab.label}
        </AccordionSummary>

        <List className={cn('burger-menu__sub-menu')}>
          <AccordionDetails className={cn('burger-menu__sub-menu-details')}>
            {tab.subMenuItems &&
              tab.subMenuItems.map((subMenuItem) => (
                <MenuItem
                  key={subMenuItem.to || subMenuItem.label}
                  onClick={handleLinkClick(`${tab.to}${subMenuItem.to}`)}
                  noHover
                >
                  {subMenuItem.label}
                </MenuItem>
              ))}
          </AccordionDetails>
        </List>
      </Accordion>
    );
  };

  return (
    <SideMenu
      anchor={AnchorEnum.left}
      open={mainMenuOpen}
      onClose={mainMenuToggleHandler}
      className={cn('burger-menu')}
    >
      {TAB_LIST.map((tab) => {
        return (
          <Flipper flipper={tab.flipper} key={tab.to || tab.label}>
            <>
              <MenuItem
                className={cn('burger-menu__item', 'burger-menu__item--bold')}
                noHover
                onClick={tab?.subMenuItems ? undefined : handleLinkClick(tab.to)}
              >
                {tab?.subMenuItems ? renderSubMenu(tab) : tab.label}
              </MenuItem>

              <Divider />
            </>
          </Flipper>
        );
      })}
    </SideMenu>
  );
}
