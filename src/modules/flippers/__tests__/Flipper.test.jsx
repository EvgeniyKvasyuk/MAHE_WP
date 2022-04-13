import React from 'react';

import { render, screen } from '@tests/test-utils';

import { Flipper } from '../Flipper';
import { FlippersEnum } from '../constants';

const flipper = FlippersEnum.HideMedRefills;

const flipperActive = {
  flippers: { flippers: { [flipper]: { key: flipper, value: false } } },
};

const flipperDisabled = {
  flippers: { flippers: { [flipper]: { key: flipper, value: true } } },
};

describe('Testing Flipper component', () => {
  test('Flipper should show element', () => {
    render(
      <Flipper flipper={flipper}>
        <div>show_test_flipper</div>
      </Flipper>,
      { preloadedState: flipperActive },
    );

    expect(screen.getByText(/show_test_flipper/i)).toBeInTheDocument();
  });

  test('Flipper should hide element', () => {
    render(
      <Flipper flipper={flipper}>
        <div>hide_test_flipper</div>
      </Flipper>,
      { preloadedState: flipperDisabled },
    );

    expect(screen.queryByText(/hide_test_flipper/i)).not.toBeInTheDocument();
  });
});
