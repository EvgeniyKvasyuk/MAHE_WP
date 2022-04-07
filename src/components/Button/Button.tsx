import React, { SyntheticEvent } from 'react';

import ButtonMaterial, { ButtonProps as ButtonPropsMaterial } from '@mui/material/Button';
import classNames from 'classnames/bind';

import { Icon } from '@components/Icon';

import styles from './Button.module.css';

export type ButtonProps = {
  className?: string;
  endIcon?: string;
  startIcon?: string;
  onClick?: (event: SyntheticEvent) => void;
  noHover?: boolean;
} & Pick<ButtonPropsMaterial, 'children' | 'disabled' | 'variant' | 'color' | 'size'>;

const cn = classNames.bind(styles);

export function Button({
  children,
  className,
  disabled,
  endIcon,
  startIcon,
  onClick,
  variant = 'text',
  color,
  size = 'medium',
  noHover = false,
}: ButtonProps) {
  return (
    <ButtonMaterial
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
      startIcon={startIcon && <Icon className={cn('button__icon')}>{startIcon}</Icon>}
      endIcon={endIcon && <Icon className={cn('button__icon')}>{endIcon}</Icon>}
    >
      {children}
    </ButtonMaterial>
  );
}
