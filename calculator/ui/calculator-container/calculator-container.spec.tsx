import React from 'react';
import { render } from '@testing-library/react';
import { BasicCalculatorContainer } from './calculator-container.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCalculatorContainer />);
  const rendered = getByText('hello from CalculatorContainer');
  expect(rendered).toBeTruthy();
});
