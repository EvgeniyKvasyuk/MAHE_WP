import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Carousel as CarouselComponent, CarouselProps } from '../Carousel';
import { COMPONENT } from './constants';

export default {
  title: COMPONENT.TITLE,
  component: CarouselComponent,

  parameters: {
    docs: {
      description: {
        component: COMPONENT.DESCRIPTION,
      },
    },
  },
} as Meta<CarouselProps>;

const images = [
  {
    id: '1',
    imagePath:
      'https://images.unsplash.com/photo-1614102073832-030967418971?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
  },
  {
    id: '2',
    imagePath:
      'https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '3',
    imagePath:
      'https://images.unsplash.com/photo-1605007493699-af65834f8a00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  },
  {
    id: '4',
    imagePath:
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80',
  },
  {
    id: '5',
    imagePath:
      'https://images.unsplash.com/photo-1609154767012-331529e7d73b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80',
  },
];

export const Carousel: Story<CarouselProps> = function () {
  return (
    <div style={{ maxWidth: '30rem' }}>
      <CarouselComponent title="Sample" carouselContent={images} />
    </div>
  );
};
