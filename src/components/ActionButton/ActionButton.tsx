import React, { SyntheticEvent } from 'react';

import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase';
import classNames from 'classnames/bind';

import { SvgIcon, IconType } from '@components/SvgIcon';
import { Typography } from '@components/Typography';

import styles from './ActionButton.module.css';

const cn = classNames.bind(styles);

export type ActionButtonProps = {
  className?: string;
  title: string;
  onClick: (event: SyntheticEvent) => void;
  icon: IconType;
} & Pick<ButtonBaseProps, 'disabled'>;

export function ActionButton({ className, title, onClick, disabled, icon }: ActionButtonProps) {
  return (
    <ButtonBase
      className={cn('action-button', className, {
        'action-button--disabled': disabled,
      })}
      onClick={onClick}
      disabled={disabled}
      focusRipple
    >
      <div className={cn('action-button__icon-container')}>
        <div className={cn('action-button__action-icon-container')}>
          <SvgIcon icon={icon} className={cn('action-button__action-icon')} />
        </div>
        <SvgIcon icon="arrowRight" className={cn('action-button__arrow-icon')} />
      </div>
      <Typography className={cn('action-button__title')} align="left">
        {title}
      </Typography>
    </ButtonBase>
  );
}
