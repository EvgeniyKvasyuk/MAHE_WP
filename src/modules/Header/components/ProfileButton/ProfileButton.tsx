import React from 'react';

import classNames from 'classnames/bind';

import styles from './ProfileButton.module.css';

const cn = classNames.bind(styles);

export interface ProfileButtonProps {
  userFirstName: string;
  userLastName: string;
  onClick?: (event?: React.SyntheticEvent) => void;
}

export function ProfileButton({ userFirstName, userLastName, onClick }: ProfileButtonProps) {
  return (
    <div className={cn('profile-button')} onClick={onClick} role="presentation">
      <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="23.9999" cy="25.0001" r="22.9999" stroke="#6C737A" strokeWidth="2" />
        <text
          className={cn('profile-button__text')}
          x="50%"
          y="50%"
          textAnchor="middle"
          fill="#6C737A"
          dy=".4em"
        >{`${userFirstName[0]}${userLastName[0]}`}</text>
        <path
          d="M48 7.54531C48 11.1607 45.069 14.0911 41.4546 14.0911C37.8402 14.0911 34.9092 11.1607 34.9092 7.54531C34.9092 3.93067 37.8402 1.00024 41.4546 1.00024C45.069 1.00024 48 3.93067 48 7.54531Z"
          fill="#FF4F23"
        />
        <path
          d="M48 7.54531C48 11.1607 45.069 14.0911 41.4546 14.0911C37.8402 14.0911 34.9092 11.1607 34.9092 7.54531C34.9092 3.93067 37.8402 1.00024 41.4546 1.00024C45.069 1.00024 48 3.93067 48 7.54531"
          stroke="white"
        />
      </svg>
    </div>
  );
}
