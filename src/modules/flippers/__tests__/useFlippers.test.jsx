import React from 'react';

import { render, screen } from '../../../tests/test-utils';
import { FlippersEnum } from '../constants';
import { useFlippers } from '../hooks';

const flipper = FlippersEnum.HideMedRefills;

const flipperActive = {
  flippers: { flippers: { [flipper]: { key: flipper, value: false } } },
};

const flipperDisabled = {
  flippers: { flippers: { [flipper]: { key: flipper, value: true } } },
};

describe('Testing useFlippers', () => {
  const Test = () => {
    const getFlipperValue = useFlippers();

    if (getFlipperValue(flipper)) {
      return null;
    }

    return <div>test_flippers_text</div>;
  };

  test('show element by flipper', () => {
    render(<Test />, { preloadedState: flipperActive });

    expect(screen.queryByText(/test_flippers_text/i)).toBeInTheDocument();
  });

  test('hide element by flipper', () => {
    render(<Test />, { preloadedState: flipperDisabled });

    expect(screen.queryByText(/test_flippers_text/i)).not.toBeInTheDocument();
  });
});
