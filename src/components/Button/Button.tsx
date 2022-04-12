/* We have to disable this rule because we need to pass native button attributes */
/* eslint-disable react/jsx-props-no-spreading */
import React, { SyntheticEvent } from 'react';

import ButtonMaterial, { ButtonProps as ButtonPropsMaterial } from '@mui/material/Button';
import classNames from 'classnames/bind';

import { SvgIcon, IconType } from '@components/SvgIcon';

import styles from './Button.module.css';

export type ButtonProps = {
  className?: string;
  endIcon?: IconType;
  id?: string;
  noHover?: boolean;
  disableRipple?: boolean;
  onClick?: (event: SyntheticEvent) => void;
  startIcon?: IconType;
} & Pick<ButtonPropsMaterial, 'children' | 'disabled' | 'variant' | 'color' | 'size'>;

const cn = classNames.bind(styles);

export function Button({
  children,
  className,
  color,
  disabled,
  endIcon,
  id,
  noHover = false,
  onClick,
  size = 'medium',
  startIcon,
  variant = 'text',
  disableRipple = false,
  ...buttonProps
}: ButtonProps) {
  return (
    <ButtonMaterial
      {...buttonProps}
      className={cn('button', className, {
        'button--contained': variant === 'contained',
        'button--text': variant === 'text',
        'button--outlined': variant === 'outlined',
        'button--warning': color === 'warning',
        'button--small': size === 'small',
        'button--large': size === 'large',
        'button--no-hover': noHover,
      })}
      disabled={disabled}
      onClick={onClick}
      id={id}
      disableRipple={disableRipple}
      startIcon={startIcon && <SvgIcon className={cn('button__icon')} icon={startIcon} />}
      endIcon={endIcon && <SvgIcon className={cn('button__icon')} icon={endIcon} />}
    >
      {children}
    </ButtonMaterial>
  );
}
