import React from 'react';

import classNames from 'classnames/bind';

import styles from './Footer.module.css';
import { locale } from './locale';

const cn = classNames.bind(styles);

export function Footer() {
  return <footer className={cn('footer')}>{locale.title}</footer>;
}
