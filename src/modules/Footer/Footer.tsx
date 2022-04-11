import React from 'react';

import classNames from 'classnames/bind';

import styles from './Footer.module.css';
import { locale } from './locale';

const cn = classNames.bind(styles);

type Props = {
  className?: string;
};

export function Footer({ className }: Props) {
  return <footer className={cn('footer', className)}>{locale.title}</footer>;
}
