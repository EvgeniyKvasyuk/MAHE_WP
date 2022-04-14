import React, { useState, useCallback } from 'react';

import MobileStepperMaterial from '@mui/material/MobileStepper';
import classNames from 'classnames/bind';

import { Button } from '@components/Button';
import { SvgIcon } from '@components/SvgIcon';
import { SwipeableViews } from '@components/SwipeableViews';
import { Typography } from '@components/Typography';

import styles from './Carousel.module.css';

const cn = classNames.bind(styles);

type CarouselContent = { id: string; imagePath: string }[];

export type CarouselProps = {
  carouselContent: CarouselContent;
  title: string;
  className?: string;
  imgClassName?: string;
  stepperClassName?: string;
};

export function Carousel({ carouselContent, title, imgClassName, className, stepperClassName }: CarouselProps) {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = carouselContent.length;

  const handleNext = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }, []);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, []);

  const handleStepChange = useCallback((step: number) => {
    setActiveStep(step);
  }, []);

  return (
    <div className={cn('carousel', className)}>
      <div className={cn('carousel__header')}>
        <Typography className={cn('carousel__header-heading')}>{title}</Typography>
        <div>
          <Button
            className={cn('carousel__button')}
            disabled={activeStep === 0}
            noHover
            onClick={handleBack}
            disableRipple
          >
            <SvgIcon className={cn('carousel__icon')} icon="circleChevronLeft" />
          </Button>
          <Button
            className={cn('carousel__button')}
            disabled={activeStep === maxSteps - 1}
            noHover
            onClick={handleNext}
            disableRipple
          >
            <SvgIcon className={cn('carousel__icon')} icon="circleChevronRight" />
          </Button>
        </div>
      </div>

      <SwipeableViews index={activeStep} onChangeIndex={handleStepChange}>
        {carouselContent.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={cn('carousel__image', imgClassName)} src={step.imagePath} alt={step.id} />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepperMaterial
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={null}
        backButton={null}
        className={cn('carousel__stepper', stepperClassName)}
        classes={{ dot: cn('carousel__stepper-dot'), dotActive: cn('carousel__stepper-dot-active') }}
      />
    </div>
  );
}
