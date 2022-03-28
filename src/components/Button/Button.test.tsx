import * as React from 'react';

import {render} from "@testing-library/react";

import {
  Button,
} from './Button';

describe('Button', () => {
  describe('basic render', () => {
    it('should render', () => {
      render(<Button />);
    });
  });
});
