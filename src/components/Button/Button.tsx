/* We have to disable this rule because we need to pass native button attributes */
/* eslint-disable react/jsx-props-no-spreading */
import React, { SyntheticEvent } from 'react';

import ButtonMaterial, { ButtonProps as ButtonPropsMaterial } from '@mui/material/Button';
import classNames from 'classnames/bind';

import { Icon } from '@components/Icon';

import styles from './Button.module.css';

export type ButtonProps = {
  className?: string;
  endIcon?: string;
  id?: string;
  noHover?: boolean;
  onClick?: (event: SyntheticEvent) => void;
  startIcon?: string;
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
      startIcon={startIcon && <Icon className={cn('button__icon')}>{startIcon}</Icon>}
      endIcon={endIcon && <Icon className={cn('button__icon')}>{endIcon}</Icon>}
    >
      {children}
    </ButtonMaterial>
  );
}
