import React, { SyntheticEvent } from 'react';

import ButtonMaterial, { ButtonProps as ButtonPropsMaterial } from '@mui/material/Button';
import classNames from 'classnames/bind';

import { SvgIcon, IconType } from '@components/SvgIcon';

import styles from './Button.module.css';

export type ButtonProps = {
  className?: string;
  endIcon?: IconType;
  startIcon?: IconType;
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
      startIcon={startIcon && <SvgIcon className={cn('button__icon')} icon={startIcon} />}
      endIcon={endIcon && <SvgIcon className={cn('button__icon')} icon={endIcon} />}
    >
      {children}
    </ButtonMaterial>
  );
}
