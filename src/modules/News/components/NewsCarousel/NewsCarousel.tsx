import React from 'react';

import classNames from 'classnames/bind';

import { Button } from '@components/Button';
import { Carousel } from '@components/Carousel';
import { Typography } from '@components/Typography';

import styles from './NewsCarousel.module.css';
import { locale } from './locale';

const cn = classNames.bind(styles);

type NewsCarouselContent = { id: string; imagePath: string }[];

type NewsCarouselProps = {
  carouselContent: NewsCarouselContent;
  title: string;
};

export function NewsCarousel({ carouselContent, title }: NewsCarouselProps) {
  return (
    <div className={cn('news-carousel')}>
      <Carousel carouselContent={carouselContent} title={title} />
      <Typography className={cn('news-carousel__content-heading')} variant="h3">
        {locale.mobile_heading}
      </Typography>
      <Typography className={cn('news-carousel__content-subtext')}>{locale.mobile_subtext}</Typography>
      <div className={cn('news-carousel__content-button-container')}>
        <Button noHover disableRipple className={cn('news-carousel__content-button')} variant="outlined">
          {locale.mobile_btn_text}
        </Button>
      </div>
    </div>
  );
}
