import React, { useCallback, useState } from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useIgnoreEffectDeps } from '..';

test('useIgnoreEffectDeps', () => {
  const fn = jest.fn();
  const Test = () => {
    const [dep, setDep] = useState(0);
    const [state, setState] = useState('a');

    const functionThatChanges = useCallback(() => {
      fn(state);
    }, [state]);

    useIgnoreEffectDeps(functionThatChanges, [dep]);

    const incrementDep = () => {
      setDep((oldState) => oldState + 1);
    };

    const updateFunction = () => {
      setState((oldState) => `${oldState}a`);
    };

    return (
      <>
        <button data-testid="button1" type="button" onClick={incrementDep}>
          button
        </button>
        <button data-testid="button2" type="button" onClick={updateFunction}>
          button
        </button>
      </>
    );
  };

  const { getByTestId } = render(<Test />);
  const incrementStateButton = getByTestId('button1');
  const updateFunctionButton = getByTestId('button2');

  expect(fn).toBeCalledTimes(1);
  expect(fn).lastCalledWith('a');

  fireEvent.click(incrementStateButton);
  expect(fn).toBeCalledTimes(2);
  expect(fn).lastCalledWith('a');

  fireEvent.click(updateFunctionButton);
  fireEvent.click(updateFunctionButton);
  expect(fn).toBeCalledTimes(2);

  fireEvent.click(incrementStateButton);
  expect(fn).toBeCalledTimes(3);
  expect(fn).lastCalledWith('aaa');
});

test('useIgnoreEffectDeps with empty deps', () => {
  const fn = jest.fn();
  const Test = () => {
    const [state, setState] = useState('a');

    const functionThatChanges = useCallback(() => {
      fn(state);
    }, [state]);

    useIgnoreEffectDeps(functionThatChanges);

    const incrementState = () => {
      setState((oldState) => oldState + 1);
    };

    return (
      <button data-testid="button1" type="button" onClick={incrementState}>
        button
      </button>
    );
  };

  const { getByTestId } = render(<Test />);
  const incrementStateButton = getByTestId('button1');

  expect(fn).toBeCalledTimes(1);
  expect(fn).lastCalledWith('a');

  fireEvent.click(incrementStateButton);
  expect(fn).toBeCalledTimes(1);
  expect(fn).lastCalledWith('a');
});
